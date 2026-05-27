"use client";

import { useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { IconPackage, IconMail, IconReturn } from "@/app/components/Icons";
import Link from "next/link";

export default function SuccessPage() {
    const { items, updateQty, removeItem } = useCart();

    // Vider le panier à l'arrivée sur cette page
    useEffect(() => {
        items.forEach(item => removeItem(item.id, item.size));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
            <div style={{ maxWidth: 520, textAlign: "center" }}>
                {/* Icône succès */}
                <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "rgba(61,220,132,0.1)", border: "2px solid rgba(61,220,132,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 32px",
                }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <h1 className="heading-xl" style={{ marginBottom: 16 }}>Commande confirmée</h1>
                <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 32 }}>
                    Merci pour votre achat ! Vous recevrez un email de confirmation sous quelques minutes.
                    Votre commande sera expédiée sous 48h ouvrées.
                </p>

                <div style={{
                    display: "flex", flexDirection: "column", gap: 12,
                    padding: 24, background: "var(--bg-surface)",
                    border: "1px solid var(--border)", borderRadius: 8, marginBottom: 36, textAlign: "left",
                }}>
                    {[
                        { Icon: IconPackage, text: "Expédition sous 48h ouvrées" },
                        { Icon: IconMail,    text: "Email de confirmation envoyé" },
                        { Icon: IconReturn,  text: "Retour possible sous 30 jours" },
                    ].map(r => (
                        <div key={r.text} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.88rem", color: "var(--muted)" }}>
                            <r.Icon size={15} color="var(--accent)" />
                            {r.text}
                        </div>
                    ))}
                </div>

                <Link href="/" className="btn-primary" style={{ display: "inline-flex", justifyContent: "center" }}>
                    Retour à l&apos;accueil
                </Link>
            </div>
        </section>
    );
}
