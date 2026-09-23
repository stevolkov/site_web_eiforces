import PageTitle from "../components/layout/PageTitle";
import { SITE } from "../content/site";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageTitle
        eyebrow="Vie Privée & Données"
        title="Politique de Confidentialité"
        subtitle="Engagements de l'EIFORCES concernant la protection, la collecte et l'utilisation de vos données."
      />

      <section className="sec-pad">
        <div className="container-12 max-w-4xl mx-auto space-y-8 text-ink-800 leading-relaxed">
          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              1. Collecte des Données
            </h2>
            <p>
              Dans le cadre de l'utilisation des services de l'EIFORCES (formulaires de contact, demandes d'information, inscriptions aux concours ou téléchargement de publications), nous pouvons être amenés à collecter les données suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li>Identité (nom, prénom, nationalité, grade/titre)</li>
              <li>Coordonnées (adresse e-mail, numéro de téléphone)</li>
              <li>Informations professionnelles ou institutionnelles</li>
            </ul>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              2. Utilisation des Données
            </h2>
            <p>
              Les informations recueillies font l'objet d'un traitement informatique destiné exclusivement aux activités académiques, administratives et d'information de l'EIFORCES :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li>Traitement des demandes via le formulaire de contact</li>
              <li>Gestion des candidatures et accès aux concours/formations</li>
              <li>Envoi des communiqués officiels et de la lettre d'information (si abonné)</li>
            </ul>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              3. Conservation et Sécurité
            </h2>
            <p>
              L'EIFORCES met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité et la confidentialité de vos données personnelles et prévenir toute altération, perte ou accès non autorisé. Vos données sont conservées pour la durée stricte nécessaire aux finalités du traitement.
            </p>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              4. Vos Droits
            </h2>
            <p>
              Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant les données personnelles vous concernant. Pour exercer ces droits, vous pouvez nous adresser directement un courrier à l'adresse du siège social de l'EIFORCES ({SITE.contact.address}) ou nous contacter par e-mail à <strong>{SITE.contact.email}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
