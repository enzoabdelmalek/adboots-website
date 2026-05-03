import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const BUSINESS_ID = "f9e291c2-0fea-4b24-8abb-57264e001cd3";

interface CartItem {
    id: string;
    name: string;
    price: number;
    size: string;
    qty: number;
    image?: string;
}

export async function POST(req: NextRequest) {
    try {
        const { items }: { items: CartItem[] } = await req.json();

        if (!items?.length) {
            return NextResponse.json({ error: "Panier vide" }, { status: 400 });
        }

        const totalAmount = items.reduce((s, i) => s + i.price * i.qty, 0);

        // Créer l'ordre en base (pending)
        const { data: order, error: orderError } = await supabase
            .from("orders")
            .insert({
                business_id: BUSINESS_ID,
                status: "pending",
                total_amount: totalAmount,
                items: items.map(i => ({ name: `${i.name} — Taille ${i.size}`, price: i.price, qty: i.qty })),
            })
            .select("id")
            .single();

        if (orderError || !order) {
            console.error("Erreur création ordre:", orderError);
            return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
        }

        // Créer la session Stripe Checkout
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: items.map(item => ({
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: `${item.name} — Taille ${item.size}`,
                        ...(item.image ? { images: [item.image] } : {}),
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.qty,
            })),
            metadata: {
                order_id: order.id,
            },
            billing_address_collection: "required",
            shipping_address_collection: {
                allowed_countries: ["FR", "BE", "CH", "LU", "MC"],
            },
            customer_creation: "always",
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/commande/succes?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/produit`,
        });

        // Sauvegarder le session_id dans l'ordre
        await supabase
            .from("orders")
            .update({ notes: `stripe_session:${session.id}` })
            .eq("id", order.id);

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error("Erreur checkout:", err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
