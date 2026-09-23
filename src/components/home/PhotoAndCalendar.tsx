import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

const PHOTOS = [
  { src: "/images/gouvernance/general_tribune_eiforces.jpg", caption: "Allocution officielle du Général de Brigade, Directeur Général de l'EIFORCES" },
  { src: "/images/jpo/cooperation_presidium.jpg", caption: "Présidium et délégation d'officiers internationaux lors de la Journée Portes Ouvertes" },
  { src: "/images/formations/salle_cours_stagiaires.jpg", caption: "Stagiaires et auditeurs internationaux en session d'enseignement supérieur à l'EIFORCES" },
  { src: "/images/jpo/ceremonie_officiels.jpg", caption: "Cérémonie officielle et autorités au siège de l'EIFORCES" },
  { src: "/images/jpo/jpo_accueil_fanfare.jpg", caption: "Accueil protocolaire et honneurs militaires lors des événements institutionnels" },
];

export default function PhotoAndCalendar() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % PHOTOS.length);
  const prev = () => setI((v) => (v - 1 + PHOTOS.length) % PHOTOS.length);

  return (
    <section className="bg-white sec-pad !py-10">
      <div className="container-12 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 relative rounded-md overflow-hidden border border-blue-100 bg-white aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7] shadow-sm">
          <img src={PHOTOS[i].src} alt={PHOTOS[i].caption} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-blue-600/90 text-white text-sm px-4 py-2">
            {PHOTOS[i].caption}
          </div>
          <button
            onClick={prev}
            aria-label="Photo précédente"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded bg-white/90 hover:bg-white text-blue-600 grid place-items-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Photo suivante"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded bg-white/90 hover:bg-white text-blue-600 grid place-items-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-md border border-blue-100 bg-white overflow-hidden h-full shadow-sm">
            <div className="bg-blue-600 text-white px-4 py-3 font-display font-bold flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Calendrier
            </div>
            <div className="p-4 text-sm text-black/60">
              Aucun événement programmé actuellement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
