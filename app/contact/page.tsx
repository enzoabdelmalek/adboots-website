"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMail, IconClock, IconPackage } from "@/app/components/Icons";

const FAQ = [
    { q: "Quel est le délai de livraison ?", a: "Livraison sous 2 à 4 jours ouvrés en France métropolitaine. Livraison express disponible en 24h pour un supplément de 9,90 €." },
    { q: "Comment se passe le retour ?", a: "Vous disposez de 30 jours pour nous retourner le produit dans son emballage d'origine. Les frais de retour sont à votre charge sauf en cas de défaut." },
    { q: "La garantie couvre quoi ?", a: "La garantie 2 ans couvre tous les défauts de fabrication. Hors usure normale et dommages accidentels." },
    { q: "Y a-t-il un SAV téléphonique ?", a: "Notre équipe répond par email sous 24h, du lundi au vendredi. Pour les urgences, un numéro direct est accessible sur facture." },
];

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prenom, nom, email, sujet, message }),
            });
            if (!res.ok) throw new Error();
            setSent(true);
        } catch {
            setError("Une erreur est survenue. Réessayez ou écrivez-nous directement à contact@adboots.fr.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Header */}
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div style={{ maxWidth: 480 }}>
                        <p className="label anim-1" style={{ marginBottom: 20 }}>Contact</p>
                        <h1 className="heading-xl anim-2" style={{ marginBottom: 24 }}>On est là.</h1>
                        <div className="divider divider-animated" />
                        <p className="anim-3" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                            Une question sur le produit, une commande en cours, un problème technique ? On répond sous 24h.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>

                        {/* Form */}
                        <div data-sr="left">
                            <p className="label" style={{ marginBottom: 28 }}>Envoyer un message</p>

                            {sent ? (
                                <div style={{ padding: 36, background: "rgba(41,184,99,0.06)", border: "1px solid rgba(41,184,99,0.2)", borderRadius: 8, textAlign: "center" }}>
                                    <p style={{ color: "var(--accent)", fontSize: "1.5rem", marginBottom: 12 }}>✓</p>
                                    <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>Message envoyé !</p>
                                    <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Nous vous répondons sous 24h (hors week-end).</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    <div className="grid-2" style={{ gap: 16 }}>
                                        <div className="form-group">
                                            <label htmlFor="contact-prenom" className="form-label">Prénom</label>
                                            <input id="contact-prenom" type="text" className="form-input" placeholder="Théo" required value={prenom} onChange={e => setPrenom(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contact-nom" className="form-label">Nom</label>
                                            <input id="contact-nom" type="text" className="form-input" placeholder="Martin" required value={nom} onChange={e => setNom(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email" className="form-label">Email</label>
                                        <input id="contact-email" type="email" className="form-input" placeholder="theo@exemple.fr" required value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-sujet" className="form-label">Sujet</label>
                                        <select id="contact-sujet" className="form-input" style={{ appearance: "none", cursor: "pointer" }} value={sujet} onChange={e => setSujet(e.target.value)}>
                                            <option value="">Sélectionner un sujet</option>
                                            <option>Question sur le produit</option>
                                            <option>Suivi de commande</option>
                                            <option>Retour / Remboursement</option>
                                            <option>Problème technique</option>
                                            <option>Partenariat / Presse</option>
                                            <option>Autre</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-message" className="form-label">Message</label>
                                        <textarea id="contact-message" className="form-textarea" placeholder="Décrivez votre demande..." required value={message} onChange={e => setMessage(e.target.value)} />
                                    </div>
                                    {error && (
                                        <p style={{ fontSize: "0.83rem", color: "#f87171" }}>{error}</p>
                                    )}
                                    <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }} disabled={loading}>
                                        {loading ? "Envoi en cours…" : "Envoyer le message"}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info + FAQ */}
                        <div data-sr="right">
                            {/* Contact info */}
                            <div style={{ marginBottom: 48 }}>
                                <p className="label" style={{ marginBottom: 24 }}>Informations</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    {[
                                        { Icon: IconMail,    label: "Email",        val: "contact@adboots.fr" },
                                        { Icon: IconClock,   label: "Réponse",      val: "Sous 24h ouvrées" },
                                        { Icon: IconPackage, label: "SAV / Retours", val: "contact@adboots.fr" },
                                    ].map(i => (
                                        <div key={i.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                            <div style={{
                                                width: 42, height: 42, flexShrink: 0,
                                                background: "var(--bg-surface)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "var(--radius)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                            }}>
                                                <i.Icon size={16} color="var(--accent)" />
                                            </div>
                                            <div>
                                                <p className="label" style={{ marginBottom: 4 }}>{i.label}</p>
                                                <p style={{ fontSize: "0.9rem" }}>{i.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Socials */}
                                <div style={{ marginTop: 28 }}>
                                    <p className="label" style={{ marginBottom: 14 }}>Réseaux sociaux</p>
                                    <div style={{ display: "flex", gap: 10 }}>
                                        {[{ s: "Instagram", h: "#" }, { s: "TikTok", h: "#" }, { s: "YouTube", h: "#" }].map(n => (
                                            <a key={n.s} href={n.h} style={{ padding: "8px 14px", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "0.78rem", color: "var(--muted)", transition: "all 0.2s" }}
                                                onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                                                {n.s}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mini FAQ */}
                            <div>
                                <p className="label" style={{ marginBottom: 20 }}>Questions fréquentes</p>
                                {FAQ.map((item, i) => (
                                    <div key={i} className="accordion-item">
                                        <button className="accordion-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                            <span style={{ fontSize: "0.875rem" }}>{item.q}</span>
                                            <svg className={`accordion-icon${openFaq === i ? " open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        <div className="accordion-content" style={{ maxHeight: openFaq === i ? "200px" : "0" }}>
                                            <div className="accordion-content-inner" style={{ fontSize: "0.85rem" }}>{item.a}</div>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ marginTop: 20 }}>
                                    <Link href="/produit#faq" style={{ fontSize: "0.82rem", color: "var(--muted)", borderBottom: "1px solid var(--border)", paddingBottom: 2 }}>
                                        Voir toutes les questions →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
