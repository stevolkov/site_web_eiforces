import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PARTNERS, SITE } from "../../content/site";

export default function Partners() {
  return (
    <section className="bg-white sec-pad border-y border-blue-100 py-16">
      <div className="container-12">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">Coopération internationale</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-black">Un réseau qui s'étend sur 26+ pays</h2>
          <p className="text-black/70 max-w-2xl mx-auto mt-3">
            L'EIFORCES est reconnue Centre d'Excellence par la CEEAC et l'Union Africaine,
            et coopère avec les Nations Unies, l'Union Européenne, l'OTAN et de nombreux partenaires bilatéraux.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-square rounded-md border border-blue-100 hover:border-blue-300 flex items-center justify-center overflow-hidden cursor-pointer transition shadow-sm"
              title={p.role}
            >
              <Flag code={p.code} />
              <div className="absolute -bottom-1 inset-x-1 mx-auto opacity-0 group-hover:opacity-100 transition bg-blue-600 text-white text-[10px] rounded px-2 py-1 z-10 whitespace-nowrap text-center">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/cooperation" className="btn border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-md text-sm font-semibold">
            Explorer tous nos partenariats
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wide text-black/50">Nous suivre</span>
            <Social href={SITE.social.facebook} label="Facebook">FB</Social>
            <Social href="#" label="Twitter / X">X</Social>
            <Social href="#" label="YouTube">YT</Social>
            <Social href="#" label="LinkedIn">IN</Social>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-600 text-xs font-bold transition-colors shadow-sm"
    >
      {children}
    </a>
  );
}

function Flag({ code }: { code: string }) {
  const isOrg = ["un", "eu", "au", "ceeac"].includes(code);

  const getUrl = () => {
    switch (code) {
      case "fr": return "https://flagcdn.com/w160/fr.png";
      case "cn": return "https://flagcdn.com/w160/cn.png";
      case "us": return "https://flagcdn.com/w160/us.png";
      case "jp": return "https://flagcdn.com/w160/jp.png";
      case "cm": return "https://flagcdn.com/w160/cm.png";
      case "un": return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg";
      case "eu": return "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
      case "au": return "https://upload.wikimedia.org/wikipedia/commons/5/55/Flag_of_the_African_Union.svg";
      case "ceeac": return "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_the_Economic_Community_of_Central_African_States.svg";
      default: return "";
    }
  };

  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <img
        src={getUrl()}
        alt={`Drapeau ${code}`}
        className={`w-full h-full ${isOrg ? "object-contain p-2" : "object-cover"}`}
      />
    </div>
  );
}
