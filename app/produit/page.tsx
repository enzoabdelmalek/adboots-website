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

const SIZES = ["S", "M", "L", "XL"];

const SPECS = [
    { label: "Pression", value: "30 – 240 mmHg" },
    { label: "Zones de compression", value: "6 zones séquentielles" },
    { label: "Niveaux de pression", value: "12 niveaux" },
    { label: "Durée de charge", value: "2h (USB-C)" },
    { label: "Autonomie", value: "4h d'utilisation" },
    { label: "Poids", value: "1,4 kg la paire" },
    { label: "Matière", value: "Nylon technique + néoprène" },
    { label: "Certification", value: "CE Médical" },
];

const FAQ = [
    {
        q: "Combien de temps dure une session ?",
        a: "Une session standard dure 20 à 30 minutes. Pour une récupération intensive post-compétition, vous pouvez aller jusqu'à 45 minutes en alternant les niveaux de pression.",
    },
    {
        q: "Quelle taille choisir ?",
        a: "Mesurez votre mollet à son point le plus large. S = jusqu'à 36 cm, M = 36–40 cm, L = 40–44 cm, XL = 44 cm et plus. En cas de doute, prenez la taille supérieure.",
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

export default function ProduitPage() {
    const [activeImg, setActiveImg] = useState(0);
    const [activeSize, setActiveSize] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        if (!activeSize) return;
        addItem({
            id: "adboots-pro",
            name: "Ad Boots Pro",
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
                                <div className="tag" style={{ marginBottom: 16 }}>✓ En stock — Expédition sous 48h</div>
                                <h1 className="heading-xl" style={{ marginBottom: 8 }}>Ad Boots Pro</h1>
                                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Bottes de récupération par pressothérapie</p>
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
                                            key={s}
                                            className={`size-btn${activeSize === s ? " active" : ""}`}
                                            onClick={() => setActiveSize(s)}
                                        >
                                            {s}
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

                            {/* Reassurance */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "20px", background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
                                {[
                                    { icon: "🚚", text: "Livraison gratuite en France métropolitaine" },
                                    { icon: "↩", text: "Retour gratuit sous 30 jours" },
                                    { icon: "✓",  text: "Garantie 2 ans constructeur" },
                                    { icon: "🔒", text: "Paiement 100% sécurisé" },
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
                                    Ad Boots Pro sont des bottes de compression pneumatique conçues pour les sportifs amateur et semi-professionnels. 12 niveaux de pression, 6 zones de compression séquentielles, batterie longue durée — la récupération professionnelle, accessible à domicile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Technical Specs ─── */}
            <section className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
                        <div>
                            <p className="label" style={{ marginBottom: 20 }}>Spécifications Techniques</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                                {SPECS.map((s, i) => (
                                    <div key={s.label} style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 16,
                                        padding: "16px 0",
                                        borderBottom: "1px solid var(--border)",
                                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                                    }}>
                                        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{s.label}</p>
                                        <p style={{ fontSize: "0.85rem", fontWeight: 500 }}>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="label" style={{ marginBottom: 20 }}>Ce qui est inclus</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                {[
                                    "1 paire de bottes Ad Boots Pro",
                                    "1 boîtier de contrôle sans fil",
                                    "1 câble de charge USB-C",
                                    "1 sac de transport premium",
                                    "1 guide d'utilisation FR/EN",
                                    "1 carte de garantie 2 ans",
                                ].map(item => (
                                    <div key={item} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                                        <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: 40, padding: 24, background: "rgba(75,222,128,0.05)", border: "1px solid rgba(75,222,128,0.15)", borderRadius: 8 }}>
                                <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", marginBottom: 8 }}>✓ Certification CE Médical</p>
                                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.75 }}>
                                    Ad Boots Pro est certifié conforme aux exigences européennes pour les dispositifs médicaux de classe I. Conçu en collaboration avec des kinésithérapeutes du sport.
                                </p>
                            </div>
                        </div>
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
                        style={{ background: "#0A0A0A", color: "var(--fg)", padding: "16px 36px" }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Choisir ma taille
                    </button>
                </div>
            </section>
        </>
    );
}
