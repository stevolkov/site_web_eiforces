import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ShieldCheck, ExternalLink } from "lucide-react";
import { SITE } from "../../content/site";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 border-t border-gray-200">

      {/* Full-width structured editorial footer body */}
      <div className="container-12 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Identity Column */}
          <div className="lg:col-span-4 lg:pr-12 lg:border-r lg:border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 p-1 shrink-0 rounded-md shadow-sm">
                <img src="/logo.jpg" alt="EIFORCES" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-gray-900 text-lg tracking-tight">EIFORCES</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {SITE.fullName}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Centre d'excellence continental pour la formation des forces de sécurité aux opérations de soutien à la paix et à la sécurité intérieure, conformément aux standards ONU et UA.
            </p>

            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-t border-gray-200 pt-4 leading-relaxed">
              {SITE.decree} · Yaoundé, Cameroun<br />
              Établissement Public Administratif
            </div>

            {/* Newsletter line */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-3 font-semibold">
                Recevoir les communiqués & publications
              </div>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="votre@institution.org"
                  className="flex-1 min-w-0 bg-white border border-gray-200 rounded-md text-gray-900 text-sm placeholder:text-gray-400 px-3 py-2.5 focus:outline-none focus:border-gray-400 transition shadow-sm"
                />
                <button className="shrink-0 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2.5 flex items-center gap-1.5 transition rounded-md shadow-sm">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Block: Présentation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-900 mb-5">
              Présentation
            </h4>
            <FooterLinks items={[
              ["Organisation", "/organisation"],
              ["Genèse & Évolution", "/organisation/genese"],
              ["Missions & Objectifs", "/organisation/missions"],
              ["Organigramme", "/organisation/organigramme"],
              ["Infrastructures", "/infrastructures"],
            ]} />
          </div>

          {/* Links Block: Activités */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-900 mb-5">
              Formation & Recherche
            </h4>
            <FooterLinks items={[
              ["Formations Supérieures", "/formations"],
              ["Centre de Recherche CRD", "/recherche"],
              ["Publications VIGIE/RASI", "/publications"],
              ["Coopération Bilatérale", "/cooperation"],
              ["Médiathèque", "/mediatheque"],
            ]} />
          </div>

          {/* Links Block: Accès rapide */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-900 mb-5">
              Accès Rapide
            </h4>
            <FooterLinks items={[
              ["Actualités", "/actualites"],
              ["Concours & Recrutements", "/concours"],
              ["Forum EIFORCES", "/forum"],
              ["Contact & Infos Pratiques", "/contact"],
            ]} />
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-900 mb-5">
              Coordonnées
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{SITE.contact.address}<br />{SITE.contact.campus}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <a href={`tel:${SITE.contact.phone}`} className="hover:text-gray-900 transition font-medium">{SITE.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-gray-900 transition font-medium">{SITE.contact.email}</a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              <SocialLink href={SITE.social.facebook} label="Facebook">FB</SocialLink>
              <SocialLink href="#" label="YouTube">YT</SocialLink>
              <SocialLink href="#" label="LinkedIn">IN</SocialLink>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container-12 py-4 flex flex-wrap gap-5 items-center justify-center lg:justify-start text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            Centre d'Excellence CEEAC
          </span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            Pôle d'Excellence Union Africaine
          </span>
          <span className="text-gray-300 hidden md:block">·</span>
          <span className="flex items-center gap-1.5">
            <ExternalLink className="w-4 h-4 text-gray-400" />
            Certifié ONU Standard ITS
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
          <div>© {new Date().getFullYear()} EIFORCES — Tous droits réservés</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/mentions-legales" className="hover:text-gray-900 transition">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-gray-900 transition">Politique de confidentialité</Link>
          </div>
        </div>
      </div>

      {/* CMR flag strip */}
      <div className="stripe-cmr h-1" />
    </footer>
  );
}

function FooterLinks({ items }: { items: [string, string][] }) {
  return (
    <ul className="space-y-4">
      {items.map(([label, path]) => (
        <li key={path}>
          <Link
            to={path}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 group"
          >
            <span className="w-3 h-0.5 bg-gray-300 group-hover:bg-gray-900 group-hover:w-4 transition-all rounded-full" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-md bg-white border border-gray-200 hover:bg-gray-900 flex items-center justify-center text-gray-600 hover:text-white text-xs font-mono font-bold transition shadow-sm"
    >
      {children}
    </a>
  );
}
