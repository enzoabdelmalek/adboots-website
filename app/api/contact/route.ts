import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { prenom: 50, nom: 50, email: 100, sujet: 200, message: 5000 };

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { prenom, nom, email, sujet, message } = body;

        if (!prenom || !nom || !email || !message) {
            return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
        }

        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json({ error: "Email invalide" }, { status: 400 });
        }

        for (const [field, max] of Object.entries(MAX_LENGTHS)) {
            if (body[field] && body[field].length > max) {
                return NextResponse.json({ error: "Champ trop long" }, { status: 400 });
            }
        }

        await resend.emails.send({
            from: "AD Boots <contact@ad-boots.com>",
            to: "contact@ad-boots.com",
            replyTo: email,
            subject: `[Contact] ${sujet || "Nouveau message"} — ${prenom} ${nom}`,
            text: `Nouveau message depuis le formulaire de contact AD Boots.\n\nDe : ${prenom} ${nom}\nEmail : ${email}\nSujet : ${sujet || "Non précisé"}\n\n---\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
