import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Récupération & Performance",
    description: "Conseils, méthodes et données pour progresser sans vous blesser.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
