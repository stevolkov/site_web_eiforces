import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] grid place-items-center">
      <div className="text-center px-6">
        <h1 className="font-display font-bold text-6xl sm:text-7xl text-primary-700">404</h1>
        <p className="text-ink-700 mt-3 text-lg">Cette page n'a pas été trouvée.</p>
        <Link to="/" className="btn-primary inline-flex mt-6">
          <Home className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
