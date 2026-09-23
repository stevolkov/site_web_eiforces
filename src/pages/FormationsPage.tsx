import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GraduationCap, Target, BookOpen, Clock, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTitle from "../components/layout/PageTitle";
import { FORMATIONS } from "../content/site";
import { useFormationsStore } from "../content/store";

type Tab = "superieur" | "fondamental" | "thematique";

function hashToTab(hash: string): Tab {
  if (hash === "#fondamental") return "fondamental";
  if (hash === "#thematique") return "thematique";
  return "superieur";
}

export default function FormationsPage() {
  const location = useLocation();
  const [tab, setTab] = useState<Tab>(() => hashToTab(location.hash));
  const { formations } = useFormationsStore();

  // Synchronise l'onglet actif avec le hash de l'URL et scrolle vers la section.
  // On écoute location.key (unique à chaque clic React Router) plutôt que location.hash
  // afin de réagir même quand on reclique le même lien sans changer l'URL.
  useEffect(() => {
    if (!location.hash) return;
    const newTab = hashToTab(location.hash);
    setTab(newTab);
    // Scroll vers la section cible après un court délai (laisse le DOM se mettre à jour)
    setTimeout(() => {
      const targetId = location.hash === "#fiches" ? "fiches" : "tabs-anchor";
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 150); // Le temps de laisser le composant "Tab" s'animer (Framer Motion)
  }, [location.key]); // location.key change à chaque navigation, même vers la même URL

  return (
    <>
      <PageTitle
        eyebrow="Catalogue Officiel & Cursus"
        title="Formations & Enseignement Supérieur"
        subtitle="Du commandement d'unité tactique à la conduite stratégique des crises, préparez votre haut commandement au sein des forces de sécurité."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-12">
          {/* Editorial Tab Bar */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 pb-6 mb-8 sm:mb-12 border-b border-ink-200 scroll-mt-28" id="tabs-anchor">
            <TabButton active={tab === "superieur"} onClick={() => setTab("superieur")} icon={GraduationCap}>
              Enseignement Supérieur (3 Diplômes)
            </TabButton>
            <TabButton active={tab === "fondamental"} onClick={() => setTab("fondamental")} icon={Target}>
              Enseignement Fondamental (Pôles)
            </TabButton>
            <TabButton active={tab === "thematique"} onClick={() => setTab("thematique")} icon={BookOpen}>
              Enseignement Thématique
            </TabButton>
          </div>

          <AnimatePresence mode="wait">
            {tab === "superieur" && (
              <motion.div key="sup" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
                <div className="divide-y divide-ink-200 border-t border-b border-ink-200">
                  {formations.map((f) => (
                    <div key={f.code} className="py-12 grid lg:grid-cols-12 gap-8 items-start group" id={f.code.toLowerCase()}>
                      {/* Left Column: Code & Level */}
                      <div className="lg:col-span-3">
                        <span className="font-mono text-3xl font-bold text-primary-800 block">
                          {f.code}
                        </span>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase bg-ink-900 text-white rounded-sm">
                            {f.level}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-ink-500">
                            <Clock className="w-3 h-3" />
                            {f.duration}
                          </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-ink-100">
                          <span className="text-xs text-ink-400 font-mono uppercase block">Frais d'inscription</span>
                          <span className="font-display font-bold text-lg text-ink-900">{f.tuition}</span>
                        </div>
                      </div>

                      {/* Middle Column: Details & Outcomes */}
                      <div className="lg:col-span-6">
                        <h3 className="font-display text-2xl font-bold text-ink-900 group-hover:text-primary-800 transition-colors">
                          {f.title}
                        </h3>
                        <p className="text-base text-ink-600 mt-3 leading-relaxed">
                          {f.desc}
                        </p>

                        <div className="mt-6 space-y-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold block mb-2">
                            Compétences clés & Sanction
                          </span>
                          {f.outcomes.map((o: string, i: number) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-ink-700">
                              <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                              <span>{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: CTA */}
                      <div className="lg:col-span-3 flex flex-col justify-between items-end h-full">
                        <a
                          href="#fiches"
                          className="btn bg-primary-900 hover:bg-primary-800 text-white w-full sm:w-auto px-6 py-3 text-sm font-semibold text-center"
                        >
                          Dossier de Candidature
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {tab === "fondamental" && (
              <motion.div key="fond" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} id="fondamental">
                <div className="grid lg:grid-cols-2 gap-12">
                  <PoleSection
                    title="Pôle Ordre Public"
                    subtitle="Maintien de l'ordre, protection des institutions & gestion des crises"
                    desc="Formation des formateurs, pré-déploiement, commandement opérationnel, neutralisation des explosifs et protection des hautes personnalités."
                    items={FORMATIONS.fondamental.ordrePublic}
                  />
                  <PoleSection
                    title="Pôle Police Judiciaire"
                    subtitle="Investigations spécialisées, criminalistique & police scientifique"
                    desc="Investigation approfondie, police technique et scientifique, prévôté — pour renforcer l'efficacité de la chaîne pénale."
                    items={FORMATIONS.fondamental.judiciaire}
                  />
                </div>
              </motion.div>
            )}

            {tab === "thematique" && (
              <motion.div key="the" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} id="thematique">
                <div className="divide-y divide-ink-200 border-t border-b border-ink-200">
                  {FORMATIONS.thematique.map((t, i) => (
                    <div key={t} className="py-5 flex items-center justify-between gap-6 group hover:bg-ink-50 px-4 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-base font-bold text-ink-400">0{i + 1}</span>
                        <h3 className="font-display font-bold text-lg text-ink-900 group-hover:text-primary-800 transition-colors">
                          {t}
                        </h3>
                      </div>
                      <span className="text-xs font-mono uppercase text-ink-400 hidden sm:inline">
                        Stage Spécialisé · Niveau Intermédiaire & Stratégique
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Editorial Downloads Section */}
          <div id="fiches" className="mt-20 pt-12 border-t border-ink-200 scroll-mt-28">
            <div className="mb-8">
              <span className="text-xs font-mono text-primary-700 uppercase tracking-widest font-bold">
                DOCUMENTATION COMPLÉMENTAIRE
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-900 mt-1">
                Fiches pédagogiques & Mémentos à télécharger
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <DownloadRow
                title="Fiche d'Information — Stage BESS 2026"
                desc="Modalités complètes d'admission et prérequis pour le Brevet d'Études Supérieures de Sécurité."
                tag="PDF (1.4 Mo)"
              />
              <DownloadRow
                title="Mémento de Préparation — Ordre Public"
                desc="Guide méthodologique officiel de préparation aux tests d'entrée des pôles spécialisés."
                tag="PDF (2.1 Mo)"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TabButton({ active, onClick, icon: Icon, children }: { active: boolean; onClick: () => void; icon: any; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 pb-2 sm:pb-3 text-xs sm:text-sm font-semibold transition-all relative ${
        active
          ? "text-primary-800 font-bold border-b-2 border-primary-800"
          : "text-ink-500 hover:text-ink-900"
      }`}
    >
      <Icon className="w-4 h-4 opacity-70" />
      {children}
    </button>
  );
}

function PoleSection({ title, subtitle, desc, items }: { title: string; subtitle: string; desc: string; items: { code: string; title: string }[] }) {
  return (
    <div>
      <div className="pb-4 mb-6 border-b border-ink-900/10">
        <span className="text-xs font-mono text-primary-700 font-bold uppercase">{title}</span>
        <h3 className="font-display text-2xl font-bold text-ink-900 mt-1">{subtitle}</h3>
        <p className="text-sm text-ink-600 mt-2 leading-relaxed">{desc}</p>
      </div>

      <div className="divide-y divide-ink-200">
        {items.map((i) => (
          <div key={i.code} className="py-3.5 flex items-center justify-between gap-4 group">
            <span className="font-mono text-sm font-bold text-primary-700 w-16 shrink-0">{i.code}</span>
            <span className="text-sm text-ink-800 font-medium group-hover:text-primary-800 transition-colors flex-1">{i.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-ink-400 group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadRow({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <div className="p-6 border border-ink-200 bg-ink-50/50 flex items-start gap-4 hover:border-primary-700 transition-colors">
      <div className="p-3 bg-primary-50 text-primary-700 shrink-0">
        <Download className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display font-bold text-base text-ink-900">{title}</h4>
          <span className="text-[10px] font-mono text-ink-500 uppercase font-semibold">{tag}</span>
        </div>
        <p className="text-xs text-ink-600 mt-1 leading-relaxed">{desc}</p>
        <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:underline uppercase">
          Télécharger le document PDF →
        </a>
      </div>
    </div>
  );
}

