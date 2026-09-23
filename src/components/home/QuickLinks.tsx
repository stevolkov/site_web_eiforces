import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const COLUMNS: { title: string; items: [string, string][] }[] = [
  {
    title: "Formations",
    items: [
      ["Enseignement fondamental", "/formations#fondamental"],
      ["Enseignement supérieur", "/formations#superieur"],
      ["Enseignement thématique", "/formations#thematique"],
    ],
  },
  {
    title: "Coopération",
    items: [
      ["Partenariats bilatéraux", "/cooperation#bilaterale"],
      ["Partenariats multilatéraux", "/cooperation#multilaterale"],
      ["Autres partenariats", "/cooperation#autres"],
    ],
  },
  {
    title: "Services en ligne",
    items: [
      ["Bibliothèque virtuelle", "/mediatheque"],
      ["Forum", "/forum"],
      ["Conseils pratiques", "/publications"],
    ],
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-white border-y border-blue-100 sec-pad !py-10">
      <div className="container-12 grid sm:grid-cols-3 gap-8">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display font-bold text-black mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.items.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
