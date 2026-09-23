import { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertTriangle, ShieldCheck } from "lucide-react";
import PageTitle from "../components/layout/PageTitle";
import { useTextsStore } from "../content/store";

export default function ContactPage() {
  const { texts } = useTextsStore();
  const [form, setForm] = useState({ name: "", email: "", subject: "Information générale", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageTitle
        eyebrow="Contact"
        title={texts.contact_page_title || "Nous contacter"}
        subtitle={texts.contact_page_subtitle || "Siège social à Yaoundé / Ngousso — campus d'instruction à Awaé. Notre équipe vous répond dans les meilleurs délais."}
      />

      <section className="sec-pad">
        <div className="container-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-2xl text-ink-900 mb-6">Envoyer un message</h2>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="card p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500">Nom complet</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded bg-ink-50 px-4 py-2.5 ring-1 ring-ink-100 focus:ring-2 focus:ring-primary-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500">E-mail</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded bg-ink-50 px-4 py-2.5 ring-1 ring-ink-100 focus:ring-2 focus:ring-primary-300 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-ink-500">Sujet</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="mt-1 w-full rounded bg-ink-50 px-4 py-2.5 ring-1 ring-ink-100 focus:ring-2 focus:ring-primary-300 focus:outline-none"
                >
                  <option>Information générale</option>
                  <option>Concours & admissions</option>
                  <option>Coopération / Partenariat</option>
                  <option>Demande de presse</option>
                  <option>Recherche / Publications</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-ink-500">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded bg-ink-50 px-4 py-2.5 ring-1 ring-ink-100 focus:ring-2 focus:ring-primary-300 focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary">
                <Send className="w-4 h-4" /> Envoyer le message
              </button>
              {sent && (
                <div className="rounded bg-emerald-50 ring-1 ring-emerald-100 px-4 py-3 text-emerald-800 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Message envoyé — l'équipe EIFORCES reviendra vers vous très prochainement.
                </div>
              )}
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-4">
            <InfoCard icon={MapPin} title="Adresse" lines={[texts.contact_address, texts.contact_campus]} />
            <InfoCard icon={Phone} title="Téléphone" lines={[texts.contact_phone]} />
            <InfoCard icon={Mail} title="E-mails" lines={[texts.contact_email, texts.contact_email2]} />

            <div className="card p-5 bg-ink-50 border-l-4 border-l-ink-800 border-y-ink-200 border-r-ink-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-ink-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-ink-900">Signaler un incident</h3>
                  <p className="text-sm text-ink-600 mt-1">
                    Comptes fictifs, arnaques ou contenus suspects ?
                  </p>
                  <select className="mt-3 w-full rounded bg-white ring-1 ring-ink-200 px-3 py-2 text-sm">
                    <option>Comptes fictifs</option>
                    <option>Arnaques</option>
                    <option>Contenus suspects</option>
                  </select>
                  <button className="btn-primary w-full justify-center mt-3 text-sm">Signaler</button>
                </div>
              </div>
            </div>

            <div className="rounded overflow-hidden border border-ink-200 h-56 bg-ink-100 grid place-items-center text-ink-400 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Carte Google Maps — Awaé, Cameroun
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) {
  return (
    <div className="card p-5 flex gap-4">
      <div className="w-12 h-12 rounded bg-primary-50 text-primary-700 grid place-items-center shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-ink-500">{title}</div>
        <ul className="mt-1 space-y-0.5 text-ink-800 text-sm">
          {lines.map((l) => <li key={l}>{l}</li>)}
        </ul>
      </div>
    </div>
  );
}
