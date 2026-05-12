import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales — AD Boots" };

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

export default function MentionsLegalesPage() {
    return (
        <>
            <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "clamp(48px, 8vw, 80px) 0" }}>
                <div className="container">
                    <p className="label" style={{ marginBottom: 16 }}>Informations légales</p>
                    <h1 className="heading-xl">Mentions légales</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 760 }}>

                    <SECTION title="Éditeur du site">
                        <p><strong style={{ color: "var(--fg)" }}>Dénomination sociale :</strong> AD Boots</p>
                        <p style={{ marginTop: 8 }}><strong style={{ color: "var(--fg)" }}>Forme juridique :</strong> [À compléter — ex : Auto-entrepreneur / SAS / SARL]</p>
                        <p style={{ marginTop: 8 }}><strong style={{ color: "var(--fg)" }}>SIRET :</strong> <span style={{ color: "#f87171" }}>[À compléter]</span></p>
                        <p style={{ marginTop: 8 }}><strong style={{ color: "var(--fg)" }}>Adresse du siège social :</strong> <span style={{ color: "#f87171" }}>[À compléter]</span></p>
                        <p style={{ marginTop: 8 }}><strong style={{ color: "var(--fg)" }}>Email :</strong> contact@ad-boots.com</p>
                    </SECTION>

                    <SECTION title="Responsable de publication">
                        <p>Denis Mayele</p>
                        <p style={{ marginTop: 8 }}>Email : contact@ad-boots.com</p>
                    </SECTION>

                    <SECTION title="Hébergement">
                        <p><strong style={{ color: "var(--fg)" }}>Hébergeur :</strong> Vercel Inc.</p>
                        <p style={{ marginTop: 8 }}>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                        <p style={{ marginTop: 8 }}>Site : <a href="https://vercel.com" style={{ color: "var(--accent)" }}>vercel.com</a></p>
                    </SECTION>

                    <SECTION title="Propriété intellectuelle">
                        <p>
                            L'ensemble du contenu de ce site (textes, images, visuels, structure) est la propriété exclusive d'AD Boots ou de ses partenaires.
                            Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
                        </p>
                    </SECTION>

                    <SECTION title="Données personnelles">
                        <p>
                            Les informations collectées lors d'une commande (nom, adresse, email) sont utilisées uniquement pour le traitement de celle-ci.
                            Elles ne sont jamais revendues à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
                            de vos données en contactant : contact@ad-boots.com
                        </p>
                        <p style={{ marginTop: 12 }}>
                            Pour plus de détails, consultez notre <a href="/confidentialite" style={{ color: "var(--accent)" }}>politique de confidentialité</a>.
                        </p>
                    </SECTION>

                    <SECTION title="Cookies">
                        <p>
                            Ce site utilise des cookies à des fins de mesure d'audience (analytics). En continuant votre navigation, vous acceptez leur utilisation.
                            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                        </p>
                    </SECTION>

                    <SECTION title="Droit applicable">
                        <p>
                            Le présent site et ses mentions légales sont soumis au droit français.
                            Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux français.
                        </p>
                    </SECTION>

                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 40 }}>Dernière mise à jour : mai 2026</p>
                </div>
            </section>
        </>
    );
}
