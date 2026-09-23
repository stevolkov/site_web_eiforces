import { Globe2, Users } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useTextsStore, useCooperationStore } from "../content/store";
import { useHashScroll } from "../hooks/useHashScroll";

export default function CooperationPage() {
  const { texts } = useTextsStore();
  const { cooperation } = useCooperationStore();
  useHashScroll();

  return (
    <>
      <PageTitle
        eyebrow="Coopération internationale"
        title={texts.cooperation_page_title || "Coopérations & partenariats"}
        subtitle={texts.cooperation_page_subtitle || "L'EIFORCES tisse un réseau dense de partenariats..."}
      />

      {/* Bilateral */}
      <section className="sec-pad scroll-mt-28" id="bilaterale">
        <div className="container-12">
          <SectionHeader title="Partenariats bilatéraux" eyebrow="Bilateral" icon={Globe2} color="primary" />
          <div className="grid lg:grid-cols-2 gap-5">
            {cooperation?.bilaterale?.map((p: any) => (
              <PartnerCard key={p.country} {...p} color="primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Multilateral */}
      <section className="bg-ink-50 sec-pad scroll-mt-28" id="multilaterale">
        <div className="container-12">
          <SectionHeader title="Partenariats multilatéraux" eyebrow="Multilateral" icon={Users} color="accent" />
          <div className="grid lg:grid-cols-2 gap-5">
            {cooperation?.multilaterale?.map((p: any) => (
              <PartnerCard key={p.country} {...p} color="accent" />
            ))}
          </div>
        </div>
      </section>

      {/* Autres */}
      <section className="sec-pad scroll-mt-28" id="autres">
        <div className="container-12">
          <SectionHeader title="Autres partenariats" eyebrow="Networks" icon={Globe2} color="primary" />
          <div className="grid lg:grid-cols-2 gap-5">
            {cooperation?.autres?.map((p: any, i: number) => (
              <div key={i} className="card p-5 flex gap-4">
                <span className="pill-green h-fit">{p.tag}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink-900">{p.name}</h3>
                  <p className="text-sm text-ink-600 mt-1">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, eyebrow, icon: Icon, color }: { title: string; eyebrow: string; icon: any; color: "primary" | "accent" }) {
  const accent = color === "primary" ? "pill" : "pill-accent";
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-12 h-12 rounded ${color === "primary" ? "bg-primary-50 text-primary-700" : "bg-ink-100 text-ink-900"} grid place-items-center`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <span className={accent}>{eyebrow}</span>
        <h2 className="font-display font-bold text-2xl text-ink-900">{title}</h2>
      </div>
    </div>
  );
}

function PartnerCard({ country, code, role, tag, color }: { country?: string; code?: string; role: string; tag: string; color: "primary" | "accent"; name?: string }) {
  return (
    <div className={`card p-6 flex gap-4 ${color === "accent" ? "bg-white" : ""}`}>
      <div className={`w-10 h-10 rounded shrink-0 grid place-items-center font-mono font-bold ${
        color === "accent" ? "bg-ink-100 text-ink-900" : "bg-primary-50 text-primary-700"
      } ${(code?.length ?? 0) > 3 ? "text-[9px]" : "text-xs"}`}>
        {code ?? <Globe2 className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-xl text-ink-900">{country}</h3>
          <span className={color === "accent" ? "pill-accent" : "pill"}>{tag}</span>
        </div>
        <p className="text-sm text-ink-600 leading-relaxed">{role}</p>
      </div>
    </div>
  );
}
