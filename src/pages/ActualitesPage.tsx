import { Calendar, ArrowRight, Filter } from "lucide-react";
import { motion } from "framer-motion";
import PageTitle from "../components/layout/PageTitle";
import { useNewsStore } from "../content/store";
import { useState, useMemo } from "react";
import { useHashScroll } from "../hooks/useHashScroll";

export default function ActualitesPage() {
  useHashScroll();
  const { news } = useNewsStore();
  const categories = Array.from(new Set(news.map((n) => n.category)));
  const [filter, setFilter] = useState<string | "all">("all");
  const filtered = useMemo(
    () => (filter === "all" ? news : news.filter((n) => n.category === filter)),
    [filter, news],
  );

  return (
    <>
      <PageTitle
        eyebrow="Actualités"
        title="L'EIFORCES en mouvement"
        subtitle="Toutes les dernières nouvelles, programmes, cérémonies et partenariats de l'École Internationale des Forces de Sécurité."
      />

      <section className="sec-pad">
        <div className="container-12">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10 scroll-mt-28" id="annonces">
            <span className="text-xs text-ink-500 flex items-center gap-1 mr-2">
              <Filter className="w-4 h-4" /> Filtrer :
            </span>
            <Chip on={filter === "all"} onClick={() => setFilter("all")}>Toutes</Chip>
            {categories.map((c) => (
              <Chip key={c} on={filter === c} onClick={() => setFilter(c)}>{c}</Chip>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card card-hover overflow-hidden flex flex-col"
              >
                <div className="h-44 relative bg-primary-800 overflow-hidden">
                  <span className="absolute top-3 left-3 pill bg-white/95 text-primary-700">{n.category}</span>
                  <div className="absolute bottom-3 right-3 text-white/85 text-xs flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(n.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-lg text-ink-900 leading-snug">{n.title}</h3>
                  <p className="text-sm text-ink-600 mt-2 flex-1">{n.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-900">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Opérations grand public */}
          <div className="mt-16 rounded bg-primary-900 text-white p-10 scroll-mt-28" id="op-public">
            <h2 className="font-display text-3xl font-bold mb-3">Opérations grand public</h2>
            <p className="text-white/85 max-w-3xl">
              L'EIFORCES s'ouvre aux citoyens : journées portes ouvertes, actions civiques, expositions,
              stages grand public. Une école tournée vers la société camerounaise.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {["Actions civiques & citoyennes", "Journées Portes ouvertes", "Expositions", "Stages"].map((t) => (
                <div key={t} className="rounded bg-white/10 ring-1 ring-white/20 p-4">
                  <div className="font-semibold text-white">{t}</div>
                  <p className="text-xs text-white/80 mt-1">Programmes ouverts au public</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-sm font-medium transition ${
        on
          ? "bg-primary-700 text-white"
          : "bg-ink-100 text-ink-700 hover:bg-ink-200"
      }`}
    >
      {children}
    </button>
  );
}
