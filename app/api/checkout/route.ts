import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";

function generateOrderNumber(orderId: string): string {
    const hash = createHash("sha256")
        .update(orderId + Date.now().toString())
        .digest("hex");
    return "ADB-" + hash.substring(0, 8).toUpperCase();
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const BUSINESS_ID = "f9e291c2-0fea-4b24-8abb-57264e001cd3";

const PRODUCT_CATALOG: Record<string, { name: string; price: number }> = {
    "adboots-pro": { name: "Bottes récupératives", price: 350 },
};

interface CartItem {
    id: string;
    size: string;
    qty: number;
}

export async function POST(req: NextRequest) {
    try {
        const { items }: { items: CartItem[] } = await req.json();

        if (!items?.length) {
            return NextResponse.json({ error: "Panier vide" }, { status: 400 });
        }

        const VALID_SIZES = ["M", "L"];

        // Validate all items against server-side catalog
        for (const item of items) {
            if (!PRODUCT_CATALOG[item.id]) {
                return NextResponse.json({ error: "Produit invalide" }, { status: 400 });
            }
            if (!VALID_SIZES.includes(item.size)) {
                return NextResponse.json({ error: "Taille invalide" }, { status: 400 });
            }
            if (!Number.isInteger(item.qty) || item.qty < 1 || item.qty > 10) {
                return NextResponse.json({ error: "Quantité invalide" }, { status: 400 });
            }
        }

        const resolvedItems = items.map(i => ({
            ...i,
            name: PRODUCT_CATALOG[i.id].name,
            price: PRODUCT_CATALOG[i.id].price,
        }));

        const totalAmount = resolvedItems.reduce((s, i) => s + i.price * i.qty, 0);

        // Générer un UUID temporaire pour le hash avant insert
        const tempId = crypto.randomUUID();
        const orderNumber = generateOrderNumber(tempId);

        // Créer l'ordre en base (pending)
        const { data: order, error: orderError } = await supabase
            .from("orders")
            .insert({
                business_id: BUSINESS_ID,
                status: "pending",
                total_amount: totalAmount,
                order_number: orderNumber,
                items: resolvedItems.map(i => ({ name: `${i.name} — Taille ${i.size}`, price: i.price, qty: i.qty })),
            })
            .select("id, order_number")
            .single();

        if (orderError || !order) {
            return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
        }

        // Créer la session Stripe Checkout
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card", "paypal"],
            line_items: resolvedItems.map(item => ({
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: `${item.name} — Taille ${item.size}`,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.qty,
            })),
            metadata: {
                order_id: order.id,
                order_number: order.order_number,
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
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
