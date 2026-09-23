import { FileText, Download, FileSearch, ClipboardList, Mail, Camera } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { usePublicationsStore } from "../content/store";
import { Link } from "react-router-dom";

export default function PublicationsPage() {
  const { publications } = usePublicationsStore();

  return (
    <>
      <PageTitle
        eyebrow="Bibliothèque & Production scientifique"
        title="Publications & Revues de l'EIFORCES"
        subtitle="VIGIE, RASI, Notes d'éclairage, actes de colloques — toute la production mise à jour par le CRD."
      />

      <section className="sec-pad">
        <div className="container-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-display font-bold text-2xl text-ink-900 border-b pb-3 flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-primary-700" />
              Catalogue des publications officielles ({publications.length})
            </h2>

            <div className="space-y-6">
              {publications.map((pub: any, index: number) => (
                <div key={index} className="card p-6 bg-white border border-gray-200 shadow-sm rounded-lg hover:border-primary-300 transition">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="pill bg-primary-100 text-primary-800 font-bold uppercase text-xs">
                      {pub.type || "Publication"}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Dernière mise à jour</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-ink-900 mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {pub.desc || pub.excerpt || "Aucune description fournie."}
                  </p>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary-700 hover:text-primary-900 uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4" /> Télécharger le document complet (PDF)
                  </a>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <div className="card p-5 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-700" />
                Documents officiels & Réglementations
              </h3>
              <ul className="text-sm mt-3 space-y-2">
                <li><a href="#" className="text-ink-700 hover:text-primary-700 inline-flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 shrink-0" /> Décret n° 2008/179 du 22 mai 2008 (création)</a></li>
                <li><a href="#" className="text-ink-700 hover:text-primary-700 inline-flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 shrink-0" /> Décret n° 2012/307 du 25 juin 2012 (extension)</a></li>
                <li><a href="#" className="text-ink-700 hover:text-primary-700 inline-flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 shrink-0" /> Statut du personnel</a></li>
                <li><a href="#" className="text-ink-700 hover:text-primary-700 inline-flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 shrink-0" /> Règlement intérieur</a></li>
              </ul>
            </div>

            <div className="card p-5 bg-primary-50 border border-primary-100 rounded-lg">
              <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-700" /> S'abonner aux bulletins du CRD
              </h3>
              <p className="text-sm text-ink-700 mt-2">
                Recevez chaque trimestre les analyses stratégiques et revues VIGIE directement par e-mail.
              </p>
              <a href="#footer-newsletter" className="btn-primary w-full justify-center mt-4 text-sm font-semibold flex items-center gap-2">
                <Download className="w-4 h-4" /> S'abonner à la revue
              </a>
            </div>

            <Link to="/mediatheque" className="card p-5 block hover:border-primary-300 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-display font-bold text-ink-900 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary-700" /> Médiathèque
              </h3>
              <p className="text-sm text-ink-600 mt-1">Photos, vidéos, cérémonies, reportages.</p>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
