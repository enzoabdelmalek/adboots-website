"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("ad-theme");
        if (stored === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("ad-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("ad-theme", "light");
        }
    };

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
            style={{
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius)",
                color: "var(--fg-2)",
                transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-surface-2)"; e.currentTarget.style.color = "var(--fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg-2)"; }}
        >
            {dark ? (
                /* Sun */
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <line x1="12" y1="2" x2="12" y2="4"/>
                    <line x1="12" y1="20" x2="12" y2="22"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="2" y1="12" x2="4" y2="12"/>
                    <line x1="20" y1="12" x2="22" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
            ) : (
                /* Moon */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            )}
        </button>
    );
}
