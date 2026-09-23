import PageTitle from "../components/layout/PageTitle";
import Timeline from "../components/common/Timeline";
import { Link } from "react-router-dom";

export default function GenesePage() {
  return (
    <>
      <PageTitle
        eyebrow="Organisation"
        title="Genèse et évolution"
        subtitle="De la réflexion de 2005 à la reconnaissance internationale, retour sur les étapes clés qui ont façonné l'EIFORCES."
      />
      <Timeline />
      <section className="bg-primary-900 text-white sec-pad">
        <div className="container-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Un héritage pour le continent</h2>
            <p className="text-white/85 mt-3 max-w-3xl text-lg leading-relaxed">
              Née de la volonté politique de S.E. Paul BIYA, l'EIFORCES œuvre au renforcement de la stabilité
              régionale, à l'amélioration de la gouvernance sécuritaire et à la promotion de standards communs.
              Elle s'inscrit aujourd'hui dans la durée, comme un outil au service des États africains.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link to="/organisation/missions" className="btn bg-white hover:bg-primary-50 text-primary-800 px-6 py-3 font-semibold">
              Lire nos missions et objectifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
