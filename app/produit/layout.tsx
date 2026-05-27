import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AD Boots Pro — Bottes de compression pneumatique sans fil",
    description: "Bottes de pressothérapie sans fil à 4 chambres séquentielles. Récupération accélérée après l'effort. Livraison gratuite, retour 30 jours, garantie 2 ans. 350 €.",
};

export default function ProduitLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
