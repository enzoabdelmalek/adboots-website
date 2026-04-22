import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pourquoi Ad Boots — La Technologie" };

const STEPS = [
    { num: "01", title: "Gonflage séquentiel", desc: "Les chambres de la botte se gonflent les unes après les autres, de la cheville vers le genou. Cette séquence imite le mécanisme naturel de la pompe musculaire." },
    { num: "02", title: "Compression active", desc: "La pression appliquée favorise le retour veineux et lymphatique, accélérant l'élimination de l'acide lactique et des métabolites de l'effort." },
    { num: "03", title: "Relâchement contrôlé", desc: "Entre chaque cycle, une phase de décompression permet aux tissus de se réoxygéner. Ce rythme stimule la circulation sans fatiguer les muscles." },
    { num: "04", title: "Récupération accélérée", desc: "Résultat : moins de courbatures, réduction de l'œdème, sensation de jambes légères. Vos muscles récupèrent jusqu'à 2× plus vite qu'au repos." },
];

const VALUES = [
    { title: "Performance sans compromis", desc: "Chaque composant est sélectionné pour sa durabilité et sa précision. Pas de gadget — un outil de récupération sérieux." },
    { title: "Accessible, vraiment", desc: "La pressothérapie professionnelle coûte 60 à 120 € la séance. Ad Boots, c'est un investissement unique rentabilisé en moins de 6 sessions." },
    { title: "Conçu avec des professionnels", desc: "Développé en collaboration avec des kinésithérapeutes du sport et des préparateurs physiques de clubs professionnels." },
];

export default function PourquoiPage() {
    return (
        <>
            {/* ─── Header ─── */}
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div style={{ maxWidth: 640 }}>
                        <p className="label" style={{ marginBottom: 20 }}>La Technologie</p>
                        <h1 className="heading-xl" style={{ marginBottom: 24 }}>
                            Pourquoi<br />Ad Boots ?
                        </h1>
                        <div className="divider" />
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.85 }}>
                            La pressothérapie n'est pas une tendance. C'est une technique médicale validée, utilisée depuis des décennies dans les hôpitaux et les staffs sportifs professionnels. On l'a rendue accessible.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── How it works ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 80 }}>
                        <div>
                            <p className="label" style={{ marginBottom: 16 }}>La Science</p>
                            <h2 className="heading-lg" style={{ marginBottom: 24 }}>
                                Ce qui se passe<br />dans vos muscles.
                            </h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 16 }}>
                                Après un effort intense, vos muscles accumulent des métabolites (acide lactique, CO₂) et subissent des micro-lésions inflammatoires. Le repos seul est lent — souvent 48 à 72h.
                            </p>
                            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                                La compression séquentielle accélère ce processus en forçant le retour circulatoire et en drainant activement les zones de tension.
                            </p>
                        </div>
                        <div style={{
                            aspectRatio: "4/3",
                            background: "linear-gradient(145deg, var(--bg-surface) 0%, #0d1f12 100%)",
                            borderRadius: 12,
                            overflow: "hidden",
                            position: "relative",
                            border: "1px solid rgba(75,222,128,0.08)",
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=85"
                                alt="Récupération sportive"
                                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
                            />
                        </div>
                    </div>

                    {/* Steps */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                        {STEPS.map((s, i) => (
                            <div key={s.num} style={{
                                padding: "36px 28px",
                                background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-surface-2)",
                                borderRadius: i === 0 ? "8px 0 0 8px" : i === 3 ? "0 8px 8px 0" : 0,
                                border: "1px solid var(--border)",
                            }}>
                                <p style={{ color: "var(--accent)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 16 }}>{s.num}</p>
                                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.75 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "60px 0" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, textAlign: "center" }}>
                        {[
                            { num: "2×", label: "Récupération plus rapide" },
                            { num: "30%", label: "De courbatures en moins" },
                            { num: "6", label: "Zones de compression" },
                            { num: "12", label: "Niveaux de pression" },
                        ].map(s => (
                            <div key={s.label}>
                                <p style={{ color: "var(--accent)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>{s.num}</p>
                                <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em" }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Values ─── */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 520, marginBottom: 64 }}>
                        <p className="label" style={{ marginBottom: 16 }}>Notre Histoire</p>
                        <h2 className="heading-lg" style={{ marginBottom: 20 }}>
                            Ad Boots est né d'une frustration.
                        </h2>
                        <div className="divider" />
                        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                            Des séances de kiné hors de prix. Des appareils professionnels encombrants et trop chers. Une vraie solution manquait pour les sportifs sérieux qui ne sont pas sous contrat pro.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 60 }}>
                        {VALUES.map((v, i) => (
                            <div key={v.title} style={{
                                padding: "40px 32px",
                                background: "var(--bg-surface)",
                                border: "1px solid var(--border)",
                                borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : 0,
                            }}>
                                <h3 className="heading-md" style={{ marginBottom: 16, fontSize: "1.1rem" }}>{v.title}</h3>
                                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Quote */}
                    <div style={{
                        padding: "48px",
                        background: "linear-gradient(135deg, rgba(75,222,128,0.04) 0%, transparent 100%)",
                        border: "1px solid rgba(75,222,128,0.12)",
                        borderRadius: 12,
                        maxWidth: 800,
                        margin: "0 auto",
                        textAlign: "center",
                    }}>
                        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontStyle: "italic", lineHeight: 1.8, marginBottom: 24 }}>
                            &ldquo;La récupération, c'est 50% de la performance. On a arrêté de l'ignorer.&rdquo;
                        </p>
                        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>— Fondateurs d'Ad Boots</p>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "80px 0" }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
                    <div>
                        <h2 className="heading-lg" style={{ marginBottom: 12 }}>Convaincu ?</h2>
                        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Découvrez le produit et commandez directement.</p>
                    </div>
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Link href="/produit" className="btn-primary">Voir le produit — 350 €</Link>
                        <Link href="/contact" className="btn-outline">Nous contacter</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
