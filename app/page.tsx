import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ad Boots — Récupération Sportive par Pressothérapie",
};

const BENEFITS = [
    {
        num: "2×",
        title: "Récupération accélérée",
        desc: "La compression séquentielle réduit l'inflammation musculaire et accélère l'élimination des toxines post-effort.",
    },
    {
        num: "12",
        title: "Niveaux de pression",
        desc: "De 30 à 240 mmHg. Adaptez l'intensité à votre séance : récupération légère ou drainage intense après compétition.",
    },
    {
        num: "30'",
        title: "Session complète",
        desc: "30 minutes suffisent pour une récupération optimale. Utilisez vos Ad Boots à domicile, en déplacement, entre deux entraînements.",
    },
    {
        num: "IP54",
        title: "Conçu pour durer",
        desc: "Matériaux techniques anti-transpiration, coutures renforcées. Ad Boots est fait pour le sport de haut niveau au quotidien.",
    },
];

const TESTIMONIALS = [
    {
        name: "Théo M.",
        sport: "Triathlète — finisher Ironman",
        text: "Après chaque sortie longue, mes jambes récupèrent en une nuit au lieu de deux jours. C'est devenu indispensable dans ma prépa.",
    },
    {
        name: "Sarah K.",
        sport: "Footballeuse, Ligue 2 féminine",
        text: "On les utilise en salle de soins après les matchs. La différence se sent dès la première session. Toutes les joueuses en veulent maintenant.",
    },
    {
        name: "Lucas D.",
        sport: "CrossFit — athlète régional",
        text: "Je faisais 2 entraînements par jour les semaines de compétition. Sans Ad Boots, c'était impossible de tenir. Maintenant c'est ma norme.",
    },
];

const REASSURANCE = [
    { icon: "🚚", label: "Livraison gratuite" },
    { icon: "↩", label: "Retour 30 jours" },
    { icon: "✦", label: "Paiement 4× sans frais" },
    { icon: "🔒", label: "Paiement sécurisé" },
    { icon: "✓", label: "Garantie 2 ans" },
    { icon: "⚡", label: "Expédition sous 48h" },
];

export default function HomePage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section style={{
                minHeight: "calc(100vh - var(--navbar-h))",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(75,222,128,0.07) 0%, transparent 65%)",
                    pointerEvents: "none",
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

                        {/* Copy */}
                        <div>
                            <div className="tag" style={{ marginBottom: 28 }}>
                                ✦ Pressothérapie · Récupération sportive
                            </div>
                            <h1 className="display" style={{ marginBottom: 28 }}>
                                La récupération,<br />
                                <span style={{ color: "var(--accent)" }}>réinventée.</span>
                            </h1>
                            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 400, marginBottom: 40 }}>
                                Des bottes de pressothérapie conçues pour les athlètes exigeants. Récupérez 2× plus vite. Enchaînez les séances sans compromis.
                            </p>
                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                                <Link href="/produit" className="btn-primary">
                                    Découvrir les bottes
                                </Link>
                                <Link href="/pourquoi" className="btn-outline">
                                    Comment ça marche
                                </Link>
                            </div>
                            <p style={{ color: "var(--muted)", fontSize: "0.78rem", letterSpacing: "0.03em" }}>
                                350 € · Livraison gratuite · Retour 30 jours
                            </p>
                        </div>

                        {/* Visual */}
                        <div>
                            <div style={{
                                aspectRatio: "4/5",
                                background: "linear-gradient(145deg, var(--bg-surface) 0%, #0c180f 100%)",
                                borderRadius: 12,
                                border: "1px solid rgba(75,222,128,0.1)",
                                overflow: "hidden",
                                position: "relative",
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85"
                                    alt="Ad Boots — récupération sportive"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
                                <div style={{
                                    position: "absolute", bottom: 24, left: 24,
                                    background: "rgba(10,10,10,0.88)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid var(--border-strong)",
                                    borderRadius: 8,
                                    padding: "14px 20px",
                                }}>
                                    <p className="label" style={{ marginBottom: 6 }}>Ad Boots Pro</p>
                                    <p style={{ color: "var(--fg)", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1 }}>350 €</p>
                                    <p style={{ color: "var(--accent)", fontSize: "0.75rem", marginTop: 4 }}>ou 4× 87,50 € sans frais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── REASSURANCE STRIP ─── */}
            <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 0", overflow: "hidden" }}>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...REASSURANCE, ...REASSURANCE, ...REASSURANCE].map((r, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
                                <span style={{ color: "var(--accent)" }}>{r.icon}</span>
                                <span style={{ fontSize: "0.82rem", fontWeight: 500 }}>{r.label}</span>
                                <span style={{ color: "var(--border-strong)", margin: "0 12px" }}>·</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── BENEFITS ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 560, marginBottom: 64 }}>
                        <p className="label" style={{ marginBottom: 16 }}>Pourquoi Ad Boots</p>
                        <h2 className="heading-xl">Chaque détail compte.<br />Surtout après l'effort.</h2>
                        <div className="divider" />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                            La compression séquentielle n'est plus réservée aux salles de kiné. Ad Boots vous apporte cette technologie là où vous en avez besoin, quand vous en avez besoin.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
                        {BENEFITS.map((b, i) => (
                            <div key={b.title} style={{
                                padding: "44px 40px",
                                background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-surface-2)",
                                borderRadius: i === 0 ? "8px 0 0 0" : i === 1 ? "0 8px 0 0" : i === 2 ? "0 0 0 8px" : "0 0 8px 0",
                                border: "1px solid var(--border)",
                            }}>
                                <p style={{ color: "var(--accent)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 16 }}>{b.num}</p>
                                <h3 className="heading-md" style={{ marginBottom: 12 }}>{b.title}</h3>
                                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.75 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 48 }}>
                        <Link href="/pourquoi" className="btn-outline">
                            Découvrir la technologie
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── PRODUCT SPOTLIGHT ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                        <div style={{ aspectRatio: "16/10", background: "var(--bg-surface-2)", borderRadius: 8, overflow: "hidden", position: "relative" }}>
                            <img
                                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=85"
                                alt="Ad Boots en utilisation"
                                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
                            />
                        </div>
                        <div>
                            <p className="label" style={{ marginBottom: 16 }}>Le Produit</p>
                            <h2 className="heading-lg" style={{ marginBottom: 20 }}>
                                Une paire de bottes.<br />Une décision.
                            </h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 32 }}>
                                Un seul modèle, taillé pour la performance. Conçu avec des kinésithérapeutes du sport et testé par des athlètes de haut niveau.
                            </p>
                            <ul style={{ listStyle: "none", margin: "0 0 36px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                                {[
                                    "12 niveaux de pression ajustables",
                                    "Compression séquentielle 6 zones",
                                    "Batterie 4h — charge USB-C",
                                    "Compatible toutes morphologies (S à XL)",
                                ].map(f => (
                                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.875rem" }}>
                                        <span style={{ color: "var(--accent)", fontSize: "0.65rem", flexShrink: 0 }}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/produit" className="btn-primary">
                                Voir le produit — 350 €
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PARTNERS ─── */}
            <section className="section-sm">
                <div className="container">
                    <p className="label" style={{ textAlign: "center", marginBottom: 36 }}>Ils font confiance à Ad Boots</p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(24px, 5vw, 64px)", flexWrap: "wrap", opacity: 0.3, filter: "grayscale(1)" }}>
                        {["Club Pro A", "Centre National", "Académie Sport", "Performance Lab", "Sport Élite"].map(p => (
                            <span key={p} style={{ fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 80, alignItems: "start" }}>
                        <div style={{ position: "sticky", top: "calc(var(--navbar-h) + 40px)" }}>
                            <p className="label" style={{ marginBottom: 16 }}>Témoignages</p>
                            <h2 className="heading-lg" style={{ marginBottom: 20 }}>Ce qu'ils<br />disent vraiment.</h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75 }}>
                                Des sportifs qui ont intégré Ad Boots dans leur routine.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {TESTIMONIALS.map(t => (
                                <div key={t.name} className="testimonial-card">
                                    <div style={{ display: "flex", gap: 3 }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} style={{ color: "var(--accent)", fontSize: "0.85rem" }}>★</span>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: "1rem", lineHeight: 1.85, fontStyle: "italic" }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</p>
                                        <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: 3 }}>{t.sport}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── MISSION ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
                        <p className="label" style={{ marginBottom: 20 }}>Notre Mission</p>
                        <h2 className="heading-xl" style={{ marginBottom: 28 }}>Récupérer,<br />c&apos;est aussi s&apos;entraîner.</h2>
                        <div className="divider" style={{ margin: "0 auto 28px" }} />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: 14 }}>
                            Ad Boots est né d'un constat : les meilleurs athlètes du monde utilisent la pressothérapie quotidiennement. Mais jusqu'ici, c'était réservé aux clubs professionnels.
                        </p>
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: 40 }}>
                            On a conçu un appareil que vous pouvez emporter partout, utiliser seul, et qui tient ses promesses — sans compromis sur la qualité.
                        </p>
                        <Link href="/pourquoi" className="btn-outline">
                            Notre histoire →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section style={{ background: "var(--accent)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 20 }}>
                        Disponible maintenant
                    </p>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#0A0A0A", marginBottom: 20, lineHeight: 1.05 }}>
                        Prêt à récupérer<br />comme un pro ?
                    </h2>
                    <p style={{ color: "rgba(0,0,0,0.5)", fontSize: "1rem", maxWidth: 400, margin: "0 auto 40px" }}>
                        350 € · Livraison gratuite · Retour 30 jours · Garantie 2 ans
                    </p>
                    <Link href="/produit" style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        padding: "16px 40px",
                        background: "#0A0A0A", color: "var(--fg)",
                        fontWeight: 700, fontSize: "0.875rem",
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        borderRadius: "var(--radius)",
                    }}>
                        Commander les Ad Boots
                    </Link>
                </div>
            </section>
        </>
    );
}
