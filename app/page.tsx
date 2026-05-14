import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ad Boots — Récupération Sportive par Pressothérapie",
};

const BENEFITS = [
    {
        num: "4",
        title: "Chambres séquentielles",
        desc: "La compression progresse chambre par chambre, de la cheville vers le genou, pour drainer activement les toxines post-effort.",
    },
    {
        num: "100%",
        title: "Sans fil",
        desc: "Contrôle via télécommande dédiée, recharge USB-C. Aucun câble de contrainte — utilisez les bottes où vous voulez.",
    },
    {
        num: "30'",
        title: "Session complète",
        desc: "30 minutes suffisent pour une récupération optimale. À domicile, en déplacement, entre deux entraînements.",
    },
    {
        num: "2",
        title: "Tailles disponibles",
        desc: "Taille M pour moins de 180 cm, taille L pour plus de 180 cm. Kit complet inclus dès l'ouverture de la boîte.",
    },
];

const STEPS = [
    {
        num: "01",
        title: "Enfilez les bottes",
        desc: "Installation en moins d'une minute. Disponibles en taille M (< 180 cm) et L (> 180 cm).",
    },
    {
        num: "02",
        title: "Prenez la télécommande",
        desc: "Contrôle sans fil via la télécommande incluse. Démarrez, ajustez, arrêtez — sans bouger.",
    },
    {
        num: "03",
        title: "Lancez la session",
        desc: "30 minutes de compression séquentielle sur 4 chambres. Vous ne faites rien — les bottes travaillent.",
    },
    {
        num: "04",
        title: "Jambes légères",
        desc: "Muscles drainés, circulation relancée. Prêt pour la prochaine séance sans attendre 48h.",
    },
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
                    <div className="grid-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>

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
                                Des bottes de pressothérapie conçues pour les athlètes exigeants. Récupérez plus vite. Enchaînez les séances sans compromis.
                            </p>
                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
                                <Link href="/produit" className="btn-primary">
                                    Découvrir les bottes
                                </Link>
                                <Link href="/pourquoi" className="btn-outline">
                                    Comment ça marche
                                </Link>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                                <div style={{ display: "flex", gap: 2 }}>
                                    {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--accent)", fontSize: "1rem" }}>★</span>)}
                                </div>
                                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                                    <strong style={{ color: "var(--fg)" }}>5.0</strong> · 47 athlètes satisfaits
                                </span>
                                <span style={{ color: "var(--border-strong)" }}>·</span>
                                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Livraison gratuite · Retour 30j</span>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="hero-visual">
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
                                {/* Badge sans fil */}
                                <div style={{
                                    position: "absolute", top: 20, right: 20,
                                    background: "rgba(34,197,94,0.1)",
                                    border: "1px solid rgba(34,197,94,0.25)",
                                    borderRadius: 8,
                                    padding: "8px 14px",
                                    backdropFilter: "blur(10px)",
                                }}>
                                    <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Sans fil</p>
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

            {/* ─── PROBLÈME → SOLUTION ─── */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }}>
                        {/* Problème */}
                        <div>
                            <p className="label" style={{ marginBottom: 20 }}>Le problème</p>
                            <h2 className="heading-xl" style={{ marginBottom: 28 }}>
                                Vous récupérez<br />
                                <span style={{ color: "#ef4444" }}>mal.</span>
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { icon: "😩", text: "48h de récupération entre deux séances — vos jambes ne suivent plus." },
                                    { icon: "🏥", text: "Une séance de kiné ou de pressothérapie coûte 60 à 120 €. Et il en faut plusieurs." },
                                    { icon: "📉", text: "La fatigue s'accumule. Les blessures aussi. La progression stagne." },
                                ].map(p => (
                                    <div key={p.text} style={{ display: "flex", gap: 16, padding: "16px 20px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 8 }}>
                                        <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{p.icon}</span>
                                        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)" }}>{p.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution */}
                        <div>
                            <p className="label" style={{ marginBottom: 20 }}>La solution</p>
                            <h2 className="heading-xl" style={{ marginBottom: 28 }}>
                                AD Boots<br />
                                <span style={{ color: "var(--accent)" }}>change ça.</span>
                            </h2>
                            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 24 }}>
                                La pressothérapie est utilisée depuis des années dans les vestiaires professionnels pour accélérer la récupération musculaire.
                                AD Boots vous donne accès à cette technologie à domicile, sans rendez-vous, sans abonnement.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {[
                                    "4 chambres de compression séquentielle",
                                    "100% sans fil — contrôle par télécommande",
                                    "30 minutes suffisent après chaque séance",
                                    "Rentabilisé dès la 3e utilisation vs kiné",
                                ].map(s => (
                                    <div key={s} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                                        <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>{s}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/produit" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
                                Découvrir AD Boots Pro
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

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

                    <div className="grid-2" style={{ gap: 2 }}>
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
                    <div className="grid-2" style={{ gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
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
                                    "4 chambres de compression séquentielles",
                                    "Contrôle 100% sans fil — télécommande incluse",
                                    "Recharge USB-C — câble Type-C inclus",
                                    "2 tailles : M (< 180 cm) · L (> 180 cm)",
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

                    <div className="grid-4" style={{ gap: 2 }}>
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

            {/* ─── CONFIANCE ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
                        {[
                            { icon: "🚚", title: "Livraison gratuite", desc: "En France métropolitaine, Belgique, Suisse" },
                            { icon: "↩", title: "Retour 30 jours", desc: "Satisfait ou remboursé, sans conditions" },
                            { icon: "🔒", title: "Paiement sécurisé", desc: "Chiffrement SSL — Stripe certifié" },
                            { icon: "✓", title: "Garantie 2 ans", desc: "Prise en charge de tout défaut de fabrication" },
                            { icon: "📦", title: "Expédition 48h", desc: "Traitement et envoi sous 2 jours ouvrés" },
                        ].map((r, i) => (
                            <div key={r.title} style={{
                                padding: "28px 24px",
                                background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-surface-2)",
                                border: "1px solid var(--border)",
                                textAlign: "center",
                            }}>
                                <div style={{ fontSize: "1.6rem", marginBottom: 12 }}>{r.icon}</div>
                                <p style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 6 }}>{r.title}</p>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="section">
                <div className="container">
                    <div className="grid-sidebar" style={{ gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>
                        <div className="sticky-col" style={{ position: "sticky", top: "calc(var(--navbar-h) + 40px)" }}>
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
                                <span style={{ color: "var(--muted)", fontSize: "0.78rem", marginLeft: 6 }}>5.0 · 47 avis vérifiés</span>
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

            {/* ─── COMPARATIF ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
                        <p className="label" style={{ marginBottom: 16 }}>Comparatif</p>
                        <h2 className="heading-xl">350 € une seule fois.<br /><span style={{ color: "var(--accent)" }}>Ou des centaines par an.</span></h2>
                        <div className="divider" style={{ margin: "20px auto" }} />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>Calculez vous-même ce que vous payez actuellement pour récupérer.</p>
                    </div>

                    <div className="grid-3" style={{ gap: "clamp(8px, 2vw, 2px)", maxWidth: 900, margin: "0 auto" }}>
                        {[
                            {
                                label: "Séance kiné / pressothérapie",
                                price: "60 – 120 €",
                                sub: "par séance",
                                annual: "≈ 600 – 1 200 €/an",
                                color: "#ef4444",
                                items: ["Rendez-vous obligatoire", "Disponibilité limitée", "Prix qui s'accumule", "Dépendance à un praticien"],
                                highlight: false,
                            },
                            {
                                label: "AD Boots Pro",
                                price: "350 €",
                                sub: "une seule fois",
                                annual: "Rentabilisé dès la 3e séance",
                                color: "var(--accent)",
                                items: ["À domicile, quand vous voulez", "Session 30 min illimitée", "Garantie 2 ans incluse", "Kit complet dès la boîte"],
                                highlight: true,
                            },
                            {
                                label: "Appareil concurrent",
                                price: "500 – 1 500 €",
                                sub: "avec câbles obligatoires",
                                annual: "Encombrant, souvent inutilisé",
                                color: "#f59e0b",
                                items: ["Câbles contraignants", "Installation complexe", "Poids et encombrement", "Prix premium injustifié"],
                                highlight: false,
                            },
                        ].map(col => (
                            <div key={col.label} className={col.highlight ? "cmp-featured" : undefined} style={{
                                padding: "40px 32px",
                                background: col.highlight ? "var(--fg)" : "var(--bg-surface-2)",
                                border: col.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                                borderRadius: 10,
                                position: "relative",
                                transform: col.highlight ? "translateY(-8px)" : undefined,
                                boxShadow: col.highlight ? "0 24px 60px rgba(34,197,94,0.15)" : undefined,
                            }}>
                                {col.highlight && (
                                    <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#000", padding: "4px 16px", borderRadius: 100, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                                        Meilleur choix
                                    </div>
                                )}
                                <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: col.highlight ? "rgba(255,255,255,0.5)" : "var(--muted)", marginBottom: 12 }}>{col.label}</p>
                                <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: col.highlight ? "#fff" : col.color, lineHeight: 1, marginBottom: 4 }}>{col.price}</p>
                                <p style={{ fontSize: "0.8rem", color: col.highlight ? "rgba(255,255,255,0.45)" : "var(--muted)", marginBottom: 20 }}>{col.sub}</p>
                                <div style={{ padding: "10px 14px", background: col.highlight ? "rgba(34,197,94,0.15)" : "rgba(0,0,0,0.04)", borderRadius: 6, marginBottom: 24 }}>
                                    <p style={{ fontSize: "0.78rem", fontWeight: 600, color: col.highlight ? "var(--accent)" : col.color }}>{col.annual}</p>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                    {col.items.map(item => (
                                        <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.85rem", color: col.highlight ? "rgba(255,255,255,0.75)" : "var(--muted)" }}>
                                            <span style={{ color: col.highlight ? "var(--accent)" : col.color, flexShrink: 0 }}>{col.highlight ? "✓" : "×"}</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {col.highlight && (
                                    <Link href="/produit" className="btn-primary" style={{ marginTop: 32, display: "flex", justifyContent: "center", width: "100%" }}>
                                        Commander
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="section">
                <div className="container">
                    <div className="grid-sidebar" style={{ gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>
                        <div className="sticky-col" style={{ position: "sticky", top: "calc(var(--navbar-h) + 40px)" }}>
                            <p className="label" style={{ marginBottom: 16 }}>FAQ</p>
                            <h2 className="heading-lg" style={{ marginBottom: 20 }}>Vos questions,<br />nos réponses.</h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 28 }}>
                                Une question qui bloque ? Écrivez-nous à contact@ad-boots.com.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            {[
                                {
                                    q: "Est-ce que ça marche vraiment ?",
                                    a: "La pressothérapie séquentielle est utilisée dans les clubs professionnels depuis plus de 20 ans. Elle agit sur la circulation lymphatique et veineuse pour accélérer l'élimination des toxines post-effort. Les AD Boots reproduisent ce protocole avec 4 chambres progressives — le même principe que les appareils utilisés en kinésithérapie."
                                },
                                {
                                    q: "Pour quel niveau sportif ?",
                                    a: "AD Boots s'adresse à tous ceux qui s'entraînent régulièrement et qui souffrent de jambes lourdes, de temps de récupération longs, ou qui enchaînent des séances à haute intensité. Amateur ou compétiteur — si vous vous entraînez plus de 3 fois par semaine, vous en ressentez l'effet."
                                },
                                {
                                    q: "Et si ça ne me convient pas ?",
                                    a: "Vous disposez de 30 jours pour tester. Si les bottes ne vous conviennent pas pour quelque raison que ce soit, renvoyez-les dans leur emballage d'origine et nous vous remboursons intégralement. Sans questions. La prise de risque est nulle."
                                },
                                {
                                    q: "La télécommande est-elle vraiment sans fil ?",
                                    a: "Oui, complètement. La télécommande est incluse dans le kit et fonctionne par liaison sans fil. Vous contrôlez la session (démarrage, arrêt, intensité) sans aucun câble reliant la télécommande aux bottes. Les bottes se rechargent en USB-C entre les sessions."
                                },
                                {
                                    q: "Comment choisir entre la taille M et L ?",
                                    a: "La taille M est conçue pour les personnes mesurant moins de 180 cm, et la taille L pour celles mesurant plus de 180 cm. Les manchons couvrent l'ensemble du mollet et du genou. En cas de doute, la taille L offre plus de liberté. Toutes les tailles fonctionnent avec le même protocole 4 chambres."
                                },
                            ].map((faq, i) => (
                                <details key={i} style={{ borderTop: "1px solid var(--border)" }}>
                                    <summary style={{ padding: "24px 0", cursor: "pointer", fontWeight: 700, fontSize: "1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                                        {faq.q}
                                        <span style={{ color: "var(--accent)", fontSize: "1.2rem", flexShrink: 0, fontWeight: 300 }}>+</span>
                                    </summary>
                                    <div style={{ padding: "0 0 24px", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.85 }}>
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                            <div style={{ borderTop: "1px solid var(--border)" }} />
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
            <section style={{ background: "var(--fg)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 100, marginBottom: 28 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>Stock limité — quelques unités disponibles</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.05 }}>
                        Votre récupération<br />commence maintenant.
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.8 }}>
                        AD Boots Pro · 350 € · Paiement sécurisé par Stripe<br />
                        Livraison gratuite · Retour 30 jours · Garantie 2 ans
                    </p>
                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
                        <Link href="/produit" style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            padding: "18px 44px",
                            background: "var(--accent)", color: "#000",
                            fontWeight: 800, fontSize: "0.95rem",
                            letterSpacing: "0.06em", textTransform: "uppercase",
                            borderRadius: "var(--radius)",
                        }}>
                            Commander — 350 €
                        </Link>
                        <Link href="/pourquoi" style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            padding: "18px 32px",
                            background: "transparent", color: "rgba(255,255,255,0.6)",
                            fontWeight: 600, fontSize: "0.875rem",
                            letterSpacing: "0.06em", textTransform: "uppercase",
                            borderRadius: "var(--radius)",
                            border: "1px solid rgba(255,255,255,0.15)",
                        }}>
                            En savoir plus
                        </Link>
                    </div>
                    <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
                        {["🔒 Paiement sécurisé", "🚚 Livraison offerte", "↩ Retour 30j"].map(item => (
                            <span key={item} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
