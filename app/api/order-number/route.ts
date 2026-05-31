import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
    const sessionId = req.nextUrl.searchParams.get("session_id");

    if (!sessionId || !sessionId.startsWith("cs_")) {
        return NextResponse.json({ error: "session_id invalide" }, { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        const orderNumber = session.metadata?.order_number ?? null;

        if (!orderNumber) {
            return NextResponse.json({ error: "Numéro introuvable" }, { status: 404 });
        }

        return NextResponse.json({ order_number: orderNumber });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
