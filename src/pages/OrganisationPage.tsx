import { Crown, Building2, Users as UsersIcon, MapPin, Phone, Mail, BarChart2, Globe2, Landmark, Award } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import OrgChart from "../components/common/OrgChart";
import { useTextsStore, useMissionsStore } from "../content/store";
import { Link } from "react-router-dom";

export default function OrganisationPage() {
  const { texts } = useTextsStore();
  const { missions } = useMissionsStore();

  return (
    <>
      <PageTitle
        eyebrow="Présentation"
        title={texts.org_title || "Organisation"}
        subtitle={texts.org_subtitle || "La gouvernance de l'EIFORCES reflète son statut d'Établissement Public Administratif..."}
      />

      {/* Intro + Sidebar + Organigramme regroupés dans la même section */}
      <section className="sec-pad">
        {/* On réduit le gap et on donne plus de colonnes à gauche (9) et moins à droite (3) */}
        <div className="container-12 grid lg:grid-cols-12 gap-8 xl:gap-10">
          {/* Colonne principale plus large (col-span-9) */}
          <div className="lg:col-span-9 min-w-0">
            <h2 className="text-2xl font-display font-bold text-ink-900 mb-4">Le statut de l'EIFORCES</h2>
            <p className="text-ink-600 leading-relaxed whitespace-pre-line">
              {texts.org_intro}
            </p>

            {/* Organigramme sous le texte, avec scroll horizontal pour ne plus déborder sur le sidebar */}
            <div className="mt-14 pt-8 border-t border-ink-200">
              <h2 className="text-2xl font-display font-bold text-ink-900 mb-6">Organigramme</h2>
              <div className="overflow-x-auto pb-4">
                <OrgChart />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-3 space-y-4">
            <div className="card p-5">
              <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary-700" />
                Direction
              </h3>
              <div className="mt-4 space-y-3">
                <Row name={texts.dg_full_name} role="Directeur Général" />
                <Row name={texts.dga_name} role={texts.dga_role} />
                <Row name={texts.studies_name} role={texts.studies_role} />
              </div>
            </div>

            <div className="card p-5 bg-primary-50">
              <h3 className="font-display font-bold text-primary-900 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Coordonnées
              </h3>
              <ul className="mt-3 text-sm text-ink-700 space-y-2">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> {texts.contact_address}</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> {texts.contact_campus}</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> <a href={`tel:${texts.contact_phone}`} className="text-primary-700">{texts.contact_phone}</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> <a href={`mailto:${texts.contact_email}`} className="text-primary-700 break-all">{texts.contact_email}</a></li>
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                <UsersIcon className="w-5 h-5" />
                Présentation rapide
              </h3>
              <ul className="mt-3 text-sm space-y-2 text-ink-600">
                <li className="flex items-center gap-2"><BarChart2 className="w-4 h-4 text-primary-700 shrink-0" /> 8 189+ stagiaires formés</li>
                <li className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary-700 shrink-0" /> 26 pays partenaires</li>
                <li className="flex items-center gap-2"><Landmark className="w-4 h-4 text-primary-700 shrink-0" /> Centre d'Excellence CEEAC + UA</li>
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary-700 shrink-0" /> Processus de certification ONU</li>
              </ul>
              <Link to="/organisation/genese" className="btn-ghost mt-4 w-full justify-center">
                Découvrir la genèse
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <MissionsStrip missions={missions} />
    </>
  );
}

function Row({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded bg-ink-50 p-3 ring-1 ring-ink-100">
      <div className="font-semibold text-ink-900 text-sm">{name}</div>
      <div className="text-xs text-primary-700">{role}</div>
    </div>
  );
}

function MissionsStrip({ missions }: { missions: any }) {
  return (
    <section className="bg-ink-50 sec-pad">
      <div className="container-12 text-center max-w-2xl mx-auto">
        <span className="pill-accent">Notre triple objectif</span>
        <h2 className="heading mt-3">Stabilité régionale · Gouvernance · Standards communs</h2>
        <ul className="mt-8 text-left grid md:grid-cols-2 gap-3 text-sm text-ink-700">
          {missions?.tasks?.map((t: string, i: number) => (
            <li key={i} className="flex items-start gap-2 rounded bg-white p-4 ring-1 ring-ink-100">
              <span className="text-primary-700 font-bold">#{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
