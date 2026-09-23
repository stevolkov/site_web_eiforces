import { motion } from "framer-motion";
import { useTextsStore } from "../../content/store";
import { Quote, Award } from "lucide-react";

export default function Testimonial() {
  const { texts } = useTextsStore();

  return (
    <section className="bg-blue-600 text-white relative sec-pad py-16">
      <div className="relative container-12 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="aspect-[4/5] w-48 sm:w-64 lg:max-w-sm rounded-md border border-white/20 overflow-hidden bg-white/10 shadow-lg">
            <img
              src={texts.dg_photo || "/dg_gb_eiforces.JPG"}
              alt={texts.dg_name || "Général de Brigade BITOTE André Patrice"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-5 flex items-center gap-3 bg-white/10 border border-white/20 rounded-md p-4">
            <Award className="w-6 h-6 text-white shrink-0" />
            <div>
              <div className="font-semibold text-white">Chevalier de l'Ordre National du Mérite</div>
              <div className="text-xs text-white/70">Décerné par la République française — mars 2024</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-7"
        >
          <span className="inline-block px-3 py-1 rounded bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest">Mot du Directeur Général</span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-4xl font-bold mt-5 leading-snug">
            « {texts.dg_word || "Faire rayonner l'EIFORCES au-delà des frontières, au service d'une Afrique en paix."} »
          </h2>
          <Quote className="w-12 h-12 text-white/30 mt-4" />
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mt-2">
            Depuis 2018, nous avons élargi notre audience : douaniers, gardes nationaux et protection
            civile rejoignent désormais les forces de Police et de Gendarmerie. Plus de 8 000 stagiaires
            originaires de 26 pays africains y ont été formés. Notre ambition : hisser l'EIFORCES au rang
            de référence continentale pour la formation et la recherche en sécurité.
          </p>
          <div className="mt-6">
            <div className="font-semibold text-white">{texts.dg_name || "Général de Brigade BITOTE André Patrice"}</div>
            <div className="text-sm text-white/70">Directeur Général de l'EIFORCES</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
