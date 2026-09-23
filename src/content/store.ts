import { useState, useEffect } from 'react';
import {
  NEWS, FORMATIONS, CONCOURS, STATS, RECHERCHE, COOPERATION,
  MISSIONS, VIGIE_ISSUES, NOTES, SITE, DIRECTION, PARTNERS, INFRA
} from './site';

// ─── Core persistence helpers ─────────────────────────────────────────────────

export function getStoredData<T>(key: string, defaultData: T): T {
  try {
    const saved = localStorage.getItem(`eiforces_db_${key}`);
    return saved ? JSON.parse(saved) : defaultData;
  } catch {
    return defaultData;
  }
}

export function saveStoredData(key: string, data: unknown) {
  localStorage.setItem(`eiforces_db_${key}`, JSON.stringify(data));
  window.dispatchEvent(new Event('eiforces_store_update'));
}

export function makeStore<T>(key: string, defaultData: T) {
  return function useStore() {
    const [data, setData] = useState<T>(() => getStoredData(key, defaultData));
    useEffect(() => {
      const refresh = () => setData(getStoredData(key, defaultData));
      window.addEventListener('eiforces_store_update', refresh);
      window.addEventListener('storage', refresh);
      return () => {
        window.removeEventListener('eiforces_store_update', refresh);
        window.removeEventListener('storage', refresh);
      };
    }, []);
    const save = (newData: T) => saveStoredData(key, newData);
    return { data, save };
  };
}

// ─── Dynamic list stores ──────────────────────────────────────────────────────

export function useNewsStore() {
  const [news, setNews] = useState<any[]>(() => getStoredData('news', NEWS));
  useEffect(() => {
    const refresh = () => setNews(getStoredData('news', NEWS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { news, saveNews: (d: any[]) => saveStoredData('news', d) };
}

export function usePublicationsStore() {
  const [publications, setPublications] = useState<any[]>(() => getStoredData('publications', RECHERCHE.publications));
  useEffect(() => {
    const refresh = () => setPublications(getStoredData('publications', RECHERCHE.publications));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { publications, savePublications: (d: any[]) => saveStoredData('publications', d) };
}

export function useFormationsStore() {
  const [formations, setFormations] = useState<any[]>(() => getStoredData('formations', FORMATIONS.superieur));
  useEffect(() => {
    const refresh = () => setFormations(getStoredData('formations', FORMATIONS.superieur));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { formations, saveFormations: (d: any[]) => saveStoredData('formations', d) };
}

export function useConcoursStore() {
  const [concours, setConcours] = useState<any[]>(() => getStoredData('concours', CONCOURS));
  useEffect(() => {
    const refresh = () => setConcours(getStoredData('concours', CONCOURS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { concours, saveConcours: (d: any[]) => saveStoredData('concours', d) };
}

export function useStatsStore() {
  const [stats, setStats] = useState<any[]>(() => getStoredData('stats', STATS));
  useEffect(() => {
    const refresh = () => setStats(getStoredData('stats', STATS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { stats, saveStats: (d: any[]) => saveStoredData('stats', d) };
}

export function useVigieStore() {
  const [vigie, setVigie] = useState<any[]>(() => getStoredData('vigie', VIGIE_ISSUES));
  useEffect(() => {
    const refresh = () => setVigie(getStoredData('vigie', VIGIE_ISSUES));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { vigie, saveVigie: (d: any[]) => saveStoredData('vigie', d) };
}

export function useNotesStore() {
  const [notes, setNotes] = useState<any[]>(() => getStoredData('notes', NOTES));
  useEffect(() => {
    const refresh = () => setNotes(getStoredData('notes', NOTES));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { notes, saveNotes: (d: any[]) => saveStoredData('notes', d) };
}

export function usePartnersStore() {
  const [partners, setPartners] = useState<any[]>(() => getStoredData('partners', PARTNERS));
  useEffect(() => {
    const refresh = () => setPartners(getStoredData('partners', PARTNERS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { partners, savePartners: (d: any[]) => saveStoredData('partners', d) };
}

export function useMissionsStore() {
  const [missions, setMissions] = useState<any>(() => getStoredData('missions', MISSIONS));
  useEffect(() => {
    const refresh = () => setMissions(getStoredData('missions', MISSIONS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { missions, saveMissions: (d: any) => saveStoredData('missions', d) };
}

export function useCooperationStore() {
  const [cooperation, setCooperation] = useState<any>(() => getStoredData('cooperation', COOPERATION));
  useEffect(() => {
    const refresh = () => setCooperation(getStoredData('cooperation', COOPERATION));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { cooperation, saveCooperation: (d: any) => saveStoredData('cooperation', d) };
}

export function useInfraStore() {
  const [infra, setInfra] = useState<any[]>(() => getStoredData('infra', INFRA));
  useEffect(() => {
    const refresh = () => setInfra(getStoredData('infra', INFRA));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { infra, saveInfra: (d: any[]) => saveStoredData('infra', d) };
}

const DEFAULT_MEDIA = [
  { type: "photo", title: "Cérémonie officielle — Promotion BESS 10", date: "Campus d'Awaé", src: "/PHOTOS STAGES/BESS 10 OK.jpg" },
  { type: "photo", title: "Promotions BESS 12 & DEMFS 15", date: "2025-2026", src: "/PHOTOS STAGES/BESS 12 ET DEMFS 15/DSC_1093.JPG" },
  { type: "photo", title: "Stage SCUS 7 — Formation au commandement", date: "Session 2025", src: "/PHOTOS STAGES/SCUS7/DSC_0142.JPG" },
  { type: "photo", title: "Exercice pratique de conduite 4x4 tout-terrain", date: "BESS 12", src: "/PHOTOS STAGES/4X4 BESS 12/DSC_0006.JPG" },
  { type: "photo", title: "Promotion BESS 9 — Photo officielle", date: "2022-2023", src: "/PHOTOS STAGES/BESS 9- 2022-2023.jpg" },
  { type: "photo", title: "Promotion BESS 8 — Photo de promotion", date: "2021-2022", src: "/PHOTOS STAGES/bess 8.jpg" },
];

export function useMediaStore() {
  const [media, setMedia] = useState<any[]>(() => getStoredData('media', DEFAULT_MEDIA));
  useEffect(() => {
    const refresh = () => setMedia(getStoredData('media', DEFAULT_MEDIA));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return { media, saveMedia: (d: any[]) => saveStoredData('media', d) };
}

// ─── Texts/config stores ──────────────────────────────────────────────────────

const DEFAULT_TEXTS: Record<string, string> = {
  // Accueil — Hero
  hero_title: 'Sécurité, paix & gouvernance stratégique en Afrique.',
  hero_subtitle: 'Établissement inter-États d\'enseignement supérieur, pôle d\'excellence CEEAC et UA. Formations d\'officiers, de policiers et séminaires de haut niveau.',

  // Accueil — DG
  dg_word: 'Faire rayonner l\'EIFORCES au-delà des frontières, au service d\'une Afrique en paix.',
  dg_name: 'BITOTE André Patrice',
  dg_grade: 'Général de brigade',
  dg_title: 'DG de l\'EIFORCES',
  dg_photo: '/dg_gb_eiforces.JPG',

  // Accueil — Sections éditoriales
  missions_section_title: 'Trois diplômes pour le commandement opérationnel & stratégique.',
  missions_section_desc: 'Du niveau tactique jusqu\'à la conduite stratégique des crises, l\'EIFORCES prépare les cadres supérieurs militaires, de gendarmerie, de police et civils aux plus hautes responsabilités.',
  crd_section_title: 'Le CRD — veille stratégique & production académique.',
  crd_section_desc: RECHERCHE.crd.desc,

  // Page Organisation
  org_title: 'Organisation',
  org_subtitle: 'La gouvernance de l\'EIFORCES reflète son statut d\'Établissement Public Administratif sous tutelle du Ministère de la Défense.',
  org_intro: 'L\'École Internationale des Forces de Sécurité est un Établissement Public Administratif de droit camerounais, créé par décret présidentiel n° 2008/179 du 22 mai 2008, doté de la personnalité juridique et de l\'autonomie financière. Elle est rattachée au Ministère de la Défense, qui en préside également le Conseil d\'Administration.',
  dg_full_name: DIRECTION.dg.name,
  dga_name: DIRECTION.dga.name,
  dga_role: DIRECTION.dga.role,
  studies_name: DIRECTION.studies.name,
  studies_role: DIRECTION.studies.role,

  // Coordonnées
  contact_address: SITE.contact.address,
  contact_campus: SITE.contact.campus,
  contact_phone: SITE.contact.phone,
  contact_email: SITE.contact.email,
  contact_email2: SITE.contact.emailCandidatures,

  // Page Missions
  missions_page_title: 'Missions et objectifs',
  missions_page_subtitle: 'Former, entraîner, recycler, perfectionner, rechercher : l\'EIFORCES, une école à cinq missions.',
  missions_tasks_raw: MISSIONS.tasks.join('\n'),
  missions_pillars_raw: JSON.stringify(MISSIONS.pillars),

  // Page Formations
  formations_page_title: 'Formations & Enseignement Supérieur',
  formations_page_subtitle: 'Du commandement d\'unité tactique à la conduite stratégique des crises, préparez votre haut commandement au sein des forces de sécurité.',

  // Page Coopération
  cooperation_page_title: 'Coopérations & partenariats',
  cooperation_page_subtitle: 'L\'EIFORCES tisse un réseau dense de partenariats bilatéraux et multilatéraux au service de la sécurité en Afrique.',

  // Page Recherche
  recherche_page_title: 'Recherche',
  recherche_page_subtitle: 'Veille stratégique, études prospectives et publications scientifiques sur la sécurité et les opérations de soutien à la paix.',
  crd_name: RECHERCHE.crd.name,
  crd_short: RECHERCHE.crd.short,
  crd_desc: RECHERCHE.crd.desc,
  crd_axes_raw: RECHERCHE.crd.axes.join('\n'),
  recherche_themes_raw: RECHERCHE.themes.join('\n'),

  // Page Concours
  concours_page_title: 'Concours & recrutements',
  concours_page_subtitle: 'Préparez votre candidature aux cycles BESS, DEMFS et SCUS. Tous les communiqués officiels, dates et modalités.',

  // Page Actualités
  actualites_page_title: "L'EIFORCES en mouvement",
  actualites_page_subtitle: 'Toutes les dernières nouvelles, programmes, cérémonies et partenariats de l\'École Internationale des Forces de Sécurité.',

  // Page Contact
  contact_page_title: 'Contactez l\'EIFORCES',
  contact_page_subtitle: 'Notre équipe est disponible pour répondre à vos demandes d\'information et candidatures.',

  // Infos générales
  site_name: SITE.name,
  site_slogan: SITE.slogan,
  site_description: SITE.description,
};

export function useTextsStore() {
  const [texts, setTexts] = useState<Record<string, string>>(() => getStoredData('texts', DEFAULT_TEXTS));
  useEffect(() => {
    const refresh = () => setTexts(getStoredData('texts', DEFAULT_TEXTS));
    window.addEventListener('eiforces_store_update', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('eiforces_store_update', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  const saveTexts = (newTexts: Record<string, string>) => saveStoredData('texts', newTexts);
  return { texts, saveTexts };
}

// Convenience: get all default texts (used for reset)
export const DEFAULT_TEXTS_EXPORT = DEFAULT_TEXTS;
