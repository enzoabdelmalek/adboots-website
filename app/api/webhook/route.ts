import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { generateInvoice } from "@/lib/generateInvoice";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
        return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
    }

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch {
        return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        const orderId = session.metadata?.order_id;
        const orderNumber = session.metadata?.order_number;

        if (!orderId) {
            return NextResponse.json({ error: "order_id manquant" }, { status: 400 });
        }

        // Only process confirmed payments
        if (session.payment_status !== "paid") {
            return NextResponse.json({ received: true });
        }

        // Idempotency: only process if still pending
        const { data: order } = await supabase
            .from("orders")
            .select("status, items, total_amount")
            .eq("id", orderId)
            .single();

        if (!order || order.status !== "pending") {
            return NextResponse.json({ received: true });
        }

        const customerName = session.customer_details?.name ?? "Client";
        const customerEmail = session.customer_details?.email ?? null;
        const customerPhone = session.customer_details?.phone ?? null;
        const shippingAddress = (session as any).shipping_details?.address ?? null;

        // Update order status
        await supabase
            .from("orders")
            .update({
                status: "processing",
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                updated_at: new Date().toISOString(),
            })
            .eq("id", orderId)
            .eq("status", "pending");

        // Send confirmation email with PDF invoice + internal notification
        if (orderNumber) {
            const date = new Date().toLocaleDateString("fr-FR", {
                day: "numeric", month: "long", year: "numeric",
            });

            const pdfBuffer = await generateInvoice({
                orderNumber,
                date,
                customerName,
                customerEmail: customerEmail ?? undefined,
                shippingAddress,
                items: order.items ?? [],
                totalAmount: order.total_amount ?? session.amount_total! / 100,
            });

            // Email de confirmation au client
            if (customerEmail) {
                await resend.emails.send({
                    from: "AD Boots <contact@ad-boots.com>",
                    to: customerEmail,
                    subject: `Confirmation de commande ${orderNumber} — AD Boots`,
                    text: [
                        `Bonjour ${customerName},`,
                        "",
                        `Merci pour votre commande ! Voici votre numéro de commande : ${orderNumber}`,
                        "",
                        "Votre commande sera expédiée sous 48h ouvrées.",
                        "Vous trouverez votre facture en pièce jointe.",
                        "",
                        "Pour toute question : contact@ad-boots.com",
                        "",
                        "L'équipe AD Boots",
                    ].join("\n"),
                    attachments: [
                        {
                            filename: `facture-${orderNumber}.pdf`,
                            content: pdfBuffer.toString("base64"),
                        },
                    ],
                });
            }

            // Notification interne
            await resend.emails.send({
                from: "AD Boots <contact@ad-boots.com>",
                to: "contact@ad-boots.com",
                subject: `🛒 Nouvelle commande ${orderNumber}`,
                text: [
                    `Nouvelle commande reçue et payée.`,
                    "",
                    `Commande : ${orderNumber}`,
                    `Client : ${customerName}`,
                    `Email : ${customerEmail ?? "—"}`,
                    `Téléphone : ${customerPhone ?? "—"}`,
                    `Montant : ${(order.total_amount ?? session.amount_total! / 100).toFixed(2)} €`,
                    "",
                    `Articles :`,
                    ...(order.items ?? []).map((i: { name: string; qty: number; price: number }) =>
                        `  - ${i.name} × ${i.qty} → ${(i.price * i.qty).toFixed(2)} €`
                    ),
                ].join("\n"),
            });
        }
    }

    return NextResponse.json({ received: true });
}
