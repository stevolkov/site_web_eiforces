import { motion } from "framer-motion";
import { TIMELINE } from "../../content/site";

export default function Timeline() {
  return (
    <section className="sec-pad">
      <div className="container-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="pill">Genèse & évolution</span>
          <h2 className="heading mt-3">D'Awaé 2005 à aujourd'hui</h2>
          <p className="sub mt-3 mx-auto">
            Dix-sept années au service de la paix et de la sécurité sur le continent africain.
          </p>
        </div>

        <ol className="relative border-l-2 border-ink-100 ml-3 md:ml-6 space-y-8">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="pl-6 md:pl-10 relative"
            >
              <span className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ring-4 ring-white ${
                t.color === "accent" ? "bg-ink-900" : "bg-primary-600"
              }`} />
              <span className="pill">{t.year}</span>
              <h3 className="font-display font-bold text-lg mt-2 text-ink-900">{t.title}</h3>
              <p className="text-ink-600 mt-1 max-w-2xl">{t.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
