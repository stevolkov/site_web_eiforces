import { CheckCircle2, Target, ListChecks, Shield, BookOpen, GraduationCap, Users, Compass } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useTextsStore, useMissionsStore } from "../content/store";

export default function MissionsPage() {
  const { texts } = useTextsStore();
  const { missions } = useMissionsStore();

  return (
    <>
      <PageTitle
        eyebrow="Organisation"
        title={texts.missions_page_title || "Missions et objectifs"}
        subtitle={texts.missions_page_subtitle || "Former, entraîner, recycler, perfectionner, rechercher : l'EIFORCES, une école à cinq missions."}
      />

      <section className="sec-pad">
        <div className="container-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-ink-900">Cinq missions principales</h2>
            <ul className="mt-6 space-y-3">
              {missions?.tasks?.map((t: string, i: number) => (
                <li key={i} className="flex gap-3 card p-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-700 shrink-0" />
                  <span className="text-ink-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded bg-primary-900 text-white p-8">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-primary-200" />
                <h3 className="font-display font-bold text-xl">Triple objectif</h3>
              </div>
              <ul className="space-y-3">
                {missions?.pillars?.map((p: any, i: number) => (
                  <li key={p.title} className="rounded bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="font-semibold">{i + 1}. {p.title}</div>
                    <div className="text-sm text-white/80 mt-1">{p.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 card p-6">
              <div className="flex items-center gap-2 mb-3 text-ink-700">
                <ListChecks className="w-5 h-5 text-primary-700" />
                <h3 className="font-display font-bold text-ink-900">Formation — objectifs concrets</h3>
              </div>
              <ul className="space-y-2 text-sm text-ink-600">
                <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Constituer et maintenir un réservoir d'unités polyvalentes et interopérables</li>
                <li className="flex items-start gap-2"><BookOpen className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Enseigner une méthode unique de commandement et parfaire les aptitudes opérationnelles</li>
                <li className="flex items-start gap-2"><GraduationCap className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Former des formateurs en ordre public (doctrine d'emploi rénovée)</li>
                <li className="flex items-start gap-2"><Users className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Former des experts en ordre public aptes à diriger une équipe pédagogique</li>
                <li className="flex items-start gap-2"><Compass className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Participer à la conception de la doctrine de l'ordre public</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" /> Certifier les unités de sécurité intérieure à l'échelle continentale</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
