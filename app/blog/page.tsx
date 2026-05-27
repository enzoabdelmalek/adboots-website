"use client";

import { useState } from "react";
import Link from "next/link";

const ARTICLES = [
    {
        slug: "pressotherapie-vs-glaçons",
        category: "Récupération",
        date: "12 Jan 2025",
        title: "Pressothérapie vs Bain de glace : quelle méthode récupère le mieux ?",
        excerpt: "Deux approches diamétralement opposées, mêmes objectifs. On a comparé les données scientifiques pour savoir laquelle favoriser selon votre profil.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80",
        readTime: "6 min",
    },
    {
        slug: "routine-recuperation-triathlon",
        category: "Performance",
        date: "28 Déc 2024",
        title: "La routine de récupération d'un triathlète Ironman",
        excerpt: "Comment Théo M. enchaîne 35h de sport par semaine sans se blesser. Sa routine complète, étape par étape.",
        img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=700&q=80",
        readTime: "8 min",
    },
    {
        slug: "acide-lactique-mythes",
        category: "Science",
        date: "15 Déc 2024",
        title: "L'acide lactique : 5 idées reçues que tout sportif devrait connaître",
        excerpt: "Non, l'acide lactique n'est pas responsable de vos courbatures. Démêler les myths de la science pour mieux récupérer.",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
        readTime: "5 min",
    },
    {
        slug: "recuperation-football",
        category: "Sport collectif",
        date: "3 Déc 2024",
        title: "Comment les clubs de football pro utilisent la pressothérapie",
        excerpt: "Des vestiaires de Ligue 1 aux académies régionales : la pressothérapie s'impose comme le standard de récupération du football moderne.",
        img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=700&q=80",
        readTime: "7 min",
    },
    {
        slug: "frequence-sessions-recuperation",
        category: "Conseils",
        date: "20 Nov 2024",
        title: "Combien de sessions de pressothérapie par semaine ?",
        excerpt: "Trop peu et vous passez à côté. Trop souvent et vous y perdez. Le bon rythme selon votre charge d'entraînement.",
        img: "https://images.unsplash.com/photo-1571019613576-5b65c57d1d3f?w=700&q=80",
        readTime: "4 min",
    },
    {
        slug: "crossfit-recuperation-guide",
        category: "CrossFit",
        date: "8 Nov 2024",
        title: "Guide récupération CrossFit : survivre aux semaines de compétition",
        excerpt: "Doubles entraînements, WODs intenses, compétitions en back-to-back. Voici comment structurer votre récupération pour ne rien laisser sur la table.",
        img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&q=80",
        readTime: "9 min",
    },
];

const CATEGORIES = ["Tous", "Récupération", "Performance", "Science", "Conseils", "Sport collectif", "CrossFit"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filtered = activeCategory === "Tous"
        ? ARTICLES
        : ARTICLES.filter(a => a.category === activeCategory);

    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <>
            {/* Header */}
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(60px, 10vw, 100px) 0" }}>
                <div className="container">
                    <div style={{ maxWidth: 560 }}>
                        <p className="label anim-1" style={{ marginBottom: 20 }}>Blog</p>
                        <h1 className="heading-xl anim-2" style={{ marginBottom: 24 }}>
                            Récupération.<br />Performance.<br />Science.
                        </h1>
                        <div className="divider divider-animated" />
                        <p className="anim-3" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                            Conseils, méthodes et données pour progresser sans vous blesser.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured + Grid */}
            <section className="section-sm">
                <div className="container">

                    {/* Featured */}
                    {featured && (
                        <Link href={`/blog/${featured.slug}`} className="blog-featured-link" data-sr style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 48px)", alignItems: "center", color: "inherit", borderBottom: "1px solid var(--border)", paddingBottom: 60, marginBottom: 60 }}>
                            <div className="photo-hover" style={{ aspectRatio: "16/10", borderRadius: 8, background: "var(--bg-surface)" }}>
                                <img src={featured.img} alt={featured.title} className="blog-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                            </div>
                            <div>
                                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                                    <span className="tag">{featured.category}</span>
                                    <span style={{ color: "var(--muted)", fontSize: "0.78rem" }}>{featured.readTime} de lecture</span>
                                </div>
                                <h2 className="heading-lg" style={{ marginBottom: 16 }}>{featured.title}</h2>
                                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 24 }}>{featured.excerpt}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{featured.date}</span>
                                    <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600 }}>Lire l&apos;article →</span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Category filter */}
                    <div data-sr style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: "7px 16px",
                                    borderRadius: 100,
                                    border: "1px solid var(--border-strong)",
                                    background: activeCategory === cat ? "var(--fg)" : "transparent",
                                    color: activeCategory === cat ? "var(--bg)" : "var(--muted)",
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    {rest.length > 0 ? (
                        <div className="blog-grid">
                            {rest.map((article, i) => (
                                <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card card-lift" data-sr data-sr-delay={`${i * 80}`}>
                                    <div className="blog-card-img photo-hover">
                                        <img src={article.img} alt={article.title} className="blog-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                                    </div>
                                    <div className="blog-card-body">
                                        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                            <span className="tag" style={{ fontSize: "0.68rem", padding: "3px 9px" }}>{article.category}</span>
                                            <span style={{ color: "var(--muted)", fontSize: "0.72rem" }}>{article.readTime}</span>
                                        </div>
                                        <h3 style={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 }}>{article.title}</h3>
                                        <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.7, flex: 1 }}>{article.excerpt}</p>
                                        <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "auto" }}>{article.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : filtered.length === 0 && (
                        <p style={{ color: "var(--muted)", fontSize: "0.9rem", textAlign: "center", padding: "40px 0" }}>
                            Aucun article dans cette catégorie pour le moment.
                        </p>
                    )}
                </div>
            </section>

        </>
    );
}
