import { Link } from "react-router-dom";
import { PlayCircle, Megaphone, ArrowRight } from "lucide-react";
import { useNewsStore } from "../../content/store";

const VIDEOS = [
  { title: "Cérémonie de fin de stages BESS", src: "/PHOTOS STAGES/BESS 10 OK.jpg" },
  { title: "Formation pratique Conduite 4x4", src: "/PHOTOS STAGES/4X4 BESS 12/DSC_0051.JPG" },
  { title: "Stage SCUS 7 — Module tactique", src: "/PHOTOS STAGES/SCUS7/DSC_0286.JPG" },
  { title: "Instruction sur le campus d'Awaé", src: "/PHOTOS STAGES/BEKONO/DSC_0084.JPG" },
];

export default function VideosAnnouncements() {
  const { news } = useNewsStore();
  const [main, ...rest] = VIDEOS;
  const announcements = news.slice(0, 5);

  return (
    <section className="bg-white sec-pad">
      <div className="container-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading">EIFORCES en vidéos</h2>
          <Link to="/mediatheque" className="btn-ghost hidden sm:inline-flex">
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9 grid md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative rounded-md overflow-hidden border border-blue-100 aspect-video bg-white group cursor-pointer shadow-sm">
              <img src={main.src} alt={main.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-black/10 group-hover:bg-black/0 transition-colors">
                <PlayCircle className="w-14 h-14 text-white drop-shadow-md" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-blue-600/90 text-white text-sm px-4 py-2">
                {main.title}
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4">
              {rest.map((v) => (
                <div key={v.title} className="relative rounded-md overflow-hidden border border-blue-100 aspect-video bg-white flex-1 cursor-pointer group shadow-sm">
                  <img src={v.src} alt={v.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 grid place-items-center bg-black/10 group-hover:bg-black/0 transition-colors">
                    <PlayCircle className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-blue-600/90 text-white text-xs px-2 py-1 truncate">
                    {v.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-md border border-blue-100 bg-white overflow-hidden shadow-sm">
              <div className="bg-blue-600 text-white px-4 py-3 font-display font-bold flex items-center gap-2">
                <Megaphone className="w-4 h-4" /> Annonces
              </div>
              <ul className="divide-y divide-blue-50">
                {announcements.map((n) => (
                  <li key={n.title}>
                    <Link to="/actualites" className="block px-4 py-2.5 text-sm text-blue-600 font-medium hover:bg-blue-50 hover:text-blue-800">
                      {n.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
