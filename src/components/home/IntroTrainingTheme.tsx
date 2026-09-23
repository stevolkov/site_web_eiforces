import { BookOpen, Award } from "lucide-react";
import { SITE, FORMATIONS } from "../../content/site";
import { Link } from "react-router-dom";

export default function IntroTrainingTheme() {
  return (
    <section className="py-20 lg:py-28 bg-white text-black border-b border-blue-100 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative container-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image + Quote overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-blue-100 bg-white p-2 rounded-md shadow-xl">
              <img
                src="/PHOTOS STAGES/BESS 12 ET DEMFS 15/BESS 12/DSC_0880.JPG"
                alt="Stagiaires BESS 12 en formation EIFORCES"
                className="w-full aspect-[4/3] object-cover rounded shadow-sm"
              />
            </div>

            {/* Decree Box */}
            <div className="mt-4 p-5 bg-blue-50 border border-blue-100 text-xs font-mono rounded-md">
              <span className="text-blue-600 font-bold uppercase block mb-1">FONDEMENT JURIDIQUE</span>
              <p className="text-black/80">{SITE.decree}</p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Thematics */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              INSTITUTION & MISSION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 tracking-tight text-black leading-tight">
              Un centre d'excellence au service de la paix internationale.
            </h2>

            <div className="mt-6 space-y-4 text-black/80 text-base leading-relaxed">
              <p>
                {SITE.description}
              </p>
              <p>
                Établissement Public Administratif doté de la personnalité juridique et de l'autonomie financière, l'EIFORCES prépare les cadres à intervenir dans des environnements de crise à haute complexité tactique et stratégique.
              </p>
            </div>

            {/* Thematic Tags Grid */}
            <div className="mt-8 pt-6 border-t border-blue-100">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-4 font-bold">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Domaines prioritaires d'enseignement</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {FORMATIONS.thematique.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-blue-200 text-xs font-medium text-black/90 hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <Award className="w-3 h-3 text-blue-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/organisation"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider hover:text-blue-800 transition-colors"
              >
                <span>Découvrir l'histoire & l'organisation de l'École</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

