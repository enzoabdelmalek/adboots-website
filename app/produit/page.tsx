"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { IconTruck, IconReturn, IconShield, IconLock, IconCheck, IconStar, IconZap, IconX } from "@/app/components/Icons";

const IMAGES = [
    "/assets/IMG_7954.JPG",
    "/assets/B3D22074-745E-43B9-8DE5-2D74C8B59548.jpeg",
    "/assets/0F177FF4-65F3-4E3C-BEA9-E5DCBAA5CF5F.png",
    "/assets/48A89F2E-C37A-4782-A9CC-D4C8C01924F9.png",
];

const SIZES = [
    { key: "M", label: "M", desc: "< 180 cm" },
    { key: "L", label: "L", desc: "> 180 cm" },
];

const SPECS = [
    { label: "Technologie", value: "Pneumatique — compression par air" },
    { label: "Chambres", value: "4 chambres séquentielles" },
    { label: "Connectivité", value: "Sans fil — Wireless + Télécommande" },
    { label: "Recharge", value: "USB-C — câble Type-C inclus" },
];

const FAQ = [
    {
        q: "Combien de temps dure une session ?",
        a: "Une session standard dure 20 à 30 minutes. Pour une récupération intensive post-compétition, vous pouvez aller jusqu'à 45 minutes en alternant les niveaux de pression.",
    },
    {
        q: "Quelle taille choisir ?",
        a: "Le choix se fait selon votre taille : M pour les personnes mesurant moins de 180 cm, L pour celles mesurant plus de 180 cm. En cas de doute, prenez la taille L.",
    },
    {
        q: "Peut-on utiliser Ad Boots chaque jour ?",
        a: "Oui, absolument. La pressothérapie est sans contre-indication pour un usage quotidien chez les sportifs en bonne santé. Beaucoup de nos utilisateurs les portent après chaque entraînement.",
    },
    {
        q: "Quelle est la politique de retour ?",
        a: "Vous disposez de 30 jours pour nous retourner le produit dans son emballage d'origine. Remboursement sous 5 jours ouvrés.",
    },
    {
        q: "Quels moyens de paiement sont acceptés ?",
        a: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) ainsi que PayPal. Le paiement est sécurisé via Stripe.",
    },
];

const REVIEWS = [
    { name: "Théo M.", sport: "Triathlète", note: 5, text: "Après chaque sortie longue, mes jambes récupèrent en une nuit. Indispensable dans ma prépa Ironman." },
    { name: "Sarah K.", sport: "Football pro", note: 5, text: "Toute l'équipe s'en sert maintenant. La différence se ressent dès la première session." },
    { name: "Lucas D.", sport: "CrossFit", note: 5, text: "2 entraînements par jour sans Ad Boots, c'est impossible. Maintenant c'est ma norme." },
];

const BENEFITS = [
    { Icon: IconZap,    title: "Récupération accélérée", desc: "La compression séquentielle à 4 chambres stimule la circulation et élimine les toxines musculaires après l'effort." },
    { Icon: IconCheck,  title: "100% Sans fil", desc: "Liberté de mouvement totale. Contrôle via télécommande dédiée, sans aucun câble de contrainte." },
    { Icon: IconShield, title: "Usage polyvalent", desc: "Idéal pour les sportifs, les actifs debout toute la journée, et la gestion des jambes lourdes au quotidien." },
    { Icon: IconTruck,  title: "Kit complet inclus", desc: "Boîte cadeau premium, sac de transport, télécommande et câble Type-C — tout est inclus dès l'ouverture." },
];

const KIT = [
    { qty: "×2", label: "Manchons pour jambes" },
    { qty: "×1", label: "Télécommande sans fil" },
    { qty: "×1", label: "Câble de recharge Type-C" },
    { qty: "×1", label: "Sac de transport" },
    { qty: "×1", label: "Boîte cadeau premium" },
];

export default function ProduitPage() {
    const [activeImg, setActiveImg] = useState(0);
    const [activeSize, setActiveSize] = useState<string>("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [added, setAdded] = useState(false);
    const [activeTab, setActiveTab] = useState<"benefits" | "specs" | "kit">("benefits");
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    const sizeGuideRef = useRef<HTMLDivElement>(null);
    const { addItem } = useCart();

    useEffect(() => {
        if (!showSizeGuide) return;

        document.body.style.overflow = "hidden";

        const focusable = sizeGuideRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.[0]?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") { setShowSizeGuide(false); return; }
            if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [showSizeGuide]);

    const handleAddToCart = () => {
        if (!activeSize) return;
        addItem({
            id: "adboots-pro",
            name: "AD Boots Pro",
            price: 350,
            size: activeSize,
            image: IMAGES[0],
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <>
            {/* Breadcrumb */}
            <div style={{ padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                        <Link href="/" style={{ color: "var(--muted)", transition: "color 0.2s" }}>Accueil</Link>
                        <span style={{ margin: "0 8px" }}>·</span>
                        <span>Ad Boots Pro</span>
                    </p>
                </div>
            </div>

            {/* ─── Product Main ─── */}
            <section className="section-sm">
                <div className="container">
                    <div className="product-layout">
                        {/* Gallery */}
                        <div className="anim-img">
                            <div className="gallery-main">
                                <img
                                    src={IMAGES[activeImg]}
                                    alt="Ad Boots Pro"
                                    style={{ width: "100%", height: "100%", objectFit: "contain", transition: "opacity 0.3s" }}
                                />
                            </div>
                            <div className="gallery-thumbs">
                                {IMAGES.map((src, i) => (
                                    <button
                                        key={i}
                                        className={`gallery-thumb${activeImg === i ? " active" : ""}`}
                                        onClick={() => setActiveImg(i)}
                                    >
                                        <img src={src} alt={`Vue ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                            <div className="anim-1">
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                                </div>
                                <h1 className="heading-xl" style={{ marginBottom: 8 }}>AD Boots Pro</h1>
                                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Bottes de compression pneumatique sans fil · 4 chambres</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 12 }}>
                                    {[1,2,3,4,5].map(s => <IconStar key={s} size={13} color="var(--accent)" />)}
                                    <span style={{ fontSize: "0.78rem", color: "var(--muted)", marginLeft: 6 }}>5.0 · 47 avis vérifiés</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="anim-2">
                                <p style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>350 €</p>
                            </div>

                            <div style={{ height: "1px", background: "var(--border)" }} />

                            {/* Sizes */}
                            <div className="anim-3">
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                                    <p className="label">Taille</p>
                                    <button onClick={() => setShowSizeGuide(true)} style={{ fontSize: "0.78rem", color: "var(--muted)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
                                        Guide des tailles
                                    </button>
                                </div>
                                <div className="size-grid">
                                    {SIZES.map(s => (
                                        <button
                                            key={s.key}
                                            className={`size-btn${activeSize === s.key ? " active" : ""}`}
                                            onClick={() => setActiveSize(s.key)}
                                            style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}
                                        >
                                            <span>{s.label}</span>
                                            <span style={{ fontSize: "0.65rem", opacity: 0.7, fontWeight: 400 }}>{s.desc}</span>
                                        </button>
                                    ))}
                                </div>
                                {!activeSize && (
                                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 10 }}>Sélectionnez une taille pour commander.</p>
                                )}
                            </div>

                            {/* Add to cart */}
                            <button
                                className={`btn-primary anim-4${activeSize ? " btn-glow" : ""}`}
                                style={{ width: "100%", justifyContent: "center", opacity: activeSize ? 1 : 0.45, cursor: activeSize ? "pointer" : "not-allowed", fontSize: "0.9rem" }}
                                onClick={handleAddToCart}
                                disabled={!activeSize}
                            >
                                {added ? <><IconCheck size={14} color="#0a0a0a" /> Ajouté au panier</> : activeSize ? "Ajouter au panier" : "Sélectionnez une taille"}
                            </button>

                            {/* Paiement sécurisé */}
                            <div className="anim-5" style={{ padding: "16px 20px", background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                                    <IconLock size={12} color="var(--muted)" />
                                    <p style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Paiement 100% sécurisé</p>
                                </div>
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    {["VISA", "MC", "CB", "AMEX", "PAYPAL"].map(m => (
                                        <span key={m} style={{ padding: "4px 10px", border: "1px solid var(--border-strong)", borderRadius: 4, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)" }}>{m}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Reassurance */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    { Icon: IconTruck,  text: "Livraison gratuite en France métropolitaine" },
                                    { Icon: IconReturn, text: "Retour gratuit sous 30 jours" },
                                    { Icon: IconShield, text: "Garantie 2 ans constructeur" },
                                ].map(r => (
                                    <div key={r.text} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.83rem", color: "var(--muted)" }}>
                                        <r.Icon size={14} color="var(--accent)" />
                                        {r.text}
                                    </div>
                                ))}
                            </div>

                            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)" }}>
                                AD Boots Pro sont des bottes de compression pneumatique sans fil à 4 chambres séquentielles. Contrôle via télécommande dédiée, recharge USB-C — la récupération professionnelle, accessible à domicile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Packshot ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }} data-sr="scale">
                        <p className="label" style={{ marginBottom: 12 }}>Dans la boîte</p>
                        <h2 className="heading-lg">Boots. Boitier. Sac.</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }} className="packshot-grid">
                        {/* Boots */}
                        <div data-sr data-sr-delay="0" style={{ position: "relative", borderRadius: 8, overflow: "hidden", background: "#f8f8f6", border: "1px solid var(--border)", aspectRatio: "3/4" }}>
                            <img
                                src="/assets/IMG_7954.JPG"
                                alt="AD Boots Pro — manchons de compression"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                                loading="lazy"
                            />
                            <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "6px 14px" }}>
                                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Manchons × 2</p>
                            </div>
                        </div>

                        {/* Boitier */}
                        <div data-sr data-sr-delay="100" style={{ position: "relative", borderRadius: 8, overflow: "hidden", background: "#f8f8f6", border: "1px solid var(--border)", aspectRatio: "3/4" }}>
                            <img
                                src="/assets/6a57b91b-e630-4cd4-a27d-18fa694c871e.JPG"
                                alt="Boitier de contrôle AD Boots"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                                loading="lazy"
                            />
                            <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "6px 14px" }}>
                                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Boitier × 2</p>
                            </div>
                        </div>

                        {/* Sac */}
                        <div data-sr data-sr-delay="200" style={{ position: "relative", borderRadius: 8, overflow: "hidden", background: "#f8f8f6", border: "1px solid var(--border)", aspectRatio: "3/4" }}>
                            <img
                                src="/assets/bead86ce-86af-4ff9-8954-9ece406caf91.JPG"
                                alt="Sac de transport AD Boots"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                                loading="lazy"
                            />
                            <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "6px 14px" }}>
                                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Sac de transport</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Tabs Section ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
                        {([
                            { key: "benefits", label: "Bénéfices" },
                            { key: "specs",    label: "Caractéristiques" },
                            { key: "kit",      label: "Contenu du kit" },
                        ] as const).map(t => (
                            <button
                                key={t.key}
                                onClick={() => setActiveTab(t.key)}
                                style={{
                                    padding: "18px 28px",
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: activeTab === t.key ? "var(--accent)" : "var(--muted)",
                                    borderBottom: activeTab === t.key ? "2px solid var(--accent)" : "2px solid transparent",
                                    marginBottom: "-1px",
                                    transition: "color 0.2s",
                                    background: "none",
                                }}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: "48px 0" }}>
                        {activeTab === "benefits" && (
                            <div key="benefits" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
                                {BENEFITS.map((b, i) => (
                                    <div key={b.title} style={{ animation: `fadeUp 0.4s both`, animationDelay: `${i * 80}ms` }}>
                                        <div style={{ marginBottom: 16 }}>
                                            <b.Icon size={24} color="var(--accent)" />
                                        </div>
                                        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>{b.title}</p>
                                        <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75 }}>{b.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "specs" && (
                            <div key="specs" style={{ maxWidth: 600 }}>
                                {SPECS.map((s, i) => (
                                    <div key={s.label} style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 16,
                                        padding: "16px 0",
                                        borderBottom: "1px solid var(--border)",
                                        animation: `fadeUp 0.4s both`,
                                        animationDelay: `${i * 60}ms`,
                                    }}>
                                        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{s.label}</p>
                                        <p style={{ fontSize: "0.85rem", fontWeight: 500 }}>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "kit" && (
                            <div key="kit" style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}>
                                {KIT.map((item, i) => (
                                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 20px", background: "var(--bg-surface-2)", borderRadius: 6, border: "1px solid var(--border)", animation: `fadeUp 0.4s both`, animationDelay: `${i * 60}ms` }}>
                                        <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--accent)", minWidth: 32, fontFamily: "var(--font-display)" }}>{item.qty}</span>
                                        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── Reviews ─── */}
            <section className="section">
                <div className="container">
                    <div data-sr style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
                        <div>
                            <p className="label" style={{ marginBottom: 12 }}>Avis clients</p>
                            <h2 className="heading-lg">5.0 / 5</h2>
                            <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
                                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={14} color="var(--accent)" />)}
                            </div>
                        </div>
                        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Basé sur {REVIEWS.length} avis vérifiés</p>
                    </div>
                    <div className="grid-3" style={{ gap: 20 }}>
                        {REVIEWS.map((r, i) => (
                            <div key={r.name} className="testimonial-card card-lift" data-sr data-sr-delay={`${i * 100}`}>
                                <div style={{ display: "flex", gap: 3 }}>
                                    {Array.from({ length: r.note }).map((_, j) => <IconStar key={j} size={13} color="var(--accent)" />)}
                                </div>
                                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: "0.85rem" }}>{r.name}</p>
                                    <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: 2 }}>{r.sport}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section id="faq" className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="grid-sidebar" style={{ gap: "clamp(32px, 6vw, 80px)" }}>
                        <div data-sr="left">
                            <p className="label" style={{ marginBottom: 16 }}>FAQ</p>
                            <h2 className="heading-lg">Questions fréquentes</h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 24 }}>
                                Une question sans réponse ici ? Notre équipe répond en moins de 24h.
                            </p>
                            <Link href="/contact" className="btn-ghost" style={{ paddingLeft: 0 }}>
                                Contacter le support →
                            </Link>
                        </div>
                        <div data-sr="right">
                            {FAQ.map((item, i) => (
                                <div key={i} className="accordion-item">
                                    <button
                                        className="accordion-trigger"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span>{item.q}</span>
                                        <svg
                                            className={`accordion-icon${openFaq === i ? " open" : ""}`}
                                            width="16" height="16" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    <div className="accordion-content" style={{ maxHeight: openFaq === i ? "200px" : "0" }}>
                                        <div className="accordion-content-inner">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Size Guide Modal ─── */}
            {showSizeGuide && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Guide des tailles"
                    onClick={() => setShowSizeGuide(false)}
                    style={{
                        position: "fixed", inset: 0, zIndex: 200,
                        background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        padding: 24,
                    }}
                >
                    <div
                        ref={sizeGuideRef}
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: "var(--bg)", border: "1px solid var(--border)",
                            borderRadius: 12, padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 36px)", maxWidth: 480, width: "100%",
                            animation: "fadeUp 0.3s both",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                            <div>
                                <p className="label" style={{ marginBottom: 6 }}>Tailles disponibles</p>
                                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Guide des tailles</h2>
                            </div>
                            <button
                                onClick={() => setShowSizeGuide(false)}
                                aria-label="Fermer le guide des tailles"
                                style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, border: "1px solid var(--border)", background: "var(--bg-surface)", flexShrink: 0 }}
                            >
                                <IconX size={14} color="var(--muted)" />
                            </button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                            {[
                                { size: "M", height: "< 180 cm", calf: "< 46 cm", thigh: "< 64 cm" },
                                { size: "L", height: "> 180 cm", calf: "> 46 cm", thigh: "> 64 cm" },
                            ].map(row => (
                                <div key={row.size} style={{
                                    display: "flex", alignItems: "center", gap: 16,
                                    padding: "16px 18px",
                                    background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 8,
                                }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 6, background: "var(--bg)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
                                        {row.size}
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, flex: 1, minWidth: 0 }}>
                                        {[
                                            { label: "Taille", val: row.height },
                                            { label: "Mollet", val: row.calf },
                                            { label: "Cuisse", val: row.thigh },
                                        ].map(({ label, val }) => (
                                            <div key={label}>
                                                <p style={{ fontSize: "0.68rem", color: "var(--muted)", marginBottom: 2 }}>{label}</p>
                                                <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, padding: "14px 16px", background: "var(--bg-surface)", borderRadius: 6 }}>
                            En cas de doute entre les deux tailles, choisissez la <strong style={{ color: "var(--fg)" }}>taille L</strong>. Les bottes s&apos;adaptent grâce au système de compression réglable.
                        </p>
                    </div>
                </div>
            )}

            {/* ─── Bottom CTA ─── */}
            <section style={{ background: "var(--accent)", padding: "60px 0" }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
                    <div data-sr="left">
                        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: 8, letterSpacing: "-0.02em" }}>
                            Prêt à commander ?
                        </h2>
                        <p style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.9rem" }}>Livraison gratuite · Retour 30j · Garantie 2 ans</p>
                    </div>
                    <button
                        className="btn-primary"
                        style={{ background: "#0A0A0A", color: "#ffffff", padding: "16px 36px" }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Choisir ma taille
                    </button>
                </div>
            </section>
        </>
    );
}
