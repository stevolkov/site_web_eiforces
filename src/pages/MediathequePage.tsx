import { Image, Video, FileText, Music, Newspaper } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useMediaStore } from "../content/store";

export default function MediathequePage() {
  const { media } = useMediaStore();
  return (
    <>
      <PageTitle
        eyebrow="Médiathèque"
        title="Médiathèque de l'EIFORCES"
        subtitle="Photos, vidéos, cérémonies, reportages et documents officiels du quotidien d'Awaé."
      />

      <section className="sec-pad">
        <div className="container-12">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {[
              { icon: Image, label: "Galerie photos" },
              { icon: Video, label: "Vidéos" },
              { icon: FileText, label: "Documents officiels" },
              { icon: Music, label: "Audio" },
              { icon: Newspaper, label: "Dossier de presse" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-white border border-ink-200 hover:border-primary-300 hover:text-primary-700 text-sm font-medium transition"
              >
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">Galerie photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {media.map((g: any, i: number) => (
              <a
                key={i}
                href="#"
                className="group relative aspect-[4/3] rounded overflow-hidden border border-ink-200"
              >
                <img src={g.src} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/0 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs opacity-80">{g.date}</div>
                  <h3 className="font-display font-bold text-sm leading-tight">{g.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
