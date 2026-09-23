import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/layout/PageTitle";
import { useTextsStore, usePublicationsStore, useVigieStore, useNotesStore } from "../content/store";

export default function RecherchePage() {
  const { texts } = useTextsStore();
  const { publications } = usePublicationsStore();
  const { vigie } = useVigieStore();
  const { notes } = useNotesStore();

  const axes = texts.crd_axes_raw ? texts.crd_axes_raw.split('\n').filter(Boolean) : [];
  const themes = texts.recherche_themes_raw ? texts.recherche_themes_raw.split('\n').filter(Boolean) : [];

  return (
    <>
      <PageTitle
        eyebrow="Centre de Recherche et de Documentation"
        title={texts.recherche_page_title || "Recherche"}
        subtitle={texts.recherche_page_subtitle || "Veille stratégique, études prospectives et publications scientifiques sur la sécurité et les opérations de soutien à la paix."}
      />

      {/* CRD intro */}
      <section className="sec-pad">
        <div className="container-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">{texts.crd_short || "CRD"}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-ink-900">
              {texts.crd_name || "Centre de Recherche et de Documentation"}
            </h2>
            <p className="text-ink-600 mt-4 leading-relaxed">{texts.crd_desc}</p>
            <h3 className="text-sm uppercase tracking-widest text-ink-500 mt-8 mb-3">Axes de recherche</h3>
            <ul className="space-y-3">
              {axes.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-50 text-primary-700 grid place-items-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-ink-700">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display font-bold text-xl text-ink-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-700" />
              Publications
            </h3>
            <div className="mt-4 grid gap-4">
              {publications.map((p) => (
                <div key={p.title} className="card p-5 flex gap-4">
                  <span className="pill bg-primary-50 h-fit">{p.type}</span>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-ink-900">{p.title}</h4>
                    <p className="text-sm text-ink-600 mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display font-bold text-xl text-ink-900">Thèmes récents</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {themes.map((t) => (
                <span key={t} className="pill bg-ink-50 text-ink-700">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIGIE Archive */}
      <section className="bg-ink-50 sec-pad">
        <div className="container-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="pill-accent">Archive VIGIE</span>
              <h2 className="heading mt-3">Bulletin d'analyse stratégique et prospective</h2>
              <p className="sub mt-2">VIGIE publie trimestriellement les analyses prospectives du CRD/EIFORCES.</p>
            </div>
            <Link to="/publications" className="btn-ghost hidden md:inline-flex">
              Toutes les publications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vigie.map((v) => (
              <a
                key={v.num}
                href="#"
                className="card p-5 hover:border-primary-400 transition group"
              >
                <span className="pill">VIGIE n°{v.num}</span>
                <p className="text-xs text-ink-500 mt-2">{v.year}</p>
                <h3 className="font-display font-bold text-base text-ink-900 mt-2 group-hover:text-primary-700">{v.theme}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Notes d'éclairage */}
      <section className="sec-pad">
        <div className="container-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="pill">Notes d'éclairage</span>
              <h2 className="heading mt-3">+25 publications thématiques</h2>
              <p className="sub mt-3">
                Le CRD publie régulièrement des notes d'éclairage sur l'actualité géopolitique et sécuritaire.
                Sélection ci-dessous.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-ink-100 border-y border-ink-100">
                {notes.map((n, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center gap-4 py-3 hover:bg-ink-50/50 px-3 rounded transition">
                      <span className="pill text-[10px]">{n.date}</span>
                      <span className="font-medium text-ink-800">{n.theme}</span>
                      <ArrowRight className="w-4 h-4 text-ink-400 ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white sec-pad py-16">
        <div className="container-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Consulter toutes nos publications</h2>
          <p className="text-white/90 mt-3 max-w-2xl mx-auto">
            VIGIE, RASI, Notes d'éclairage, actes de colloques — accédez à l'intégralité de la production du CRD.
          </p>
          <Link to="/publications" className="btn rounded-md bg-white hover:bg-blue-50 text-blue-700 shadow-sm px-6 py-3 mt-6 font-semibold inline-flex items-center gap-2">
            Voir la médiathèque <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
