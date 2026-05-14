"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const IMAGES = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=85",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=85",
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=85",
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
        a: "Vous disposez de 30 jours pour nous retourner le produit s'il ne vous convient pas, sans justification. Remboursement sous 5 jours ouvrés.",
    },
    {
        q: "Le paiement fractionné est-il disponible ?",
        a: "Oui. Vous pouvez payer en 4× sans frais dès la mise en ligne de notre boutique. Un financement sur 10 ou 12 mois sera également proposé.",
    },
];

const REVIEWS = [
    { name: "Théo M.", sport: "Triathlète", note: 5, text: "Après chaque sortie longue, mes jambes récupèrent en une nuit. Indispensable dans ma prépa Ironman." },
    { name: "Sarah K.", sport: "Football pro", note: 5, text: "Toute l'équipe s'en sert maintenant. La différence se ressent dès la première session." },
    { name: "Lucas D.", sport: "CrossFit", note: 5, text: "2 entraînements par jour sans Ad Boots, c'est impossible. Maintenant c'est ma norme." },
];

const BENEFITS = [
    { icon: "⚡", title: "Récupération accélérée", desc: "La compression séquentielle à 4 chambres stimule la circulation et élimine les toxines musculaires après l'effort." },
    { icon: "📶", title: "100% Sans fil", desc: "Liberté de mouvement totale. Contrôle via télécommande dédiée, sans aucun câble de contrainte." },
    { icon: "🎯", title: "Usage polyvalent", desc: "Idéal pour les sportifs, les actifs debout toute la journée, et la gestion des jambes lourdes au quotidien." },
    { icon: "🎁", title: "Kit complet inclus", desc: "Boîte cadeau premium, sac de transport, télécommande et câble Type-C — tout est inclus dès l'ouverture." },
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
    const { addItem } = useCart();

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
                        <div>
                            <div className="gallery-main">
                                <img
                                    src={IMAGES[activeImg]}
                                    alt="Ad Boots Pro"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s" }}
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
                            <div>
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                                    <div className="tag">✓ En stock</div>
                                    <div className="tag" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "#f87171" }}>🔥 Stock limité</div>
                                </div>
                                <h1 className="heading-xl" style={{ marginBottom: 8 }}>AD Boots Pro</h1>
                                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Bottes de compression pneumatique sans fil · 4 chambres</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
                                    {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--accent)", fontSize: "0.9rem" }}>★</span>)}
                                    <span style={{ fontSize: "0.78rem", color: "var(--muted)", marginLeft: 4 }}>5.0 · 47 avis vérifiés</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
                                <p style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>350 €</p>
                                <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>ou 4× 87,50 € sans frais</p>
                            </div>

                            <div style={{ height: "1px", background: "var(--border)" }} />

                            {/* Sizes */}
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                                    <p className="label">Taille</p>
                                    <button style={{ fontSize: "0.78rem", color: "var(--muted)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
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
                                className="btn-primary"
                                style={{ width: "100%", justifyContent: "center", opacity: activeSize ? 1 : 0.45, cursor: activeSize ? "pointer" : "not-allowed", fontSize: "0.9rem" }}
                                onClick={handleAddToCart}
                                disabled={!activeSize}
                            >
                                {added ? "✓ Ajouté au panier" : activeSize ? "Ajouter au panier" : "Sélectionnez une taille"}
                            </button>

                            {/* Paiement sécurisé */}
                            <div style={{ padding: "16px 20px", background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
                                <p style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>🔒 Paiement 100% sécurisé</p>
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    {["VISA", "MC", "CB", "AMEX", "PAYPAL"].map(m => (
                                        <span key={m} style={{ padding: "4px 10px", border: "1px solid var(--border-strong)", borderRadius: 4, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)" }}>{m}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Reassurance */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    { icon: "🚚", text: "Livraison gratuite en France métropolitaine" },
                                    { icon: "↩", text: "Retour gratuit sous 30 jours" },
                                    { icon: "✓", text: "Garantie 2 ans constructeur" },
                                ].map(r => (
                                    <div key={r.text} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.83rem", color: "var(--muted)" }}>
                                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>{r.icon}</span>
                                        {r.text}
                                    </div>
                                ))}
                            </div>

                            {/* Short description */}
                            <div>
                                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)" }}>
                                    AD Boots Pro sont des bottes de compression pneumatique sans fil à 4 chambres séquentielles. Contrôle via télécommande dédiée, recharge USB-C — la récupération professionnelle, accessible à domicile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Tabs Section ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    {/* Tab nav */}
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

                    {/* Tab content */}
                    <div style={{ padding: "48px 0" }}>
                        {activeTab === "benefits" && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
                                {BENEFITS.map(b => (
                                    <div key={b.title}>
                                        <div style={{ fontSize: "2rem", marginBottom: 16 }}>{b.icon}</div>
                                        <p style={{ fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>{b.title}</p>
                                        <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75 }}>{b.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "specs" && (
                            <div style={{ maxWidth: 600 }}>
                                {SPECS.map((s, i) => (
                                    <div key={s.label} style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 16,
                                        padding: "16px 0",
                                        borderBottom: "1px solid var(--border)",
                                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                                    }}>
                                        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{s.label}</p>
                                        <p style={{ fontSize: "0.85rem", fontWeight: 500 }}>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "kit" && (
                            <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 400 }}>
                                {KIT.map(item => (
                                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 20px", background: "var(--bg-surface-2)", borderRadius: 6, border: "1px solid var(--border)" }}>
                                        <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--accent)", minWidth: 32, fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif" }}>{item.qty}</span>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
                        <div>
                            <p className="label" style={{ marginBottom: 12 }}>Avis clients</p>
                            <h2 className="heading-lg">5.0 / 5</h2>
                            <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
                                {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "var(--accent)" }}>★</span>)}
                            </div>
                        </div>
                        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Basé sur {REVIEWS.length} avis vérifiés</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                        {REVIEWS.map(r => (
                            <div key={r.name} className="testimonial-card">
                                <div style={{ display: "flex", gap: 3 }}>
                                    {Array.from({ length: r.note }).map((_, i) => <span key={i} style={{ color: "var(--accent)", fontSize: "0.85rem" }}>★</span>)}
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
                    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
                        <div>
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
                        <div>
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

            {/* ─── Bottom CTA ─── */}
            <section style={{ background: "var(--accent)", padding: "60px 0" }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
                    <div>
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
