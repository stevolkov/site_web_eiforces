import PageTitle from "../components/layout/PageTitle";
import { SITE } from "../content/site";

export default function MentionsLegalesPage() {
  return (
    <>
      <PageTitle
        eyebrow="Informations Légales"
        title="Mentions Légales"
        subtitle="Cadre juridique, responsabilités et conditions d'utilisation de la plateforme EIFORCES."
      />

      <section className="sec-pad">
        <div className="container-12 max-w-4xl mx-auto space-y-8 text-ink-800 leading-relaxed">
          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              1. Éditeur du Site
            </h2>
            <p>
              Le présent site internet est édité par l'<strong>École Internationale des Forces de Sécurité (EIFORCES)</strong>, Établissement Public Administratif à vocation régionale et internationale.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li><strong>Création :</strong> {SITE.decree}</li>
              <li><strong>Siège Social :</strong> {SITE.contact.address}</li>
              <li><strong>Campus d'Instruction :</strong> {SITE.contact.campus}</li>
              <li><strong>Téléphone :</strong> {SITE.contact.phone}</li>
              <li><strong>E-mail :</strong> {SITE.contact.email}</li>
            </ul>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              2. Propriété Intellectuelle
            </h2>
            <p>
              L'ensemble des contenus (textes, logos, images, documents téléchargeables, visuels, et éléments multimédias) présents sur le site de l'EIFORCES est protégé par les lois internationales et nationales relatives à la propriété intellectuelle et aux droits d'auteur.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable du Directeur Général de l'EIFORCES.
            </p>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              3. Protection des Données Personnelles
            </h2>
            <p>
              L'EIFORCES s'engage à ce que la collecte et le traitement de vos données personnelles effectués à partir du site soient conformes à la réglementation sur la protection des données en vigueur.
            </p>
            <p>
              Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles gérés par l'EIFORCES, vous pouvez contacter notre service via la page de contact ou par e-mail direct.
            </p>
          </div>

          <div className="card p-8 space-y-4">
            <h2 className="font-display font-bold text-xl text-ink-900 border-b border-ink-100 pb-3">
              4. Limites de Responsabilité
            </h2>
            <p>
              L'EIFORCES s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'école ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
