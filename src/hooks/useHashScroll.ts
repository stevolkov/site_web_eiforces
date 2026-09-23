import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolle vers l'élément dont l'id correspond au hash de l'URL.
 * Utilise location.key (unique à chaque navigation React Router) pour
 * réagir même quand on reclique le même lien sans changer l'URL.
 */
export function useHashScroll(delay = 80) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1); // retire le "#"
    setTimeout(() => {
      // Le navigateur appliquera lui-même le décalage grâce aux classes CSS scroll-mt-[100px]
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, delay);
  }, [location.key]); // location.key est unique à chaque clic, même URL identique
}
