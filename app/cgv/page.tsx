import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente — AD Boots",
    description: "Conditions générales de vente AD Boots : prix, livraison, droit de rétractation 30 jours, garantie 2 ans et service client.",
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

export default function CGVPage() {
    return (
        <>
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <p className="label" style={{ marginBottom: 16 }}>Achat en ligne</p>
                    <h1 className="heading-xl">Conditions Générales de Vente</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 760 }}>

                    <SECTION title="1. Objet">
                        <p>
                            Les présentes Conditions Générales de Vente (CGV) régissent les ventes effectuées sur le site ad-boots.com par la société AD Boots
                            à tout consommateur (ci-après « le Client »). Toute commande implique l'acceptation sans réserve des présentes CGV.
                        </p>
                    </SECTION>

                    <SECTION title="2. Produits">
                        <p>
                            Les produits proposés à la vente sont les AD Boots Pro, bottes de compression pneumatique sans fil à 4 chambres séquentielles.
                            Les caractéristiques essentielles de chaque produit sont présentées sur la fiche produit du site.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            AD Boots se réserve le droit de modifier son catalogue à tout moment sans préavis.
                        </p>
                    </SECTION>

                    <SECTION title="3. Prix">
                        <p>
                            Les prix sont indiqués en euros TTC. AD Boots se réserve le droit de modifier ses prix à tout moment,
                            étant entendu que le prix appliqué est celui en vigueur au moment de la validation de la commande.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Les frais de livraison sont offerts pour toute commande en France métropolitaine.
                        </p>
                    </SECTION>

                    <SECTION title="4. Commande">
                        <p>
                            La commande est validée après confirmation du paiement. Un email de confirmation est envoyé à l'adresse fournie par le Client.
                            AD Boots se réserve le droit d'annuler toute commande en cas de rupture de stock ou d'anomalie de prix.
                        </p>
                    </SECTION>

                    <SECTION title="5. Paiement">
                        <p>
                            Le paiement s'effectue en ligne de manière sécurisée via Stripe. Les moyens de paiement acceptés sont :
                            carte bancaire (Visa, Mastercard, American Express, CB).
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Les données de paiement sont chiffrées et ne sont jamais stockées sur nos serveurs.
                        </p>
                    </SECTION>

                    <SECTION title="6. Livraison">
                        <p>
                            Les commandes sont expédiées sous 48h ouvrées après confirmation du paiement, vers la France métropolitaine,
                            la Belgique, la Suisse, le Luxembourg et Monaco.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            En cas de retard de livraison imputable au transporteur, AD Boots ne pourra être tenu responsable.
                        </p>
                    </SECTION>

                    <SECTION title="7. Droit de rétractation">
                        <p>
                            Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un délai de <strong style={{ color: "var(--fg)" }}>30 jours</strong> à compter
                            de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motifs.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Pour exercer ce droit, le Client doit contacter AD Boots à l'adresse contact@adboots.fr.
                            Le produit doit être retourné dans son emballage d'origine, en parfait état.
                            Les frais de retour sont à la charge du Client sauf défaut constaté à la réception.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Le remboursement sera effectué sous 5 jours ouvrés après réception du retour.
                        </p>
                    </SECTION>

                    <SECTION title="8. Garantie">
                        <p>
                            Les produits AD Boots bénéficient de la garantie légale de conformité (2 ans) et de la garantie contre les vices cachés
                            prévues aux articles L217-4 et suivants du Code de la consommation.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Cette garantie couvre les défauts de fabrication. Elle ne couvre pas l'usure normale, les dommages accidentels
                            ni les dommages liés à une utilisation non conforme.
                        </p>
                    </SECTION>

                    <SECTION title="9. Responsabilité">
                        <p>
                            AD Boots ne saurait être tenu responsable des dommages indirects résultant de l'utilisation du produit.
                            L'utilisation des AD Boots est déconseillée en cas de troubles circulatoires graves, thrombose, plaies ouvertes
                            ou grossesse. En cas de doute, consultez un professionnel de santé.
                        </p>
                    </SECTION>

                    <SECTION title="10. Service client">
                        <p>
                            Pour toute question relative à une commande : contact@adboots.fr<br />
                            Délai de réponse : sous 24h, du lundi au vendredi.
                        </p>
                    </SECTION>

                    <SECTION title="11. Droit applicable">
                        <p>
                            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.
                            À défaut, les tribunaux français seront seuls compétents.
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Conformément à l'ordonnance n°2015-1033, le Client peut recourir à la médiation conventionnelle ou à tout mode
                            alternatif de règlement des différends en cas de litige.
                        </p>
                    </SECTION>

                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 40 }}>Dernière mise à jour : mai 2026</p>
                </div>
            </section>
        </>
    );
}
