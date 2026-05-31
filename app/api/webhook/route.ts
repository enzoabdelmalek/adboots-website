import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

        if (!orderId) {
            return NextResponse.json({ error: "order_id manquant" }, { status: 400 });
        }

        // Idempotency: only process if still pending
        const { data: order } = await supabase
            .from("orders")
            .select("status")
            .eq("id", orderId)
            .single();

        if (!order || order.status !== "pending") {
            return NextResponse.json({ received: true });
        }

        const customerName = session.customer_details?.name ?? null;
        const customerEmail = session.customer_details?.email ?? null;
        const customerPhone = session.customer_details?.phone ?? null;

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
    }

    return NextResponse.json({ received: true });
}
