import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Globe2 } from "lucide-react";
import CountUp from "../common/CountUp";
import { STATS, DIRECTION, RECHERCHE } from "../../content/site";

export default function GlobalReach() {
  const trained = STATS.find((s) => s.icon === "users") ?? STATS[0];
  const countries = STATS.find((s) => s.icon === "globe") ?? STATS[1];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-ink-100">
      <div className="container-12">
        {/* Section Header */}
        <div className="pb-10 mb-12 border-b border-blue-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              RAYONNEMENT CONTINENTAL & DIRECTION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-black mt-2 tracking-tight">
              Une empreinte internationale affirmée
            </h2>
          </div>
          <div className="text-sm font-mono text-black/60 uppercase">
            Partenariats Stratégiques · CEEAC · UA · ONU
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Command & Leadership */}
          <div className="lg:col-span-5 lg:border-r lg:border-blue-100 lg:pr-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-28 h-36 shrink-0 bg-white border border-blue-100 shadow-md overflow-hidden rounded-md">
                <img
                  src="/dg_gb_eiforces.JPG"
                  alt={DIRECTION.dg.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block">
                  DIRECTION GÉNÉRALE
                </span>
                <h3 className="font-display text-xl font-bold text-black mt-1">
                  {DIRECTION.dg.name}
                </h3>
                <p className="text-xs text-blue-800 font-semibold mt-1">
                  {DIRECTION.dg.role}
                </p>
                <p className="text-xs text-black/70 mt-3 leading-relaxed">
                  "L'EIFORCES s'attache à promouvoir une doctrine africaine commune des opérations de paix."
                </p>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="mt-10 pt-8 border-t border-blue-100 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-black">
                  <CountUp value={trained.value} suffix={trained.suffix} />
                </div>
                <div className="text-xs font-mono text-black/60 uppercase tracking-wider mt-1">
                  Stagiaires Diplômés
                </div>
              </div>

              <div>
                <div className="font-display text-4xl font-bold text-blue-600">
                  <CountUp value={countries.value} suffix={countries.suffix} />
                </div>
                <div className="text-xs font-mono text-black/60 uppercase tracking-wider mt-1">
                  États Membres & Partenaires
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Research & Publications Showcase */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase font-bold tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Centre de Recherche et de Documentation (CRD)</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-black">
              Travaux académiques & Publications stratégiques
            </h3>

            <div className="mt-6 divide-y divide-blue-100 border-t border-b border-blue-100">
              {RECHERCHE.publications.slice(0, 3).map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-4 flex items-center justify-between gap-4 group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-600">
                      {p.type}
                    </span>
                    <h4 className="font-display font-bold text-base text-black group-hover:text-blue-700 transition-colors mt-0.5">
                      {p.title}
                    </h4>
                  </div>

                  <Link
                    to="/publications"
                    className="shrink-0 text-xs font-bold text-black/60 group-hover:text-blue-700 uppercase tracking-wider underline"
                  >
                    Consulter →
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center text-xs font-mono text-black/70">
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-blue-600" />
                Coopération multilatérale de défense & sécurité
              </span>
              <Link to="/recherche" className="font-bold text-blue-700 hover:underline uppercase">
                Accéder au portail du CRD →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

