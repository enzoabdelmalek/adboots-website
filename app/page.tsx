import Link from "next/link";
import type { Metadata } from "next";
import {
    IconTruck, IconReturn, IconCreditCard, IconLock, IconShield, IconZap,
    IconClock, IconEuro, IconTrendingDown, IconPackage,
    IconCheck, IconX, IconStar, IconSparkle,
} from "@/app/components/Icons";

export const metadata: Metadata = {
    title: "Ad Boots — Récupération Sportive par Pressothérapie",
    description: "Bottes de pressothérapie sans fil à 4 chambres séquentielles. Récupérez 2× plus vite après l'effort. Livraison gratuite, retour 30 jours, garantie 2 ans. 350 €.",
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
    { Icon: IconTruck,      label: "Livraison gratuite" },
    { Icon: IconReturn,     label: "Retour 30 jours" },
    { Icon: IconCreditCard, label: "Paiement sécurisé" },
    { Icon: IconLock,       label: "Paiement sécurisé" },
    { Icon: IconShield,     label: "Garantie 2 ans" },
    { Icon: IconZap,        label: "Expédition sous 48h" },
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
                {/* Full-bleed background image */}
                <img
                    src="/assets/df57e7dc-86ae-48d9-9d4a-6f093281baa1.JPG"
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center 30%",
                    }}
                />
                {/* Gradient overlay — dark left for text, fades right */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(105deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.25) 100%)",
                }} />
                {/* Subtle green glow */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 50% 60% at 15% 80%, rgba(61,220,132,0.08) 0%, transparent 60%)",
                    pointerEvents: "none",
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                    <div style={{ maxWidth: 600 }}>
                        <p className="label anim-1" style={{ marginBottom: 20, color: "var(--accent)" }}>Pressothérapie sans fil</p>
                        <h1 className="display anim-2" style={{ marginBottom: 28, color: "#fff" }}>
                            La récupération,<br />
                            <span style={{ color: "var(--accent)" }}>réinventée.</span>
                        </h1>
                        <p className="anim-3" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
                            Des bottes de pressothérapie conçues pour les athlètes exigeants. Récupérez plus vite. Enchaînez les séances sans compromis.
                        </p>
                        <div className="anim-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
                            <Link href="/produit" className="btn-primary btn-glow">
                                Découvrir les bottes
                            </Link>
                            <Link href="/pourquoi" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
                                Comment ça marche
                            </Link>
                        </div>
                        <div className="anim-5" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                            <div style={{ display: "flex", gap: 2 }}>
                                {[1,2,3,4,5].map(s => <IconStar key={s} size={14} color="var(--accent)" />)}
                            </div>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                                <strong style={{ color: "#fff" }}>5.0</strong> · 47 athlètes satisfaits
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>Livraison gratuite · Retour 30j</span>
                        </div>
                    </div>
                </div>

                {/* Price badge — anchored to section bottom-right */}
                <div className="anim-img hero-price-badge" style={{
                    position: "absolute", bottom: "clamp(24px, 5vw, 48px)", right: "clamp(16px, 5vw, 80px)",
                    zIndex: 2,
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "16px 24px",
                    display: "flex", flexDirection: "column", gap: 4,
                }}>
                    <p className="label" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Bottes récupératives</p>
                    <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1 }}>350 €</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem" }}>Livraison offerte</p>
                </div>
            </section>

            {/* ─── REASSURANCE STRIP ─── */}
            <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 0", overflow: "hidden" }}>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...REASSURANCE, ...REASSURANCE, ...REASSURANCE].map((r, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
                                <r.Icon size={14} color="var(--accent)" />
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
                        <div data-sr="left">
                            <p className="label" style={{ marginBottom: 20 }}>Le problème</p>
                            <h2 className="heading-xl" style={{ marginBottom: 28 }}>
                                Vous récupérez<br />
                                <span style={{ color: "#ef4444" }}>mal.</span>
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { Icon: IconClock,        text: "48h de récupération entre deux séances — vos jambes ne suivent plus." },
                                    { Icon: IconEuro,         text: "Une séance de kiné ou de pressothérapie coûte 60 à 120 €. Et il en faut plusieurs." },
                                    { Icon: IconTrendingDown, text: "La fatigue s'accumule. Les blessures aussi. La progression stagne." },
                                ].map((p, i) => (
                                    <div key={p.text} data-sr data-sr-delay={`${i * 100}`} style={{ display: "flex", gap: 16, padding: "16px 20px", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 8 }}>
                                        <p.Icon size={18} color="var(--muted)" style={{ marginTop: 2 }} />
                                        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)" }}>{p.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution */}
                        <div data-sr="right">
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
                                        <IconCheck size={14} color="var(--accent)" />
                                        <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>{s}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/produit" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
                                Découvrir Bottes récupératives
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BENEFITS ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="benefits-layout">

                        {/* Photo */}
                        <div data-sr="left" style={{ position: "sticky", top: "calc(var(--navbar-h) + 24px)", borderRadius: 12, overflow: "hidden", aspectRatio: "3/4" }}>
                            <img
                                src="/assets/a03294c9-b87b-49cf-925b-949ad5d4ed97.JPG"
                                alt="Athlète utilisant Ad Boots"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                            />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }} />
                            <div style={{
                                position: "absolute", bottom: 24, left: 24,
                                background: "rgba(0,0,0,0.65)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: 8,
                                padding: "12px 18px",
                            }}>
                                <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Récupération</p>
                                <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>2× plus rapide</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div data-sr="right">
                            <p className="label" style={{ marginBottom: 16 }}>Pourquoi Ad Boots</p>
                            <h2 className="heading-xl" style={{ marginBottom: 20 }}>Chaque détail compte.<br />Surtout après l&apos;effort.</h2>
                            <div className="divider divider-animated" />
                            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 40 }}>
                                La compression séquentielle n&apos;est plus réservée aux salles de kiné. Ad Boots vous apporte cette technologie là où vous en avez besoin, quand vous en avez besoin.
                            </p>

                            <div className="grid-2" style={{ gap: 2 }}>
                                {BENEFITS.map((b, i) => (
                                    <div key={b.title} data-sr="scale" data-sr-delay={`${i * 80}`} style={{
                                        padding: "28px 24px",
                                        background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-surface-2)",
                                        borderRadius: i === 0 ? "8px 0 0 0" : i === 1 ? "0 8px 0 0" : i === 2 ? "0 0 0 8px" : "0 0 8px 0",
                                        border: "1px solid var(--border)",
                                    }}>
                                        <p style={{ color: "var(--accent)", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 10 }}>{b.num}</p>
                                        <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 8 }}>{b.title}</h3>
                                        <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{b.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: 36 }}>
                                <Link href="/pourquoi" className="btn-outline">
                                    Découvrir la technologie
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── LIFESTYLE MOSAIC ─── */}
            <section style={{ padding: "clamp(60px, 8vw, 96px) 0", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div data-sr style={{ maxWidth: 520, marginBottom: 52 }}>
                        <p className="label" style={{ marginBottom: 14 }}>Partout, tout le temps</p>
                        <h2 className="heading-xl">Récupération sans<br /><span style={{ color: "var(--accent)" }}>contrainte.</span></h2>
                    </div>
                    <div className="mosaic-grid">
                        {[
                            { src: "/assets/1F6D804D-15E5-4CDF-9D1E-D7ACDCCA3E53.png", label: "En télétravail", desc: "Récupérez en travaillant" },
                            { src: "/assets/D28D064F-1532-45BA-AF50-C2411B3E2E46.png", label: "Le matin", desc: "Avant d'attaquer la journée" },
                            { src: "/assets/CA4A8AF0-4693-4117-B002-2C4C059B5FD7.jpeg", label: "En famille", desc: "Sans empiéter sur votre vie" },
                        ].map((item, i) => (
                            <div key={item.label} className="photo-hover" data-sr="scale" data-sr-delay={`${i * 100}`} style={{ position: "relative", aspectRatio: "4/5", background: "var(--bg-surface-2)" }}>
                                <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
                                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.2 }}>{item.label}</p>
                                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: 4 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PRODUCT SPOTLIGHT ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
                        <div className="photo-hover" data-sr="left" style={{ aspectRatio: "4/3", background: "var(--bg-surface-2)", borderRadius: 8 }}>
                            <img
                                src="/assets/0F177FF4-65F3-4E3C-BEA9-E5DCBAA5CF5F.png"
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
                                        <IconCheck size={13} color="var(--accent)" />
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
                            <div key={step.num} data-sr data-sr-delay={`${i * 100}`} style={{
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
                                    WebkitTextStroke: "1.5px rgba(61,220,132,0.3)",
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
                            { Icon: IconTruck,      title: "Livraison gratuite", desc: "En France métropolitaine, Belgique, Suisse" },
                            { Icon: IconReturn,     title: "Retour 30 jours", desc: "Satisfait ou remboursé, sans conditions" },
                            { Icon: IconLock,       title: "Paiement sécurisé", desc: "Chiffrement SSL — Stripe certifié" },
                            { Icon: IconShield,     title: "Garantie 2 ans", desc: "Prise en charge de tout défaut de fabrication" },
                            { Icon: IconPackage,    title: "Expédition 48h", desc: "Traitement et envoi sous 2 jours ouvrés" },
                        ].map((r, i) => (
                            <div key={r.title} data-sr data-sr-delay={`${i * 60}`} style={{
                                padding: "28px 24px",
                                background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-surface-2)",
                                border: "1px solid var(--border)",
                                textAlign: "center",
                            }}>
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                                    <r.Icon size={22} color="var(--accent)" />
                                </div>
                                <p style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 6 }}>{r.title}</p>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NBA PRO PROOF ─── */}
            <section style={{ position: "relative", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center" }}>
                <img
                    src="/assets/48A89F2E-C37A-4782-A9CC-D4C8C01924F9.png"
                    alt="Ad Boots utilisé en NBA"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)" }} />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div data-sr="left" style={{ maxWidth: 520 }}>
                        <p className="label" style={{ color: "var(--accent)", marginBottom: 20 }}>Utilisé par les pros</p>
                        <h2 className="heading-xl" style={{ color: "#fff", marginBottom: 20 }}>
                            Sur les bancs<br />de la NBA.
                        </h2>
                        <div style={{ width: 32, height: 1, background: "var(--accent)", marginBottom: 24, opacity: 0.8 }} />
                        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 400 }}>
                            Les joueurs professionnels récupèrent entre chaque mi-temps. AD Boots leur donne accès à la même technologie que vous, à domicile.
                        </p>
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
                            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <IconStar key={i} size={14} color="var(--accent)" />
                                ))}
                                <span style={{ color: "var(--muted)", fontSize: "0.78rem", marginLeft: 6 }}>5.0 · 47 avis vérifiés</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {TESTIMONIALS.map((t, i) => (
                                <div key={t.name} className="testimonial-card card-lift" data-sr data-sr-delay={`${i * 120}`} style={{ position: "relative", overflow: "hidden" }}>
                                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: "linear-gradient(to right, var(--accent), transparent)" }} />
                                    <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <IconStar key={i} size={13} color="var(--accent)" />
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
                                            background: "rgba(61,220,132,0.08)",
                                            border: "1px solid rgba(61,220,132,0.2)",
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
                                label: "Bottes récupératives",
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
                                background: col.highlight ? "var(--bg-surface-3)" : "var(--bg-surface-2)",
                                border: col.highlight ? "1px solid var(--border-accent)" : "1px solid var(--border)",
                                borderRadius: 10,
                                position: "relative",
                                transform: col.highlight ? "translateY(-8px)" : undefined,
                                boxShadow: col.highlight ? "0 0 40px rgba(61,220,132,0.08)" : undefined,
                            }}>
                                {col.highlight && (
                                    <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#000", padding: "4px 16px", borderRadius: 100, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                                        Meilleur choix
                                    </div>
                                )}
                                <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>{col.label}</p>
                                <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: col.highlight ? "var(--ad-green)" : col.color, lineHeight: 1, marginBottom: 4 }}>{col.price}</p>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: 20 }}>{col.sub}</p>
                                <div style={{ padding: "10px 14px", background: col.highlight ? "rgba(61,220,132,0.08)" : "rgba(255,255,255,0.03)", borderRadius: 4, marginBottom: 24, border: "1px solid var(--border)" }}>
                                    <p style={{ fontSize: "0.78rem", fontWeight: 600, color: col.highlight ? "var(--accent)" : col.color }}>{col.annual}</p>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                    {col.items.map(item => (
                                        <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.85rem", color: "var(--fg-2)" }}>
                                            {col.highlight
                                                ? <IconCheck size={14} color={col.color} style={{ marginTop: 2 }} />
                                                : <IconX size={14} color={col.color} style={{ marginTop: 2 }} />
                                            }
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
                                Une question qui bloque ? Écrivez-nous à contact@adboots.fr.
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
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(61,220,132,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: "rgba(61,220,132,0.08)", border: "1px solid rgba(61,220,132,0.22)", borderRadius: 100, marginBottom: 28 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>Stock limité — quelques unités disponibles</span>
                    </div>
                    <h2 data-sr className="heading-xl" style={{ marginBottom: 20 }}>
                        Votre récupération<br />
                        <span className="text-shimmer">commence maintenant.</span>
                    </h2>
                    <p style={{ color: "var(--fg-2)", fontSize: "1rem", maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.8 }}>
                        Bottes récupératives · 350 € · Paiement sécurisé par Stripe<br />
                        Livraison gratuite · Retour 30 jours · Garantie 2 ans
                    </p>
                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
                        <Link href="/produit" className="btn-glow" style={{
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
                            background: "transparent", color: "var(--fg-2)",
                            fontWeight: 600, fontSize: "0.875rem",
                            letterSpacing: "0.06em", textTransform: "uppercase",
                            borderRadius: "var(--radius)",
                            border: "1px solid var(--border-strong)",
                        }}>
                            En savoir plus
                        </Link>
                    </div>
                    <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
                        {[
                            { Icon: IconLock,   label: "Paiement sécurisé" },
                            { Icon: IconTruck,  label: "Livraison offerte" },
                            { Icon: IconReturn, label: "Retour 30j" },
                        ].map(item => (
                            <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--muted)", fontWeight: 500 }}>
                                <item.Icon size={13} color="var(--muted)" />
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
