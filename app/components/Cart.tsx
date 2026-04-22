"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function Cart() {
    const { items, isOpen, closeCart, removeItem, updateQty, totalPrice } = useCart();

    return (
        <>
            {/* Overlay */}
            <div
                className={`cart-overlay${isOpen ? " open" : ""}`}
                onClick={closeCart}
            />

            {/* Panel */}
            <div className={`cart-panel${isOpen ? " open" : ""}`}>
                {/* Header */}
                <div className="cart-header">
                    <div>
                        <p className="heading-md" style={{ fontSize: "1.1rem" }}>Mon panier</p>
                        {items.length > 0 && (
                            <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 2 }}>
                                {items.reduce((s, i) => s + i.qty, 0)} article{items.reduce((s, i) => s + i.qty, 0) > 1 ? "s" : ""}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={closeCart}
                        style={{ color: "var(--muted)", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)", transition: "background 0.2s", background: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "none")}
                        aria-label="Fermer le panier"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="cart-body">
                    {items.length === 0 ? (
                        <div style={{ paddingTop: 60, textAlign: "center" }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.2" style={{ margin: "0 auto 20px" }}>
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Votre panier est vide.</p>
                            <Link href="/produit" className="btn-outline" style={{ marginTop: 24, display: "inline-flex" }} onClick={closeCart}>
                                Voir le produit
                            </Link>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={`${item.id}-${item.size}`} className="cart-item">
                                {/* Image */}
                                <div className="cart-item-img">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    ) : (
                                        <div style={{ width: "100%", height: "100%", background: "var(--bg-surface-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                                <line x1="3" y1="6" x2="21" y2="6"/>
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.name}</p>
                                    <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: 3 }}>Taille {item.size}</p>
                                    <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.9rem", marginTop: 4 }}>{item.price} €</p>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                        <div className="qty-control">
                                            <button className="qty-btn" onClick={() => updateQty(item.id, item.size, item.qty - 1)}>−</button>
                                            <span className="qty-val">{item.qty}</span>
                                            <button className="qty-btn" onClick={() => updateQty(item.id, item.size, item.qty + 1)}>+</button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id, item.size)}
                                            style={{ color: "var(--muted)", fontSize: "0.75rem", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer" }}
                                            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                                            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                                        >
                                            Retirer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="cart-footer">
                        {/* Total */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Total</span>
                            <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>{totalPrice} €</span>
                        </div>

                        {/* Fractional payment hint */}
                        <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 16, textAlign: "center" }}>
                            ou <strong style={{ color: "var(--fg)" }}>{(totalPrice / 4).toFixed(0)} €/mois</strong> en 4× sans frais
                        </p>

                        <button className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: 0.5, cursor: "not-allowed" }} disabled>
                            Passer commande — bientôt disponible
                        </button>

                        {/* Reassurance */}
                        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
                            {["Retour 30j", "Livraison gratuite", "Paiement sécurisé"].map(r => (
                                <span key={r} style={{ fontSize: "0.72rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 4 }}>
                                    <span style={{ color: "var(--accent)" }}>✓</span> {r}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
