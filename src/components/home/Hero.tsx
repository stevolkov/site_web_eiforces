import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTextsStore } from "../../content/store";
import { ArrowRight, GraduationCap, ShieldCheck, Award, Globe2 } from "lucide-react";
import { STATS } from "../../content/site";

const accreditations = [
  { icon: ShieldCheck, title: "CEEAC", desc: "Centre d'Excellence Régional" },
  { icon: Globe2, title: "Union Africaine", desc: "Pôle d'Excellence FAP" },
  { icon: Award, title: "ONU", desc: "Certification Standard ITS" },
];

export default function Hero() {
  const { texts } = useTextsStore();

  return (
    <section className="relative overflow-hidden bg-white text-black pt-10 pb-20 lg:py-24 border-b border-blue-100">
      {/* Background Subtle Lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-blue-100 hidden lg:block" />

      <div className="relative container-12">
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-blue-100 text-xs font-mono tracking-widest text-blue-600 uppercase">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block w-2 h-2 rounded bg-blue-600 animate-pulse" />
            <span className="text-black font-bold">République du Cameroun</span>
            <span className="text-black/30 hidden sm:inline">•</span>
            <span className="text-black">Siège & Campus d'Awaé</span>
          </div>
          <div className="hidden md:block text-black/60 font-medium">
            Établissement Inter-États d'Enseignement Supérieur
          </div>
        </div>

        {/* Main Grid Hero */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-xs text-blue-800 font-medium mb-6">
              <span className="font-bold">17 ANS D'EXCELLENCE</span>
              <span className="text-blue-300">|</span>
              <span>Fondée en 2008</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black">
              {texts.hero_title || "Sécurité, paix & gouvernance stratégique en Afrique."}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-black/80 leading-relaxed max-w-2xl font-normal">
              {texts.hero_subtitle || "L'École Internationale des Forces de Sécurité (EIFORCES) est le centre de référence continental dédié à la formation supérieure, au perfectionnement et à la recherche dans les domaines du maintien de la paix et de la sécurité publique."}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/formations"
                className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all text-center"
              >
                <GraduationCap className="w-5 h-5 mr-2" /> Découvrir nos formations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/organisation"
                className="btn border rounded-md border-blue-200 hover:border-blue-600 text-blue-600 bg-white hover:bg-blue-50 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-medium transition text-center"
              >
                Organisation & Mandat
              </Link>
            </div>
          </motion.div>

          {/* Right Image Frame & Accreditations Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-md overflow-hidden border border-blue-100 bg-white shadow-xl">
              <img
                src="/images/gouvernance/general_tribune_eiforces.jpg"
                alt="Allocution du Général de Brigade, Directeur Général de l'EIFORCES"
                className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md border-t border-blue-100">
                <p className="text-xs font-mono text-blue-600 uppercase tracking-wider font-bold">Commandement Stratégique</p>
                <p className="text-sm text-black font-medium mt-1">Intervention du Général de Brigade, Directeur Général de l'EIFORCES.</p>
              </div>
            </div>

            {/* Accreditations Cards Strip */}
            <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
              {accreditations.map((acc) => (
                <div key={acc.title} className="p-3 bg-white border border-blue-100 rounded-md text-center shadow-sm">
                  <acc.icon className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-black">{acc.title}</div>
                  <div className="text-[10px] text-black/60 leading-tight mt-0.5">{acc.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Strip Editorial Layout */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-blue-100 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((s, index) => (
            <div key={s.label} className="relative pl-6 border-l border-blue-200">
              <span className="absolute left-0 top-0 text-[10px] font-mono text-blue-600 font-bold">0{index + 1}</span>
              <div className="font-display text-3xl sm:text-4xl font-bold text-black tracking-tight">
                {s.value.toLocaleString("fr-FR")}{s.suffix}
              </div>
              <div className="mt-1 text-xs text-black/70 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

