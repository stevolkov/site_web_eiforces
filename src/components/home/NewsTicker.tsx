import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useNewsStore } from "../../content/store";

export default function NewsTicker() {
  const { news } = useNewsStore();
  const latest = news[0];
  if (!latest) return null;
  return (
    <div className="bg-primary-50 border-b border-primary-100">
      <div className="container-12 flex items-center gap-4 py-2 text-sm">
        <span className="shrink-0 inline-flex items-center gap-2 rounded bg-primary-700 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          Dernière actualité
        </span>
        <Link to="/actualites" className="flex-1 truncate text-ink-700 hover:text-primary-700">
          {latest.title}
        </Link>
        <Link to="/actualites" className="shrink-0 hidden sm:inline-flex items-center gap-1 text-primary-700 font-medium hover:text-primary-900">
          Toutes les actualités <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
