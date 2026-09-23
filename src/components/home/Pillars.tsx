import { motion } from "framer-motion";
import { Shield, Scale, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    num: "01",
    icon: Shield,
    title: "Stabilité régionale & Prévention des conflits",
    desc: "Contribuer au renforcement opérationnel des capacités africaines de maintien de la paix par une formation interdisciplinaire exigeante.",
    tag: "Axe Stratégique"
  },
  {
    num: "02",
    icon: Scale,
    title: "Gouvernance sécuritaire & État de droit",
    desc: "Améliorer les doctrines d'emploi et l'encadrement juridique des forces de sécurité dans les contextes de crises complexes.",
    tag: "Doctrine & Normes"
  },
  {
    num: "03",
    icon: Users,
    title: "Standards interarmées & Interopérabilité ONU/UA",
    desc: "Harmoniser les procédures tactiques au sein des contingents de Police, Gendarmerie et composantes civiles avant leur déploiement.",
    tag: "Standardisation"
  },
];

export default function Pillars() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-blue-100">
      <div className="container-12">
        {/* Section Header - Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-12 border-b border-blue-100">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              ENGAGEMENT INSTITUTIONNEL
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-black mt-2 tracking-tight">
              Une vision souveraine, <br className="hidden sm:block" />trois piliers d'action.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-black/70 leading-relaxed">
              Initié sous la haute vision de S.E. Paul BIYA, l'EIFORCES déploie son expertise autour d'objectifs cardinaux partagés par l'Union Africaine et les Nations Unies.
            </p>
          </div>
        </div>

        {/* Editorial Rows (Not Cards) */}
        <div className="divide-y divide-blue-50">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-8 sm:py-10 grid lg:grid-cols-12 gap-4 sm:gap-6 items-start group hover:bg-blue-50/50 px-4 -mx-4 transition-colors rounded-md"
            >
              {/* Number & Tag */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-light text-blue-600 font-semibold">{item.num}</span>
                <span className="text-xs font-mono tracking-wide text-black/50 uppercase font-bold">{item.tag}</span>
              </div>

              {/* Title & Icon */}
              <div className="lg:col-span-4 flex items-center gap-3">
                <item.icon className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="font-display font-bold text-xl text-black group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4 text-sm sm:text-base text-black/70 leading-relaxed">
                {item.desc}
              </div>

              {/* Action Link */}
              <div className="lg:col-span-1 lg:text-right">
                <Link
                  to="/organisation/missions"
                  aria-label={`En savoir plus sur ${item.title}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-blue-200 text-blue-600 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-6 border-t border-blue-100 flex justify-between items-center text-xs font-mono text-black/60 uppercase font-bold">
          <span>EIFORCES Mandat d'Excellence</span>
          <Link to="/organisation/missions" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
            Consulter les textes fondateurs →
          </Link>
        </div>
      </div>
    </section>
  );
}

