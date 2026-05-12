import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/components/Navbar";
import Cart from "@/app/components/Cart";
import Footer from "@/app/components/Footer";
import Script from "next/script";

const barlow = Barlow({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
    title: { default: "Ad Boots — Récupération Sportive", template: "%s | Ad Boots" },
    description: "Bottes de récupération sportive par pressothérapie. Récupérez 2× plus vite, performez mieux. 350 €, livraison gratuite.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
            <head>
                <Script src="https://tracker-production-9a75.up.railway.app/track.js?id=f9e291c2-0fea-4b24-8abb-57264e001cd3" strategy="afterInteractive" />
            </head>
            <body>
                <CartProvider>
                    <Navbar />
                    <Cart />
                    <main style={{ paddingTop: "var(--navbar-h)" }}>
                        {children}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
