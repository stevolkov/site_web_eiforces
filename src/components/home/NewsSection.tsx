import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useNewsStore } from "../../content/store";

export default function NewsSection() {
  const { news } = useNewsStore();
  
  if (!news || news.length === 0) return null;

  const featured = news[0];
  const listItems = news.slice(1, 5);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-blue-100">
      <div className="container-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-blue-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase font-bold tracking-widest">
              <Tag className="w-3.5 h-3.5" />
              <span>Dépêches & Communiqués Officiels</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-black mt-2 tracking-tight">
              L'actualité institutionnelle EIFORCES
            </h2>
          </div>
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide group"
          >
            <span>Consulter toutes les dépêches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetrical Layout: Lead Feature + Dispatch List */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Featured Headline Block (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <Link to="/actualites" className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-white mb-6 border border-blue-100 shadow-sm">
                <img
                  src="/PHOTOS STAGES/BESS 12 ET DEMFS 15/DSC_1093.JPG"
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded text-white text-xs font-mono font-bold uppercase tracking-wider">
                  À la Une · {featured.category}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(featured.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors leading-tight">
                {featured.title}
              </h3>

              <p className="text-black/70 mt-3 text-base leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span>Lire la suite du communiqué</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>

          {/* Editorial Dispatch List (Right 5 Cols) */}
          <div className="lg:col-span-5 divide-y divide-blue-50">
            <div className="pb-4 text-xs font-mono uppercase text-black/50 font-semibold tracking-wider">
              Récents communiqués
            </div>
            {listItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="py-5 first:pt-4 group"
              >
                <Link to="/actualites" className="block hover:bg-blue-50/50 -mx-4 px-4 py-2 rounded-md transition-colors">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-black/50 mb-1.5">
                    <span className="text-blue-600 font-bold uppercase">{item.category}</span>
                    <span>•</span>
                    <span>{new Date(item.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-black group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-black/70 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

