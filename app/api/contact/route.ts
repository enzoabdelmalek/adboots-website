import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEy);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { prenom, nom, email, sujet, message } = body;

        if (!prenom || !nom || !email || !message) {
            return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
        }

        await resend.emails.send({
            from: "AD Boots <contact@ad-boots.com>",
            to: "contact@adboots.fr",
            replyTo: email,
            subject: `[Contact] ${sujet || "Nouveau message"} — ${prenom} ${nom}`,
            text: `Nouveau message depuis le formulaire de contact AD Boots.\n\nDe : ${prenom} ${nom}\nEmail : ${email}\nSujet : ${sujet || "Non précisé"}\n\n---\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
