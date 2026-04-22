"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const LINKS = [
    { href: "/produit", label: "Le Produit" },
    { href: "/pourquoi", label: "Pourquoi Ad Boots" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const { totalItems, openCart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(v => {
            const next = !v;
            document.body.style.overflow = next ? "hidden" : "";
            return next;
        });
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-inner">
                    {/* Logo */}
                    <Link href="/" className="navbar-logo" onClick={closeMenu}>
                        AD<span>.</span>BOOTS
                    </Link>

                    {/* Desktop links */}
                    <ul className="navbar-links">
                        {LINKS.map(l => (
                            <li key={l.href}>
                                <Link href={l.href}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="navbar-actions">
                        <Link href="/produit" className="btn-primary navbar-cta" style={{ padding: "10px 22px", fontSize: "0.78rem" }}>
                            Commander
                        </Link>

                        {/* Cart */}
                        <button className="cart-btn" onClick={openCart} aria-label="Ouvrir le panier">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                        </button>

                        {/* Burger */}
                        <button
                            className={`burger-btn${menuOpen ? " open" : ""}`}
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <span className="burger-line" />
                            <span className="burger-line" />
                            <span className="burger-line" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
                {LINKS.map(l => (
                    <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
                ))}
                <div style={{ marginTop: "auto", paddingTop: 32 }}>
                    <Link href="/produit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={closeMenu}>
                        Commander — 350 €
                    </Link>
                </div>
            </div>
        </>
    );
}
