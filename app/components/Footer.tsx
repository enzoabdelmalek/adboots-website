"use client";

import Link from "next/link";

const NAV = [
    { title: "Produit", links: [{ href: "/produit", label: "Les Bottes" }, { href: "/pourquoi", label: "La Technologie" }, { href: "/produit#faq", label: "FAQ" }] },
    { title: "Marque",  links: [{ href: "/pourquoi", label: "Notre Histoire" }, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }] },
    { title: "Légal",   links: [{ href: "/mentions-legales", label: "Mentions légales" }, { href: "/cgv", label: "CGV" }, { href: "/confidentialite", label: "Confidentialité" }] },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{ display: "inline-block", marginBottom: 20 }}>
                            <span style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg)" }}>
                                AD<span style={{ color: "var(--accent)" }}>.</span>BOOTS
                            </span>
                        </Link>
                        <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 280 }}>
                            Bottes de récupération sportive par pressothérapie. Récupérez plus vite, performez mieux.
                        </p>
                        {/* Socials */}
                        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
                            {["IG", "TK", "YT"].map(s => (
                                <a key={s} href="#" style={{ width: 36, height: 36, background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "var(--muted)", transition: "color 0.2s, border-color 0.2s" }}
                                    onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {NAV.map(col => (
                        <div key={col.title}>
                            <p className="label" style={{ marginBottom: 16 }}>{col.title}</p>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                {col.links.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} style={{ fontSize: "0.875rem", color: "var(--muted)", transition: "color 0.2s" }}
                                            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                                            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Ad Boots. Tous droits réservés.</span>
                    <div style={{ display: "flex", gap: 20 }}>
                        {["Visa", "Mastercard", "Apple Pay", "PayPal"].map(p => (
                            <span key={p} style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 3, padding: "3px 8px", fontSize: "0.7rem", color: "var(--muted)" }}>
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
