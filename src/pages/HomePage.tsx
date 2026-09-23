import Hero from "../components/home/Hero";
import DirectorIntro from "../components/home/DirectorIntro";
import Pillars from "../components/home/Pillars";
import Partners from "../components/home/Partners";
import NewsSection from "../components/home/NewsSection";
import Testimonial from "../components/home/Testimonial";
import GlobalReach from "../components/home/GlobalReach";
import NewsTicker from "../components/home/NewsTicker";
import PhotoAndCalendar from "../components/home/PhotoAndCalendar";
import QuickLinks from "../components/home/QuickLinks";
import IntroTrainingTheme from "../components/home/IntroTrainingTheme";
import VideosAnnouncements from "../components/home/VideosAnnouncements";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Microscope } from "lucide-react";
import { usePublicationsStore, useFormationsStore, useTextsStore } from "../content/store";
import { motion } from "framer-motion";

export default function HomePage() {
  const { publications } = usePublicationsStore();
  const { formations } = useFormationsStore();
  const { texts } = useTextsStore();

  return (
    <>
      <NewsTicker />
      <Hero />
      <DirectorIntro />
      <PhotoAndCalendar />
      <QuickLinks />
      <Pillars />
      <IntroTrainingTheme />

      {/* Quick programs */}
      <section className="bg-white py-20 lg:py-28 border-b border-blue-100">
        <div className="container-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left intro text & action */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
                ENSEIGNEMENT SUPÉRIEUR
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-black mt-2 tracking-tight">
                {texts.missions_section_title}
              </h2>
              <p className="text-base text-black/70 mt-4 leading-relaxed">
                {texts.missions_section_desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-blue-100">
                <Link to="/formations" className="btn rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  Consulter le catalogue complet <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right editorial list */}
            <div className="lg:col-span-8 divide-y divide-blue-50 border-t border-b border-blue-50">
              {formations.map((f, i) => (
                <motion.div
                  key={f.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-8 grid sm:grid-cols-12 gap-6 items-start group hover:bg-blue-50/60 px-4 -mx-4 transition-colors rounded-md"
                >
                  <div className="sm:col-span-3">
                    <span className="font-mono text-2xl font-bold text-blue-700 block">
                      {f.code}
                    </span>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider block mt-1">
                      {f.duration}
                    </span>
                    <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase bg-blue-100 text-blue-600 rounded-md">
                      {f.level}
                    </span>
                  </div>

                  <div className="sm:col-span-9">
                    <h3 className="font-display font-bold text-xl text-black group-hover:text-blue-700 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                    <div className="mt-4">
                      <Link to="/formations" className="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-wider hover:underline">
                        Détails du cursus & Prérequis →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <GlobalReach />
      <NewsSection />

      {/* Recherche — Editorial */}
      <section className="py-20 lg:py-28 bg-white text-black border-b border-blue-100">
        <div className="container-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: CRD intro */}
            <div className="lg:col-span-5">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold mb-3">
                CENTRE DE RECHERCHE & DOCUMENTATION
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {texts.crd_section_title}
              </h2>
              <p className="text-black/70 mt-5 leading-relaxed">
                {texts.crd_section_desc || texts.crd_desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/recherche"
                  className="btn rounded-md border border-blue-200 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  <Microscope className="w-4 h-4" /> Accéder au portail CRD
                </Link>
                <Link
                  to="/publications"
                  className="btn rounded-md bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-sm"
                >
                  Toutes les publications →
                </Link>
              </div>
            </div>

            {/* Right: Publication list (editorial ruled style) */}
            <div className="lg:col-span-7 divide-y divide-blue-50 border-t border-b border-blue-50">
              {publications.slice(0, 4).map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="py-5 flex items-start justify-between gap-6 group hover:bg-blue-50/50 px-2 -mx-2 rounded-md transition-colors"
                >
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1 tracking-wider">
                      {p.type}
                    </div>
                    <h3 className="font-display font-bold text-base text-black group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-black/60 mt-1.5 leading-relaxed">{p.desc}</p>
                  </div>
                  <Link
                    to="/publications"
                    className="shrink-0 text-xs font-bold text-blue-400 group-hover:text-blue-600 uppercase tracking-wider hover:underline transition"
                  >
                    Consulter
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideosAnnouncements />
      <Testimonial />
      <Partners />

      {/* CTA — Full-width Editorial */}
      <section className="bg-blue-600 py-16 lg:py-20">
        <div className="container-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-100 font-bold mb-2">
                INTÉGRER L'EIFORCES
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Rejoignez la prochaine promotion.{" "}
                <span className="text-blue-100">Les concours sont ouverts.</span>
              </h2>
              <p className="text-blue-50 mt-3 text-base leading-relaxed max-w-2xl">
                Consultez les annonces en cours, préparez votre dossier de candidature et rejoignez les futures promotions du campus d'Awaé.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:justify-end">
              <Link
                to="/concours"
                className="btn rounded-md bg-white hover:bg-blue-50 text-blue-600 px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" /> Voir les concours ouverts
              </Link>
              <Link
                to="/contact"
                className="btn rounded-md border border-blue-300 hover:border-white text-white hover:bg-blue-500 px-6 py-3.5 text-sm"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
