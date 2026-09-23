import { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle, Save, X, RefreshCw } from "lucide-react";
import {
  useNewsStore, usePublicationsStore, useFormationsStore, useConcoursStore,
  useTextsStore, useVigieStore, useNotesStore, useMissionsStore,
  useCooperationStore, useInfraStore, useStatsStore, useMediaStore
} from "../../content/store";

// ─── Types ────────────────────────────────────────────────────────────────────
type MainTab = "accueil" | "organisation" | "infrastructures" | "formations" | "recherche" | "cooperation" | "actualites" | "concours" | "mediatheque" | "contact";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Field({ label, value, onChange, multiline = false, rows = 2, placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; rows?: number; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">{label}</label>
      {multiline
        ? <textarea rows={rows} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        : <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      }
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  );
}

function SaveBanner({ onSave }: { onSave: () => void }) {
  return (
    <div className="flex justify-end pt-2">
      <button onClick={onSave}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition">
        <Save className="w-4 h-4" /> Enregistrer sur le site
      </button>
    </div>
  );
}

// ─── List Manager (generic) ───────────────────────────────────────────────────
function ListManager<T extends Record<string, any>>({
  title, items, onSave, renderRow, emptyItem, renderForm,
}: {
  title: string;
  items: T[];
  onSave: (items: T[]) => void;
  renderRow: (item: T) => React.ReactNode;
  emptyItem: Partial<T>;
  renderForm: (item: T, onChange: (item: T) => void) => React.ReactNode;
}) {
  const [editing, setEditing] = useState<(T & { _idx?: number }) | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = (i: number) => {
    if (confirm("Supprimer cet élément ?")) onSave(items.filter((_, idx) => idx !== i));
  };
  const handleOpen = (item?: T, i?: number) => {
    setEditing(item ? { ...item, _idx: i } : { ...emptyItem } as T);
    setOpen(true);
  };
  const handleSave = () => {
    if (!editing) return;
    const { _idx, ...rest } = editing;
    const fresh = [...items];
    if (_idx !== undefined) fresh[_idx] = rest as T;
    else fresh.unshift(rest as T);
    onSave(fresh);
    setOpen(false);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
        <button onClick={() => handleOpen()}
          className="bg-blue-600 text-white rounded-md px-3 py-1.5 text-xs font-semibold flex items-center gap-1 hover:bg-blue-700 transition">
          <Plus className="w-3.5 h-3.5" /> Ajouter
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {items.length === 0 && <p className="text-center text-gray-400 py-6 text-sm">Aucun élément.</p>}
        {items.map((item, i) => (
          <div key={i} className="px-5 py-3 flex items-start gap-3 hover:bg-gray-50 transition group">
            <div className="flex-1 min-w-0">{renderRow(item)}</div>
            <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition">
              <button onClick={() => handleOpen(item, i)}
                className="p-1.5 text-gray-400 hover:text-blue-600 bg-white border border-gray-200 rounded shadow-sm hover:border-blue-200 transition">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(i)}
                className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded shadow-sm hover:border-red-200 transition">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
            <div className="p-5 border-b flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Éditer — {title}</h3>
              <button onClick={() => setOpen(false)}><X className="w-5 h-5 text-gray-400 hover:text-gray-900" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {renderForm(editing, setEditing as any)}
            </div>
            <div className="p-5 border-t bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-semibold text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 transition">
                Annuler
              </button>
              <button onClick={handleSave}
                className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 flex items-center gap-2 hover:bg-blue-700 transition">
                <Save className="w-4 h-4" /> Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TAB: Accueil ─────────────────────────────────────────────────────────────
function TabAccueil() {
  const { texts, saveTexts } = useTextsStore();
  const { stats, saveStats } = useStatsStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="🚀 Bandeau Hero (titre principal & accroche)">
        <Field label="Titre principal" value={local.hero_title || ""} onChange={v => set("hero_title", v)} />
        <Field label="Sous-titre / accroche" value={local.hero_subtitle || ""} onChange={v => set("hero_subtitle", v)} multiline rows={3} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="👤 Directeur Général (section présentation accueil)">
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Grade" value={local.dg_grade || ""} onChange={v => set("dg_grade", v)} />
          <Field label="Nom complet" value={local.dg_name || ""} onChange={v => set("dg_name", v)} />
          <Field label="Titre / Poste" value={local.dg_title || ""} onChange={v => set("dg_title", v)} />
        </div>
        <Field label="URL de la photo du DG" value={local.dg_photo || ""} onChange={v => set("dg_photo", v)} placeholder="https://..." />
        <Field label="Mot / Citation du DG" value={local.dg_word || ""} onChange={v => set("dg_word", v)} multiline rows={3} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="📊 Statistiques clés (chiffres en page d'accueil)">
        {stats.map((s: any, i: number) => (
          <div key={i} className="grid grid-cols-3 gap-3 items-center border border-gray-100 rounded-md p-3">
            <Field label="Valeur (nombre)" value={String(s.value)} onChange={v => {
              const fresh = [...stats]; fresh[i] = { ...s, value: Number(v) }; saveStats(fresh);
            }} />
            <Field label="Suffixe (ex: +)" value={s.suffix || ""} onChange={v => {
              const fresh = [...stats]; fresh[i] = { ...s, suffix: v }; saveStats(fresh);
            }} />
            <Field label="Libellé" value={s.label || ""} onChange={v => {
              const fresh = [...stats]; fresh[i] = { ...s, label: v }; saveStats(fresh);
            }} />
          </div>
        ))}
      </SectionCard>

      <SectionCard title="📝 Textes des sections Formations & CRD (accueil)">
        <Field label="Titre section Formations (accueil)" value={local.missions_section_title || ""} onChange={v => set("missions_section_title", v)} />
        <Field label="Description section Formations (accueil)" value={local.missions_section_desc || ""} onChange={v => set("missions_section_desc", v)} multiline rows={3} />
        <Field label="Titre section CRD/Recherche (accueil)" value={local.crd_section_title || ""} onChange={v => set("crd_section_title", v)} />
        <Field label="Description CRD (accueil)" value={local.crd_section_desc || ""} onChange={v => set("crd_section_desc", v)} multiline rows={3} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="🌐 Infos générales du site (nom, slogan, description)">
        <Field label="Nom du site" value={local.site_name || ""} onChange={v => set("site_name", v)} />
        <Field label="Slogan" value={local.site_slogan || ""} onChange={v => set("site_slogan", v)} />
        <Field label="Description (méta)" value={local.site_description || ""} onChange={v => set("site_description", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>
    </div>
  );
}

// ─── TAB: Organisation ───────────────────────────────────────────────────────
function TabOrganisation() {
  const { texts, saveTexts } = useTextsStore();
  const { missions, saveMissions } = useMissionsStore();
  const [local, setLocal] = useState(texts);
  const [localMissions, setLocalMissions] = useState(missions);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Organisation">
        <Field label="Titre de la page" value={local.org_title || ""} onChange={v => set("org_title", v)} />
        <Field label="Sous-titre" value={local.org_subtitle || ""} onChange={v => set("org_subtitle", v)} multiline rows={2} />
        <Field label="Texte d'introduction (paragraphe principal)" value={local.org_intro || ""} onChange={v => set("org_intro", v)} multiline rows={4} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="👥 Direction (DG, DGA, Études)">
        <div className="space-y-3">
          <div className="border border-gray-100 rounded-md p-3 space-y-2">
            <p className="text-xs font-bold text-blue-600 uppercase">Directeur Général</p>
            <Field label="Nom complet DG" value={local.dg_full_name || ""} onChange={v => set("dg_full_name", v)} />
          </div>
          <div className="border border-gray-100 rounded-md p-3 space-y-2">
            <p className="text-xs font-bold text-blue-600 uppercase">Directeur Général Adjoint</p>
            <Field label="Nom" value={local.dga_name || ""} onChange={v => set("dga_name", v)} />
            <Field label="Rôle" value={local.dga_role || ""} onChange={v => set("dga_role", v)} />
          </div>
          <div className="border border-gray-100 rounded-md p-3 space-y-2">
            <p className="text-xs font-bold text-blue-600 uppercase">Responsable des études</p>
            <Field label="Nom" value={local.studies_name || ""} onChange={v => set("studies_name", v)} />
            <Field label="Rôle" value={local.studies_role || ""} onChange={v => set("studies_role", v)} />
          </div>
        </div>
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="📍 Coordonnées institutionnelles">
        <Field label="Adresse siège" value={local.contact_address || ""} onChange={v => set("contact_address", v)} />
        <Field label="Campus (Awaé)" value={local.contact_campus || ""} onChange={v => set("contact_campus", v)} />
        <div className="grid md:grid-cols-2 gap-3">
          <Field label="Téléphone principal" value={local.contact_phone || ""} onChange={v => set("contact_phone", v)} />
          <Field label="Email principal" value={local.contact_email || ""} onChange={v => set("contact_email", v)} />
        </div>
        <Field label="Email candidatures" value={local.contact_email2 || ""} onChange={v => set("contact_email2", v)} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <SectionCard title="🎯 Page Missions — Titre & sous-titre">
        <Field label="Titre page Missions" value={local.missions_page_title || ""} onChange={v => set("missions_page_title", v)} />
        <Field label="Sous-titre page Missions" value={local.missions_page_subtitle || ""} onChange={v => set("missions_page_subtitle", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager
        title="🎯 Les 5 missions de l'EIFORCES (texte de chaque mission)"
        items={localMissions.tasks.map((t: string) => ({ text: t }))}
        onSave={(items) => {
          const updated = { ...localMissions, tasks: items.map((i: any) => i.text) };
          setLocalMissions(updated);
          saveMissions(updated);
        }}
        renderRow={(item: any) => <p className="text-sm text-gray-700 line-clamp-2">{item.text}</p>}
        emptyItem={{ text: "" }}
        renderForm={(item: any, onChange) => (
          <Field label="Texte de la mission" value={item.text || ""} onChange={v => onChange({ ...item, text: v })} multiline rows={4} />
        )}
      />

      <ListManager
        title="⚖️ Triple objectif (piliers)"
        items={localMissions.pillars}
        onSave={(items) => {
          const updated = { ...localMissions, pillars: items };
          setLocalMissions(updated);
          saveMissions(updated);
        }}
        renderRow={(item: any) => (
          <div><p className="text-sm font-semibold text-gray-800">{item.title}</p><p className="text-xs text-gray-500">{item.desc}</p></div>
        )}
        emptyItem={{ title: "", desc: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Titre" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <Field label="Description" value={item.desc || ""} onChange={v => onChange({ ...item, desc: v })} multiline rows={3} />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Formations ─────────────────────────────────────────────────────────
function TabFormations() {
  const { texts, saveTexts } = useTextsStore();
  const { formations, saveFormations } = useFormationsStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Formations">
        <Field label="Titre de la page" value={local.formations_page_title || ""} onChange={v => set("formations_page_title", v)} />
        <Field label="Sous-titre" value={local.formations_page_subtitle || ""} onChange={v => set("formations_page_subtitle", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager
        title="🎓 Programmes de l'Enseignement Supérieur (BESS / DEMFS / SCUS)"
        items={formations}
        onSave={saveFormations}
        renderRow={(item: any) => (
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-blue-700 text-sm">{item.code}</span>
            <span className="text-sm text-gray-700 font-medium">{item.title}</span>
            <span className="text-xs text-gray-400">{item.level} · {item.duration}</span>
          </div>
        )}
        emptyItem={{ code: "", title: "", level: "Stratégique", duration: "6 mois", desc: "", outcomes: [], tuition: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Code (ex: BESS)" value={item.code || ""} onChange={v => onChange({ ...item, code: v })} />
              <Field label="Niveau (ex: Stratégique)" value={item.level || ""} onChange={v => onChange({ ...item, level: v })} />
            </div>
            <Field label="Intitulé complet" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Durée" value={item.duration || ""} onChange={v => onChange({ ...item, duration: v })} />
              <Field label="Frais d'inscription" value={item.tuition || ""} onChange={v => onChange({ ...item, tuition: v })} />
            </div>
            <Field label="Description" value={item.desc || ""} onChange={v => onChange({ ...item, desc: v })} multiline rows={3} />
            <Field
              label="Compétences clés (une par ligne)"
              value={(item.outcomes || []).join('\n')}
              onChange={v => onChange({ ...item, outcomes: v.split('\n').filter(Boolean) })}
              multiline rows={4}
            />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Recherche ──────────────────────────────────────────────────────────
function TabRecherche() {
  const { texts, saveTexts } = useTextsStore();
  const { publications, savePublications } = usePublicationsStore();
  const { vigie, saveVigie } = useVigieStore();
  const { notes, saveNotes } = useNotesStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Recherche & CRD">
        <Field label="Titre de la page" value={local.recherche_page_title || ""} onChange={v => set("recherche_page_title", v)} />
        <Field label="Sous-titre" value={local.recherche_page_subtitle || ""} onChange={v => set("recherche_page_subtitle", v)} multiline rows={2} />
        <hr className="my-2" />
        <Field label="Nom du CRD" value={local.crd_name || ""} onChange={v => set("crd_name", v)} />
        <Field label="Sigle" value={local.crd_short || ""} onChange={v => set("crd_short", v)} />
        <Field label="Description du CRD" value={local.crd_desc || ""} onChange={v => set("crd_desc", v)} multiline rows={4} />
        <Field label="Axes de recherche (un axe par ligne)" value={local.crd_axes_raw || ""} onChange={v => set("crd_axes_raw", v)} multiline rows={5} />
        <Field label="Thèmes de recherche (un par ligne)" value={local.recherche_themes_raw || ""} onChange={v => set("recherche_themes_raw", v)} multiline rows={5} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager
        title="📚 Publications (VIGIE, RASI, Notes, Actes)"
        items={publications}
        onSave={savePublications}
        renderRow={(item: any) => (
          <div><span className="text-xs font-mono font-bold text-blue-600 mr-2">{item.type}</span>
          <span className="text-sm font-semibold text-gray-800">{item.title}</span>
          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p></div>
        )}
        emptyItem={{ type: "Note", title: "", desc: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Type (Périodique, Revue, Note, Colloque…)" value={item.type || ""} onChange={v => onChange({ ...item, type: v })} />
            <Field label="Titre" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <Field label="Description" value={item.desc || ""} onChange={v => onChange({ ...item, desc: v })} multiline rows={3} />
          </>
        )}
      />

      <ListManager
        title="📰 Numéros VIGIE (bulletins d'analyse stratégique)"
        items={vigie}
        onSave={saveVigie}
        renderRow={(item: any) => (
          <div><span className="text-xs font-mono font-bold text-blue-600">VIGIE n°{item.num}</span>
          <span className="text-xs text-gray-400 mx-2">·</span>
          <span className="text-xs text-gray-500">{item.year}</span>
          <p className="text-sm text-gray-800 font-medium mt-0.5">{item.theme}</p></div>
        )}
        emptyItem={{ num: "", year: new Date().getFullYear(), theme: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Numéro (ex: 013)" value={String(item.num || "")} onChange={v => onChange({ ...item, num: v })} />
            <Field label="Année" value={String(item.year || "")} onChange={v => onChange({ ...item, year: Number(v) })} />
            <Field label="Thème / Titre du numéro" value={item.theme || ""} onChange={v => onChange({ ...item, theme: v })} />
          </>
        )}
      />

      <ListManager
        title="🔍 Notes d'éclairage du CRD"
        items={notes}
        onSave={saveNotes}
        renderRow={(item: any) => (
          <div><span className="text-xs font-mono text-blue-600">{item.date}</span>
          <span className="text-sm text-gray-800 ml-2">{item.theme}</span></div>
        )}
        emptyItem={{ date: "", theme: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Date de publication (ex: Mars 2024)" value={item.date || ""} onChange={v => onChange({ ...item, date: v })} />
            <Field label="Thème / Titre de la note" value={item.theme || ""} onChange={v => onChange({ ...item, theme: v })} />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Coopération ─────────────────────────────────────────────────────────
function TabCooperation() {
  const { texts, saveTexts } = useTextsStore();
  const { cooperation, saveCooperation } = useCooperationStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  const updateList = (key: keyof typeof cooperation, items: any[]) => {
    saveCooperation({ ...cooperation, [key]: items });
  };

  const partnerForm = (item: any, onChange: (v: any) => void) => (
    <>
      <Field label="Pays / Organisation" value={item.country || item.name || ""} onChange={v => onChange({ ...item, country: v, name: v })} />
      <Field label="Code (ex: FR, ONU)" value={item.code || ""} onChange={v => onChange({ ...item, code: v })} />
      <Field label="Rôle / Description" value={item.role || ""} onChange={v => onChange({ ...item, role: v })} multiline rows={3} />
      <Field label="Tag (ex: Bilateral, Multilateral)" value={item.tag || ""} onChange={v => onChange({ ...item, tag: v })} />
    </>
  );

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Coopération">
        <Field label="Titre de la page" value={local.cooperation_page_title || ""} onChange={v => set("cooperation_page_title", v)} />
        <Field label="Sous-titre" value={local.cooperation_page_subtitle || ""} onChange={v => set("cooperation_page_subtitle", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager title="🤝 Partenariats bilatéraux" items={cooperation.bilaterale || []} onSave={items => updateList("bilaterale", items)}
        renderRow={(item: any) => (
          <div><span className="font-mono font-bold text-blue-700 text-xs mr-2">{item.code}</span>
          <span className="text-sm font-semibold text-gray-800">{item.country}</span>
          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.role}</p></div>
        )}
        emptyItem={{ country: "", code: "", role: "", tag: "Bilateral" }}
        renderForm={partnerForm}
      />

      <ListManager title="🌍 Partenariats multilatéraux" items={cooperation.multilaterale || []} onSave={items => updateList("multilaterale", items)}
        renderRow={(item: any) => (
          <div><span className="font-mono font-bold text-blue-700 text-xs mr-2">{item.code}</span>
          <span className="text-sm font-semibold text-gray-800">{item.country}</span>
          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.role}</p></div>
        )}
        emptyItem={{ country: "", code: "", role: "", tag: "Multilateral" }}
        renderForm={partnerForm}
      />

      <ListManager title="🔗 Autres partenariats & réseaux" items={cooperation.autres || []} onSave={items => updateList("autres", items)}
        renderRow={(item: any) => (
          <div><span className="text-sm font-semibold text-gray-800">{item.name}</span>
          <span className="inline-block ml-2 text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{item.tag}</span>
          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.role}</p></div>
        )}
        emptyItem={{ name: "", role: "", tag: "Partner" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Nom de l'organisation" value={item.name || ""} onChange={v => onChange({ ...item, name: v })} />
            <Field label="Rôle / Description" value={item.role || ""} onChange={v => onChange({ ...item, role: v })} multiline rows={3} />
            <Field label="Tag (ex: Partner, Network)" value={item.tag || ""} onChange={v => onChange({ ...item, tag: v })} />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Actualités ─────────────────────────────────────────────────────────
function TabActualites() {
  const { texts, saveTexts } = useTextsStore();
  const { news, saveNews } = useNewsStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Actualités">
        <Field label="Titre de la page" value={local.actualites_page_title || ""} onChange={v => set("actualites_page_title", v)} />
        <Field label="Sous-titre" value={local.actualites_page_subtitle || ""} onChange={v => set("actualites_page_subtitle", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager
        title="📰 Actualités & Communiqués (VIGIE du haut de page inclus)"
        items={news}
        onSave={saveNews}
        renderRow={(item: any) => (
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-bold text-blue-600">{item.category}</span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</p>
            <p className="text-xs text-gray-500 line-clamp-1">{item.excerpt}</p>
          </div>
        )}
        emptyItem={{ category: "Actualité", title: "", date: new Date().toISOString().split("T")[0], excerpt: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Titre" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Catégorie" value={item.category || ""} onChange={v => onChange({ ...item, category: v })} />
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Date</label>
                <input type="date" value={item.date || ""} onChange={e => onChange({ ...item, date: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <Field label="Résumé / Extrait" value={item.excerpt || ""} onChange={v => onChange({ ...item, excerpt: v })} multiline rows={4} />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Concours ────────────────────────────────────────────────────────────
function TabConcours() {
  const { texts, saveTexts } = useTextsStore();
  const { concours, saveConcours } = useConcoursStore();
  const [local, setLocal] = useState(texts);

  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));
  const commit = () => saveTexts(local);

  return (
    <div className="space-y-6">
      <SectionCard title="📄 En-tête page Concours & Recrutements">
        <Field label="Titre de la page" value={local.concours_page_title || ""} onChange={v => set("concours_page_title", v)} />
        <Field label="Sous-titre" value={local.concours_page_subtitle || ""} onChange={v => set("concours_page_subtitle", v)} multiline rows={2} />
        <SaveBanner onSave={commit} />
      </SectionCard>

      <ListManager
        title="🏆 Concours & Annonces de recrutement"
        items={concours}
        onSave={saveConcours}
        renderRow={(item: any) => (
          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              item.tag === "À venir" ? "bg-blue-100 text-blue-700" :
              item.tag === "Continu" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
            }`}>{item.tag}</span>
            <span className="text-sm font-semibold text-gray-800">{item.title}</span>
            <span className="text-xs text-gray-400">{item.deadline}</span>
          </div>
        )}
        emptyItem={{ title: "", deadline: "", tag: "À venir", url: "#" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Titre du concours / annonce" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date limite / Statut (ex: Voir communiqué)" value={item.deadline || ""} onChange={v => onChange({ ...item, deadline: v })} />
              <Field label="Tag (À venir, Continu, Archivé)" value={item.tag || ""} onChange={v => onChange({ ...item, tag: v })} />
            </div>
            <Field label="URL du communiqué (optionnel)" value={item.url || "#"} onChange={v => onChange({ ...item, url: v })} placeholder="https://..." />
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Contact ─────────────────────────────────────────────────────────────
function TabContact() {
  const { texts, saveTexts } = useTextsStore();
  const [local, setLocal] = useState(texts);
  const set = (k: string, v: string) => setLocal(prev => ({ ...prev, [k]: v }));

  return (
    <div className="space-y-6">
      <SectionCard title="📄 Page Contact — titres & coordonnées">
        <Field label="Titre de la page" value={local.contact_page_title || ""} onChange={v => set("contact_page_title", v)} />
        <Field label="Sous-titre" value={local.contact_page_subtitle || ""} onChange={v => set("contact_page_subtitle", v)} multiline rows={2} />
        <hr className="my-1" />
        <Field label="Adresse siège" value={local.contact_address || ""} onChange={v => set("contact_address", v)} />
        <Field label="Campus d'instruction (Awaé)" value={local.contact_campus || ""} onChange={v => set("contact_campus", v)} />
        <div className="grid md:grid-cols-2 gap-3">
          <Field label="Téléphone" value={local.contact_phone || ""} onChange={v => set("contact_phone", v)} />
          <Field label="Email principal" value={local.contact_email || ""} onChange={v => set("contact_email", v)} />
        </div>
        <Field label="Email candidatures" value={local.contact_email2 || ""} onChange={v => set("contact_email2", v)} />
        <SaveBanner onSave={() => saveTexts(local)} />
      </SectionCard>
    </div>
  );
}

// ─── TAB: Infrastructures ─────────────────────────────────────────────────────────
function TabInfra() {
  const { infra, saveInfra } = useInfraStore();

  return (
    <div className="space-y-6">
      <SectionCard title="📄 Gestion du campus">
        <p className="text-sm text-gray-500 mb-2">Les textes génériques (adresse, campus) sont gérés dans Organisation ou Contact. Ici, on gère les capacités du campus.</p>
      </SectionCard>

      <ListManager
        title="🏢 Bâtiments & Équipements"
        items={infra}
        onSave={saveInfra}
        renderRow={(item: any) => (
          <div><span className="text-sm font-semibold text-gray-800">{item.name}</span>
          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">Capacité: {item.capacity} / Icône: {item.icon}</p></div>
        )}
        emptyItem={{ name: "", capacity: "", icon: "building" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Nom de l'infrastructure" value={item.name || ""} onChange={v => onChange({ ...item, name: v })} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Capacité ou description courte" value={item.capacity || ""} onChange={v => onChange({ ...item, capacity: v })} />
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Icône (identifiant)</label>
                <select
                  value={item.icon || "building"}
                  onChange={(e) => onChange({ ...item, icon: e.target.value })}
                  className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="building">Bâtiment principal</option>
                  <option value="bed">Dortoir (lit)</option>
                  <option value="heart">Infirmerie (coeur)</option>
                  <option value="target">Cible (Tir)</option>
                  <option value="mountain">Montagne (Escalade)</option>
                  <option value="antenna">Antenne (transmission)</option>
                </select>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}

// ─── TAB: Médiathèque ─────────────────────────────────────────────────────────────
function TabMediatheque() {
  const { media, saveMedia } = useMediaStore();

  return (
    <div className="space-y-6">
      <SectionCard title="📸 Gestion de la galerie">
        <p className="text-sm text-gray-500 mb-2">Ajoutez les url des photos, vidéos ou des documents de presse ici.</p>
      </SectionCard>

      <ListManager
        title="Fichiers multimédias"
        items={media}
        onSave={saveMedia}
        renderRow={(item: any) => (
          <div className="flex items-center gap-3">
            <img src={item.src} alt="" className="w-12 h-12 rounded object-cover border border-gray-200" />
            <div>
              <span className="text-sm font-semibold text-gray-800">{item.title}</span>
              <p className="text-xs text-gray-500 mt-0.5">[{item.type}] Date : {item.date}</p>
            </div>
          </div>
        )}
        emptyItem={{ type: "photo", title: "", date: "", src: "" }}
        renderForm={(item: any, onChange) => (
          <>
            <Field label="Titre ou Légende de l'image" value={item.title || ""} onChange={v => onChange({ ...item, title: v })} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date ou Mois" value={item.date || ""} onChange={v => onChange({ ...item, date: v })} />
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Type de média</label>
                <select
                  value={item.type || "photo"}
                  onChange={(e) => onChange({ ...item, type: e.target.value })}
                  className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="photo">Photo / Galerie</option>
                  <option value="video">Vidéo / Reportage</option>
                  <option value="document">Document officiel</option>
                  <option value="presse">Coupure de presse</option>
                </select>
              </div>
            </div>
            <Field label="URL source (lien de l'image ou de la vidéo)" value={item.src || ""} onChange={v => onChange({ ...item, src: v })} />
          </>
        )}
      />
    </div>
  );
}

// ─── MAIN ADMIN CONTENT ───────────────────────────────────────────────────────
export default function AdminContent() {
  const [tab, setTab] = useState<MainTab>("accueil");

  const TABS: { id: MainTab; label: string; emoji: string }[] = [
    { id: "accueil", label: "Accueil", emoji: "🏠" },
    { id: "organisation", label: "Organisation & Missions", emoji: "🏛️" },
    { id: "infrastructures", label: "Infrastructures", emoji: "🏢" },
    { id: "formations", label: "Formations", emoji: "🎓" },
    { id: "recherche", label: "Recherche & CRD", emoji: "🔬" },
    { id: "cooperation", label: "Coopération", emoji: "🤝" },
    { id: "actualites", label: "Actualités", emoji: "📰" },
    { id: "concours", label: "Concours", emoji: "📝" },
    { id: "mediatheque", label: "Médiathèque", emoji: "🖼️" },
    { id: "contact", label: "Contact", emoji: "📞" },
  ];

  const handleReset = () => {
    if (confirm("⚠️ Réinitialiser TOUT le contenu du site aux valeurs par défaut ? Cette action est irréversible.")) {
      // Clear all stored data
      const keys = ["news", "publications", "formations", "concours", "stats", "vigie", "notes",
        "missions", "cooperation", "infra", "texts", "partners"];
      keys.forEach(k => localStorage.removeItem(`eiforces_db_${k}`));
      window.dispatchEvent(new Event("eiforces_store_update"));
      alert("✅ Contenu réinitialisé aux valeurs par défaut.");
    }
  };

  return (
    <div>
      {/* Page header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Gestion Globale du Contenu du Site</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Chaque section de chaque page est éditable ici. Les modifications sont instantanément visibles sur le site.
            </p>
          </div>
          <button onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition">
            <RefreshCw className="w-3.5 h-3.5" /> Réinitialiser tout
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-1 px-5 py-3 bg-gray-50 border-b border-gray-200">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Vous éditez la page <strong>{TABS.find(t => t.id === tab)?.label}</strong>. Toute modification est appliquée en temps réel sur le site public.</span>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div>
        {tab === "accueil" && <TabAccueil />}
        {tab === "organisation" && <TabOrganisation />}
        {tab === "infrastructures" && <TabInfra />}
        {tab === "formations" && <TabFormations />}
        {tab === "recherche" && <TabRecherche />}
        {tab === "cooperation" && <TabCooperation />}
        {tab === "actualites" && <TabActualites />}
        {tab === "concours" && <TabConcours />}
        {tab === "mediatheque" && <TabMediatheque />}
        {tab === "contact" && <TabContact />}
      </div>
    </div>
  );
}
