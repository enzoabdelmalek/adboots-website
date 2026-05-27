import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité — AD Boots",
    description: "Politique de confidentialité AD Boots : données collectées, finalités du traitement, droits RGPD et gestion des cookies.",
};

const SECTION = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
            {title}
        </h2>
        <div style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.85 }}>
            {children}
        </div>
    </div>
);

export default function ConfidentialitePage() {
    return (
        <>
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <p className="label" style={{ marginBottom: 16 }}>RGPD</p>
                    <h1 className="heading-xl">Politique de confidentialité</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 760 }}>

                    <SECTION title="1. Responsable du traitement">
                        <p>
                            AD Boots — Responsable : Denis Mayele<br />
                            Email : contact@adboots.fr
                        </p>
                    </SECTION>

                    <SECTION title="2. Données collectées">
                        <p>Nous collectons les données suivantes :</p>
                        <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                            <li><strong style={{ color: "var(--fg)" }}>Commande :</strong> nom, prénom, adresse de livraison, adresse email, numéro de téléphone.</li>
                            <li><strong style={{ color: "var(--fg)" }}>Paiement :</strong> traité directement par Stripe — nous ne stockons aucune donnée bancaire.</li>
                            <li><strong style={{ color: "var(--fg)" }}>Contact :</strong> nom, email, message envoyé via le formulaire de contact.</li>
                            <li><strong style={{ color: "var(--fg)" }}>Navigation :</strong> données de navigation anonymisées via analytics (pages visitées, durée de session).</li>
                        </ul>
                    </SECTION>

                    <SECTION title="3. Finalités du traitement">
                        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                            <li>Traitement et suivi des commandes</li>
                            <li>Service après-vente et gestion des retours</li>
                            <li>Envoi de l'email de confirmation de commande</li>
                            <li>Réponse aux demandes de contact</li>
                            <li>Amélioration du site via données analytiques anonymes</li>
                        </ul>
                    </SECTION>

                    <SECTION title="4. Base légale">
                        <p>
                            Le traitement des données est fondé sur l'exécution du contrat de vente (article 6.1.b du RGPD)
                            et sur le consentement de l'utilisateur pour les données analytiques.
                        </p>
                    </SECTION>

                    <SECTION title="5. Durée de conservation">
                        <p>
                            Les données de commande sont conservées 3 ans à compter de la date d'achat (obligation légale comptable).
                            Les données de contact sont supprimées dans un délai de 12 mois après la dernière interaction.
                        </p>
                    </SECTION>

                    <SECTION title="6. Partage des données">
                        <p>Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec :</p>
                        <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                            <li><strong style={{ color: "var(--fg)" }}>Stripe</strong> — traitement du paiement sécurisé</li>
                            <li><strong style={{ color: "var(--fg)" }}>Transporteurs</strong> — pour la livraison de votre commande</li>
                            <li><strong style={{ color: "var(--fg)" }}>Supabase</strong> — stockage des données de commande (serveurs UE)</li>
                        </ul>
                    </SECTION>

                    <SECTION title="7. Vos droits">
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                            <li><strong style={{ color: "var(--fg)" }}>Accès</strong> : obtenir une copie de vos données</li>
                            <li><strong style={{ color: "var(--fg)" }}>Rectification</strong> : corriger des données inexactes</li>
                            <li><strong style={{ color: "var(--fg)" }}>Suppression</strong> : demander l'effacement de vos données</li>
                            <li><strong style={{ color: "var(--fg)" }}>Opposition</strong> : vous opposer à certains traitements</li>
                            <li><strong style={{ color: "var(--fg)" }}>Portabilité</strong> : recevoir vos données dans un format structuré</li>
                        </ul>
                        <p style={{ marginTop: 12 }}>
                            Pour exercer ces droits : contact@adboots.fr<br />
                            Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" style={{ color: "var(--accent)" }}>CNIL</a>.
                        </p>
                    </SECTION>

                    <SECTION title="8. Cookies">
                        <p>
                            Ce site utilise des cookies techniques (nécessaires au fonctionnement du panier) et des cookies analytiques
                            (mesure d'audience anonymisée). Vous pouvez désactiver les cookies analytiques dans les paramètres de votre navigateur
                            sans impact sur votre expérience d'achat.
                        </p>
                    </SECTION>

                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 40 }}>Dernière mise à jour : mai 2026</p>
                </div>
            </section>
        </>
    );
}
