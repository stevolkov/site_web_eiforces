import { motion } from "framer-motion";
import { useTextsStore } from "../../content/store";

export default function DirectorIntro() {
  const { texts } = useTextsStore();
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-blue-100">
      <div className="container-12 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-md border border-blue-100 bg-gray-50 mb-6"
        >
          <img 
            src={texts.dg_photo || "/dg_gb_eiforces.JPG"} 
            alt={texts.dg_name || "Général de brigade BITOTE André Patrice"} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider"
        >
          {texts.dg_grade || "Général de brigade"}
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl font-bold text-black tracking-tight mt-1"
        >
          {texts.dg_name || "BITOTE André Patrice"}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm font-mono text-blue-600 uppercase tracking-widest font-bold mt-3"
        >
          {texts.dg_title || "DG de l'EIFORCES"}
        </motion.div>
      </div>
    </section>
  );
}
