import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, MapPin, Phone, Mail } from "lucide-react";
import { SITE, NAV } from "../../content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [location.key]);

  const onEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* Top utility strip — minimal & clean */}
      <div className="hidden md:block bg-ink-950 text-white/50 text-[11px] font-mono border-b border-white/5">
        <div className="container-12 flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <MapPin className="w-3 h-3 text-primary-500" />
              Siège : Yaoundé · Campus d'Awaé, Cameroun
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.contact.phone}`} className="hover:text-white transition inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-primary-500" /> {SITE.contact.phone}
            </a>
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-white transition inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-primary-500" /> {SITE.contact.email}
            </a>
            <div className="flex items-center gap-2 border-l border-white/10 pl-5">
              {/* Cameroon flag stripes */}
              <div className="flex gap-px overflow-hidden rounded-sm">
                <span className="w-2.5 h-3.5 bg-cameroon-green block" />
                <span className="w-2.5 h-3.5 bg-cameroon-red block" />
                <span className="w-2.5 h-3.5 bg-cameroon-yellow block" />
              </div>
              <span className="text-white/40">|</span>
              <button className="text-white font-semibold hover:text-primary-400 transition">FR</button>
              <span className="text-white/30">|</span>
              <button className="text-white/40 hover:text-white transition">EN</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header — ultra clean, structured */}
      <header
        className={`sticky top-0 z-50 bg-white border-b transition-all duration-200 ${
          scrolled ? "border-ink-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "border-ink-100"
        }`}
      >
        <div className="container-12 flex items-center justify-between gap-2 md:gap-4 h-16 md:h-18">
          {/* Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 shrink-0 mr-4 group">
            <div className="w-10 h-10 shrink-0">
              <img src="/logo.jpg" alt="EIFORCES" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block border-l border-ink-200 pl-3">
              <div className="font-display font-bold text-ink-900 tracking-tight leading-none text-[15px]">
                EIFORCES
              </div>
              <div className="text-[9.5px] font-mono text-ink-500 uppercase tracking-tight leading-tight mt-0.5">
                <span className="hidden xl:inline-block">École Internationale des Forces de Sécurité</span>
                <span className="xl:hidden block">École Internationale<br />des Forces de Sécurité</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav — minimal, clean, underline style */}
          <nav className="hidden lg:flex items-center gap-0 sm:gap-0.5 flex-1 justify-center min-w-0">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => item.children && onEnter(item.label)}
                onMouseLeave={onLeave}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-0.5 px-2.5 py-2 text-[12.5px] 2xl:text-[13px] font-medium tracking-tight transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-primary-800 font-semibold"
                        : "text-ink-600 hover:text-ink-950"
                    }`
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`} />
                  )}
                </NavLink>

                {/* Dropdown — clean and minimal */}
                <AnimatePresence>
                  {item.children && activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1 w-64 bg-white border border-ink-200 shadow-xl py-1.5 z-20"
                    >
                      {item.children.map((c, ci) => (
                        <NavLink
                          key={c.path}
                          to={c.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2.5 px-4 py-2.5 text-xs transition group ${
                              isActive
                                ? "bg-primary-50 text-primary-800 font-semibold"
                                : "text-ink-700 hover:bg-ink-50 hover:text-ink-950"
                            } ${ci !== 0 ? "border-t border-ink-100/60" : ""}`
                          }
                        >
                          <span className="w-1 h-1 rounded-full bg-ink-900 group-hover:scale-125 transition-transform" />
                          {c.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              aria-label="Rechercher"
              onClick={() => setSearch((s) => !s)}
              className="p-2 text-ink-500 hover:text-ink-900 hover:bg-ink-100 rounded-sm transition"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white text-[12.5px] sm:text-[13px] font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 transition tracking-tight whitespace-nowrap"
            >
              Nous contacter
            </Link>

            <button
              className="lg:hidden p-2 text-ink-700 hover:bg-ink-100 rounded-sm"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {search && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 56, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-ink-50 border-t border-ink-200 overflow-hidden"
            >
              <div className="container-12 h-full flex items-center gap-3">
                <Search className="w-4 h-4 text-ink-400 shrink-0" />
                <input
                  autoFocus
                  placeholder="Rechercher une formation, une publication, un communiqué…"
                  className="flex-1 bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none"
                />
                <button
                  className="text-xs font-mono text-ink-400 hover:text-ink-700 px-2 py-1 border border-ink-200 uppercase tracking-wider"
                  onClick={() => setSearch(false)}
                >
                  Esc
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-ink-100 bg-white"
            >
              <div className="container-12 py-4 divide-y divide-ink-100">
                {NAV.map((item) => (
                  <div key={item.label} className="py-1">
                    <div className="flex items-center justify-between pr-2">
                      <NavLink
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block flex-1 py-2.5 px-2 text-sm font-medium ${
                            isActive ? "text-primary-800" : "text-ink-800"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="p-2 text-ink-500 hover:text-primary-700 transition"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {item.children && mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-1 space-y-1 border-l-2 border-primary-700/30 pl-3 pb-1 overflow-hidden"
                        >
                          {item.children.map((c) => (
                            <NavLink
                              key={c.path}
                              to={c.path}
                              onClick={() => setOpen(false)}
                              className="block text-xs py-1.5 text-ink-500 hover:text-primary-700"
                            >
                              {c.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-3">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block text-center bg-primary-800 text-white text-sm font-semibold px-5 py-2.5 hover:bg-primary-900 transition"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
