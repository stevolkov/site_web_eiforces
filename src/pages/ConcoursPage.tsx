import { Award, Calendar, Clock, FileText, GraduationCap, ExternalLink } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useConcoursStore } from "../content/store";

export default function ConcoursPage() {
  const { concours } = useConcoursStore();
  return (
    <>
      <PageTitle
        eyebrow="Recrutement"
        title="Concours & recrutements"
        subtitle="Préparez votre candidature aux cycles BESS, DEMFS et SCUS. Tous les communiqués officiels, dates et modalités."
      />

      <section className="sec-pad">
        <div className="container-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {concours.map((c, i) => (
                  <div key={i} className="card p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-primary-50 text-primary-700 grid place-items-center shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display font-bold text-lg text-ink-900">{c.title}</h3>
                          <span className={
                            c.tag === "À venir" ? "pill bg-primary-50 text-primary-700"
                            : c.tag === "Continu" ? "pill-green"
                            : "pill bg-ink-100 text-ink-500"
                          }>{c.tag}</span>
                        </div>
                        <p className="text-xs text-ink-500 mt-1 flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {c.deadline}
                        </p>
                      </div>
                    </div>
                    <a href={c.url} className="btn-primary text-sm shrink-0">
                      <FileText className="w-4 h-4" /> Communiqué
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-10 card p-6 bg-ink-50">
                <h3 className="font-display font-bold text-lg text-ink-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-700" />
                  Déroulement type d'un concours
                </h3>
                <ol className="mt-4 space-y-3">
                  {[
                    "Pré-sélection par l'administration d'origine (Gendarmerie / Sûreté Nationale / douaniers / gardes).",
                    "Épreuves écrites : culture générale, droit, technique policière.",
                    "Épreuves orales pour le BESS.",
                    "Stage de pré-déploiement pour les candidats étrangers.",
                    "Publication des résultats par communiqué du DG.",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-white text-primary-700 grid place-items-center font-bold ring-1 ring-ink-200">{i + 1}</span>
                      <span className="text-ink-700">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-4">
              <div className="card p-5 bg-primary-50">
                <h3 className="font-display font-bold text-ink-900">Contact candidatures</h3>
                <p className="text-sm text-ink-600 mt-2">
                  Les candidats étrangers sont invités à candidater auprès des services centraux de la
                  Gendarmerie ou de la Police de leur pays, qui transmettent à l'EIFORCES.
                </p>
                <a href="mailto:eiforcescameroon@gmail.com" className="btn-primary w-full justify-center mt-4 text-sm">
                  eiforcescameroon@gmail.com
                </a>
                <a href="mailto:contact@eiforces.gov.cm" className="block text-center text-xs text-ink-500 mt-2 hover:text-primary-700">
                  contact@eiforces.gov.cm
                </a>
              </div>

              <div className="card p-5">
                <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-700" />
                  Calendrier indicatif
                </h3>
                <ul className="text-sm text-ink-600 mt-3 space-y-2">
                  <li>Mars : publication des communiqués BESS / DEMFS</li>
                  <li>Avril–Mai : épreuves écrites</li>
                  <li>Juin : résultats + rentrée académique</li>
                  <li>Toute l'année : SCUS (sessions semestrielles)</li>
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="font-display font-bold text-ink-900">Voir aussi</h3>
                <ul className="text-sm space-y-2 mt-3">
                  <li><a href="/actualites" className="text-primary-700 hover:text-primary-900 inline-flex items-center gap-1">Toutes les actualités <ExternalLink className="w-3 h-3" /></a></li>
                  <li><a href="/publications" className="text-primary-700 hover:text-primary-900 inline-flex items-center gap-1">Communiqués officiels <ExternalLink className="w-3 h-3" /></a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
