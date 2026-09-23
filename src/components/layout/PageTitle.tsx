import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageTitle({
  eyebrow,
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <section className="relative bg-blue-600 text-white border-b border-blue-700 overflow-hidden">
      {/* Background: subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      {/* Right column structural line */}
      <div className="absolute top-0 right-1/3 h-full w-px bg-white/20 hidden lg:block" />

      <div className="relative container-12 py-10 sm:py-14 lg:py-18">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-[11px] font-mono text-white/80 uppercase tracking-wider mb-8"
        >
          <Link to="/" className="hover:text-white transition">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-bold">{title}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8">
            {eyebrow && (
              <div className="text-[11px] font-mono font-bold text-white/90 uppercase tracking-widest mb-3">
                {eyebrow}
              </div>
            )}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg text-white/70 mt-4 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right column: decorative numbered index */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="text-right border-r border-white/20 pr-6">
              <div className="font-mono text-[60px] font-bold text-white/10 leading-none select-none">
                EIFORCES
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div className="mt-8 h-px bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
      </div>
    </section>
  );
}

