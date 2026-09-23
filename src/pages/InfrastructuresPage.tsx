import { Building2, Bed, Heart, Mountain, Antenna, Target, MapPin } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useInfraStore, useTextsStore } from "../content/store";

const ICONS: Record<string, any> = { building: Building2, bed: Bed, heart: Heart, mountain: Mountain, antenna: Antenna, target: Target };

export default function InfrastructuresPage() {
  const { infra } = useInfraStore();
  const { texts } = useTextsStore();

  return (
    <>
      <PageTitle
        eyebrow="Campus d'Awaé"
        title="Ressources infrastructurelles"
        subtitle="~42 hectares dédiés à la formation, à 50 km au sud-ouest de Yaoundé dans la Mefou-Afamba."
      />

      <section className="sec-pad">
        <div className="container-12">
          <div className="grid lg:grid-cols-3 gap-6">
            {infra.map((i: any) => {
              const Icon = ICONS[i.icon] || Building2;
              return (
                <div key={i.name} className="card card-hover p-6">
                  <div className="w-12 h-12 rounded bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink-900">{i.name}</h3>
                  <p className="text-sm text-primary-700 font-medium mt-1">{i.capacity}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-6 rounded border border-ink-200 bg-white overflow-hidden">
            <div className="lg:col-span-5">
              <img
                src="/PHOTOS STAGES/bess 8.jpg"
                alt="Campus EIFORCES Awaé"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8">
              <h3 className="font-display font-bold text-2xl text-ink-900">Un campus pensé pour l'opérationnel</h3>
              <p className="mt-3 text-ink-600">
                Le campus d'Awaé couvre environ 42 hectares au cœur de la subdivision d'Awaé, département
                de la Mefou-Afamba. Il accueille chaque année plusieurs promotions simultanées :
                enseignement supérieur, fondamental et thématique.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-ink-700">
                {infra.map((i: any) => {
                  const Icon = ICONS[i.icon] || Building2;
                  return (
                    <li key={i.name} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary-700 shrink-0" /> {i.name} ({i.capacity})
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink-500">
                <MapPin className="w-4 h-4 text-accent" />
                {texts.contact_campus}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
