import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Email manquant" }, { status: 400 });
        }

        if (!EMAIL_REGEX.test(email) || email.length > 100) {
            return NextResponse.json({ error: "Email invalide" }, { status: 400 });
        }

        await resend.emails.send({
            from: "AD Boots <contact@ad-boots.com>",
            to: "contact@ad-boots.com",
            subject: `[Newsletter] Nouvelle inscription — ${email}`,
            text: `Nouvelle inscription à la newsletter AD Boots.\n\nEmail : ${email}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
