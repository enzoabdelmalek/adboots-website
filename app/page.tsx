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

const STEPS = [
    {
        num: "01",
        title: "Enfilez les bottes",
        desc: "Installation en moins d'une minute. Taille S à XL, compatible toutes morphologies.",
    },
    {
        num: "02",
        title: "Réglez l'intensité",
        desc: "12 niveaux de pression de 30 à 240 mmHg. Adaptez selon vos sensations et l'effort fourni.",
    },
    {
        num: "03",
        title: "Lancez la session",
        desc: "30 minutes de compression séquentielle sur 6 zones. Vous ne faites rien — les bottes travaillent.",
    },
    {
        num: "04",
        title: "Récupérez 2× plus vite",
        desc: "Muscles drainés, jambes légères. Prêt pour la prochaine séance sans attendre 48h.",
    },
];

const PRESS = [
    "L'Équipe",
    "RMC Sport",
    "Le Parisien",
    "Runners.fr",
    "Doctissimo",
    "Sport & Vie",
];

const TESTIMONIALS = [
    {
        name: "Théo M.",
        sport: "Triathlète — finisher Ironman",
        text: "Après chaque sortie longue, mes jambes récupèrent en une nuit au lieu de deux jours. C'est devenu indispensable dans ma prépa.",
        stat: "35h/semaine d'entraînement",
    },
    {
        name: "Sarah K.",
        sport: "Footballeuse, Ligue 2 féminine",
        text: "On les utilise en salle de soins après les matchs. La différence se sent dès la première session. Toutes les joueuses en veulent maintenant.",
        stat: "3 matchs par semaine",
    },
    {
        name: "Lucas D.",
        sport: "CrossFit — athlète régional",
        text: "Je faisais 2 entraînements par jour les semaines de compétition. Sans Ad Boots, c'était impossible de tenir. Maintenant c'est ma norme.",
        stat: "Compétitions régionales",
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
                    background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(34,197,94,0.06) 0%, transparent 65%)",
                    pointerEvents: "none",
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>

                        {/* Copy */}
                        <div>
                            <div className="tag" style={{ marginBottom: 28 }}>
                                ✦ Pressothérapie · Récupération sportive
                            </div>
                            <h1 className="display" style={{ marginBottom: 28 }}>
                                La récupération,<br />
                                <span style={{ color: "var(--accent)" }}>réinventée.</span>
                            </h1>
                            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 420, marginBottom: 40 }}>
                                Des bottes de pressothérapie conçues pour les athlètes exigeants. Récupérez 2× plus vite. Enchaînez les séances sans compromis.
                            </p>
                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
                                <Link href="/produit" className="btn-primary">
                                    Découvrir les bottes
                                </Link>
                                <Link href="/pourquoi" className="btn-outline">
                                    Comment ça marche
                                </Link>
                            </div>
                            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                                {["350 €", "Livraison gratuite", "Retour 30 jours"].map((item, i) => (
                                    <span key={i} style={{ color: "var(--muted)", fontSize: "0.78rem", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 6 }}>
                                        <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>✓</span>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Visual */}
                        <div>
                            <div style={{
                                aspectRatio: "4/5",
                                background: "linear-gradient(145deg, var(--bg-surface) 0%, var(--bg-surface-2) 100%)",
                                borderRadius: 16,
                                border: "1px solid rgba(34,197,94,0.15)",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 24px 80px rgba(0,0,0,0.10)",
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85"
                                    alt="Ad Boots — récupération sportive"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
                                {/* Badge certif */}
                                <div style={{
                                    position: "absolute", top: 20, right: 20,
                                    background: "rgba(34,197,94,0.1)",
                                    border: "1px solid rgba(34,197,94,0.25)",
                                    borderRadius: 8,
                                    padding: "8px 14px",
                                    backdropFilter: "blur(10px)",
                                }}>
                                    <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>CE Médical</p>
                                </div>
                                {/* Price card */}
                                <div style={{
                                    position: "absolute", bottom: 24, left: 24,
                                    background: "rgba(0,0,0,0.75)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    borderRadius: 10,
                                    padding: "16px 22px",
                                }}>
                                    <p className="label" style={{ marginBottom: 6, color: "rgba(255,255,255,0.5)" }}>Ad Boots Pro</p>
                                    <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1 }}>350 €</p>
                                    <p style={{ color: "var(--accent)", fontSize: "0.75rem", marginTop: 5 }}>ou 4× 87,50 € sans frais</p>
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
                        <h2 className="heading-xl">Chaque détail compte.<br />Surtout après l&apos;effort.</h2>
                        <div className="divider" />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                            La compression séquentielle n&apos;est plus réservée aux salles de kiné. Ad Boots vous apporte cette technologie là où vous en avez besoin, quand vous en avez besoin.
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
                        <div style={{ aspectRatio: "16/10", background: "var(--bg-surface-2)", borderRadius: 10, overflow: "hidden" }}>
                            <img
                                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=85"
                                alt="Ad Boots en utilisation"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

            {/* ─── COMMENT ÇA MARCHE ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 72px" }}>
                        <p className="label" style={{ marginBottom: 16 }}>Mode d&apos;emploi</p>
                        <h2 className="heading-xl">Comment ça<br /><span style={{ color: "var(--accent)" }}>marche.</span></h2>
                        <div className="divider" style={{ margin: "20px auto" }} />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                            Pas de configuration complexe. En 4 étapes, de la boîte à la récupération.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                        {STEPS.map((step, i) => (
                            <div key={step.num} style={{
                                padding: "40px 32px",
                                background: "var(--bg-surface)",
                                border: "1px solid var(--border)",
                                borderRadius: i === 0 ? "8px 0 0 8px" : i === 3 ? "0 8px 8px 0" : 0,
                            }}>
                                <p style={{
                                    fontSize: "clamp(2.5rem, 3.5vw, 3rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                    color: "transparent",
                                    WebkitTextStroke: "1.5px rgba(34,197,94,0.35)",
                                    lineHeight: 1,
                                    marginBottom: 24,
                                }}>{step.num}</p>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 48 }}>
                        <Link href="/produit" className="btn-primary">
                            Commander — 350 €
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── PRESSE ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <p className="label" style={{ textAlign: "center", marginBottom: 40 }}>Ils parlent de nous</p>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(24px, 5vw, 64px)", flexWrap: "wrap", marginBottom: 56 }}>
                        {PRESS.map(name => (
                            <span key={name} style={{
                                fontWeight: 800,
                                fontSize: "0.8rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "var(--fg)",
                                opacity: 0.25,
                            }}>{name}</span>
                        ))}
                    </div>

                    <div style={{
                        maxWidth: 640,
                        margin: "0 auto",
                        padding: "36px 40px",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        borderLeft: "3px solid var(--accent)",
                        position: "relative",
                    }}>
                        <span style={{ position: "absolute", top: 20, left: 32, fontSize: "3rem", lineHeight: 1, color: "var(--accent)", opacity: 0.2, fontFamily: "Georgia, serif" }}>&ldquo;</span>
                        <p style={{ color: "var(--fg)", fontSize: "1.05rem", lineHeight: 1.85, fontStyle: "italic", marginBottom: 20, paddingLeft: 24 }}>
                            La technologie de récupération des vestiaires professionnels, enfin accessible au grand public. Un produit qui tient ses promesses.
                        </p>
                        <p style={{ color: "var(--muted)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            — L&apos;Équipe
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 80, alignItems: "start" }}>
                        <div style={{ position: "sticky", top: "calc(var(--navbar-h) + 40px)" }}>
                            <p className="label" style={{ marginBottom: 16 }}>Témoignages</p>
                            <h2 className="heading-lg" style={{ marginBottom: 20 }}>Ce qu&apos;ils<br />disent vraiment.</h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 28 }}>
                                Des sportifs qui ont intégré Ad Boots dans leur routine quotidienne.
                            </p>
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} style={{ color: "var(--accent)", fontSize: "1rem" }}>★</span>
                                ))}
                                <span style={{ color: "var(--muted)", fontSize: "0.78rem", marginLeft: 6 }}>5.0 · 3 avis vérifiés</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {TESTIMONIALS.map(t => (
                                <div key={t.name} className="testimonial-card" style={{ position: "relative", overflow: "hidden" }}>
                                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: "linear-gradient(to right, var(--accent), transparent)" }} />
                                    <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} style={{ color: "var(--accent)", fontSize: "0.85rem" }}>★</span>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: "1rem", lineHeight: 1.85, fontStyle: "italic", flex: 1 }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                                        <div>
                                            <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</p>
                                            <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: 3 }}>{t.sport}</p>
                                        </div>
                                        <span style={{
                                            padding: "4px 10px",
                                            background: "rgba(34,197,94,0.08)",
                                            border: "1px solid rgba(34,197,94,0.2)",
                                            borderRadius: 100,
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            color: "var(--accent)",
                                            letterSpacing: "0.04em",
                                        }}>{t.stat}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── MISSION ─── */}
            <section className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
                        <p className="label" style={{ marginBottom: 20 }}>Notre Mission</p>
                        <h2 className="heading-xl" style={{ marginBottom: 28 }}>Récupérer,<br />c&apos;est aussi s&apos;entraîner.</h2>
                        <div className="divider" style={{ margin: "0 auto 28px" }} />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: 14 }}>
                            Ad Boots est né d&apos;un constat : les meilleurs athlètes du monde utilisent la pressothérapie quotidiennement. Mais jusqu&apos;ici, c&apos;était réservé aux clubs professionnels.
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
                        background: "#0A0A0A", color: "#fff",
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
