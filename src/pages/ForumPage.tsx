import PageTitle from "../components/layout/PageTitle";
import { MessageSquare, LogIn } from "lucide-react";

export default function ForumPage() {
  return (
    <>
      <PageTitle
        eyebrow="Communauté"
        title="Forum EIFORCES"
        subtitle="Espace d'échange entre anciens auditeurs, chercheurs et personnels."
      />
      <section className="sec-pad">
        <div className="container-12 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 rounded bg-primary-50 text-primary-700 grid place-items-center mx-auto">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="font-display font-bold text-2xl text-ink-900 mt-4">
            Le forum sera bientôt rouvert
          </h2>
          <p className="text-ink-600 mt-2">
            Pour rejoindre la communauté, contactez-nous pour recevoir vos identifiants.
          </p>
          <a href="/contact" className="btn-primary inline-flex mt-6">
            <LogIn className="w-4 h-4" /> Demander un accès
          </a>
        </div>
      </section>
    </>
  );
}
