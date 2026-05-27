import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — AD Boots",
    description: "Une question sur le produit, votre commande ou un retour ? Notre équipe répond sous 24h.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
