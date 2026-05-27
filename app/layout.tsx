import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/components/Navbar";
import Cart from "@/app/components/Cart";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import Script from "next/script";

const geist = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const archivo = Archivo({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: { default: "Ad Boots — Récupération Sportive", template: "%s | Ad Boots" },
    description: "Bottes de récupération sportive par pressothérapie. Récupérez 2× plus vite, performez mieux. 350 €, livraison gratuite.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${geist.variable} ${geistMono.variable} ${archivo.variable}`}>
            <head>
                {/* Prevent flash of wrong theme */}
                <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(localStorage.getItem('ad-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})()` }} />
                <Script src="https://tracker-production-9a75.up.railway.app/track.js?id=f9e291c2-0fea-4b24-8abb-57264e001cd3" strategy="afterInteractive" />
            </head>
            <body>
                <CartProvider>
                    <ScrollReveal />
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
