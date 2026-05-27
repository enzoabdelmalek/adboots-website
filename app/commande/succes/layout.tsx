import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commande confirmée — AD Boots",
    description: "Votre commande a bien été reçue. Expédition sous 48h ouvrées.",
};

export default function SuccesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
