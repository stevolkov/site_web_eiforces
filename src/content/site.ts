// Centralized content for EIFORCES redesign
// All data extracted from the official site eiforces.gov.cm (scraped July 2026)

export const SITE = {
  name: "EIFORCES",
  fullName: "École Internationale des Forces de Sécurité",
  fullNameEn: "International School for Security Forces",
  slogan: "Pour la paix, la sécurité et la stabilité en Afrique et dans le monde",
  sloganEn: "For peace, security and stability in Africa and in the world",
  description:
    "Centre d'Excellence de la CEEAC et de l'Union Africaine, dédié à la formation et à la recherche en sécurité et opérations de soutien à la paix.",
  foundedYear: 2008,
  decree: "Décret Présidentiel n° 2008/179 du 22 mai 2008",
  contact: {
    address: "Siège social : Yaoundé / Ngousso",
    campus: "Campus d'instruction : Awaé, Mefou-Afamba (~50 km SO de Yaoundé)",
    phone: "(+237) 222.21.76.52",
    phoneAlt: "(+237) 222 218 002",
    email: "contact@eiforces.gov.cm",
    emailCandidatures: "eiforcescameroon@gmail.com",
    poBox: "BP 100 Awaé",
  },
  social: {
    facebook: "https://www.facebook.com/p/EIFORCES-100064620644344/",
    webOriginal: "http://www.eiforces.gov.cm",
  },
};

export const DIRECTION = {
  headOfState: {
    name: "S.E. M. Paul BIYA",
    role: "Président de la République du Cameroun",
    subRole: "Chef des Armées, Chef Suprême des Forces de Police",
  },
  primeMinister: {
    name: "M. Joseph DION NGUTE",
    role: "Premier Ministre, Chef du Gouvernement",
  },
  board: [
    { name: "M. BETI ASSOMO Joseph", role: "Président du Conseil d'Administration", sub: "Ministre Délégué à la Présidence chargé de la Défense (MINDEF)" },
    { name: "M. MBELLA MBELLA Lejeune", role: "Membre", sub: "Ministre des Relations Extérieures" },
    { name: "M. Louis Paul Motaze", role: "Tutelle Financière", sub: "Ministre des Finances" },
    { name: "M. MBARGA NGUELE Martin", role: "Co-tutelle technique", sub: "Délégué Général à la Sûreté Nationale" },
    { name: "M. ETOGA Gallax Yves Landry", role: "Co-tutelle technique", sub: "Secrétaire d'État auprès du Ministre de la Défense, chargé de la Gendarmerie Nationale" },
  ],
  dg: {
    name: "Général de Brigade BITOTE André Patrice",
    role: "Directeur Général",
    bio: "En poste depuis 2018, le Gal. BITOTE porte une vision panafricaine de la formation sécuritaire. Distingué Chevalier de l'Ordre National du Mérite français en mars 2024 et Chevalier de l'Ordre National Camerounais du Mérite en août 2025.",
    portee: "+1 000 stagiaires formés avec le soutien français depuis 2011",
  },
  dga: {
    name: "Commissaire Divisionnaire Dr. OYONO née THOM Cécile",
    role: "Directeur Général Adjoint",
  },
  studies: {
    name: "Colonel TAMBOUA Eugène",
    role: "Responsable des études",
  },
};

export const NAV = [
  {
    label: "Présentation",
    path: "/organisation",
    children: [
      { label: "Organisation", path: "/organisation" },
      { label: "Genèse et évolution", path: "/organisation/genese" },
      { label: "Missions et objectifs", path: "/organisation/missions" },
      { label: "Organigramme", path: "/organisation/organigramme" },
      { label: "Ressources infrastructurelles", path: "/infrastructures" },
    ],
  },
  {
    label: "Formations",
    path: "/formations",
    children: [
      { label: "Catalogue complet", path: "/formations" },
      { label: "Enseignement supérieur (BESS / DEMFS / SCUS)", path: "/formations#superieur" },
      { label: "Enseignement fondamental", path: "/formations#fondamental" },
      { label: "Enseignement thématique", path: "/formations#thematique" },
      { label: "Fiches de stage (téléchargement)", path: "/formations#fiches" },
    ],
  },
  { label: "Recherche", path: "/recherche" },
  {
    label: "Coopération",
    path: "/cooperation",
    children: [
      { label: "Vue d'ensemble", path: "/cooperation" },
      { label: "Partenariats bilatéraux", path: "/cooperation#bilaterale" },
      { label: "Partenariats multilatéraux", path: "/cooperation#multilaterale" },
      { label: "Autres partenariats", path: "/cooperation#autres" },
    ],
  },
  {
    label: "Actualités",
    path: "/actualites",
    children: [
      { label: "Toutes les actualités", path: "/actualites" },
      { label: "Concours & Recrutements", path: "/concours" },
      { label: "Opérations grand public", path: "/actualites#op-public" },
      { label: "Annonces", path: "/actualites#annonces" },
    ],
  },
  { label: "Publications", path: "/publications" },
  { label: "Médiathèque", path: "/mediatheque" },
  { label: "Contact", path: "/contact" },
];

export const STATS = [
  { value: 8189, suffix: "+", label: "Stagiaires formés", icon: "users" },
  { value: 26, suffix: "", label: "Pays partenaires", icon: "globe" },
  { value: 17, suffix: "", label: "Années d'excellence", icon: "calendar" },
  { value: 60, suffix: "+", label: "Programmes de formation", icon: "book" },
];

export const PARTNERS = [
  { code: "fr", label: "France", role: "Coopération technique & pédagogique", since: 2011 },
  { code: "un", label: "ONU", role: "Certification & pré-déploiement" },
  { code: "eu", label: "Union Européenne", role: "EUPST & financement" },
  { code: "cn", label: "Chine", role: "Équipements & assistance" },
  { code: "us", label: "États-Unis", role: "DLIELC, POTI, FLETC, CESA" },
  { code: "jp", label: "Japon", role: "PNUD — financement" },
  { code: "cm", label: "Cameroun", role: "État hôte" },
  { code: "au", label: "Union Africaine", role: "Centre d'Excellence" },
  { code: "ceeac", label: "CEEAC", role: "Centre d'Excellence" },
];

export const TIMELINE = [
  { year: "2005", title: "Travaux de réflexion", desc: "Avec l'ONU et les partenaires pour combler les lacunes capacitaires des forces de police africaines en OSP.", color: "primary" },
  { year: "22 mai 2008", title: "Décret de création", desc: "Décret présidentiel n° 2008/179 créant l'EIFORCES par la volonté de S.E. Paul BIYA.", color: "accent" },
  { year: "2010", title: "Premières formations", desc: "Premières formations en ordre public, financées par la France.", color: "primary" },
  { year: "2011", title: "Enseignement supérieur", desc: "Démarrage des formations supérieures de courte durée.", color: "accent" },
  { year: "2012", title: "Séminaires majeurs", desc: "Organisation de plusieurs séminaires internationaux. Décret 2012/307 d'extension.", color: "primary" },
  { year: "2014–2015", title: "EUPST Awaé", desc: "Exercice EUPST-Awaé — 555 policiers et gendarmes de ~20 pays formés sur 1 mois. Montée en puissance.", color: "accent" },
  { year: "2016", title: "Processus de certification", desc: "Lancement du processus de certification par l'ONU.", color: "primary" },
  { year: "2018", title: "Nouveau cap", desc: "Prise de fonction du Gal. BITOTE André Patrice comme Directeur Général.", color: "accent" },
  { year: "Fév. 2020", title: "Lancement SCUS", desc: "Création du Stage de Commandement d'Unité de Sécurité (maillon tactique manquant).", color: "primary" },
  { year: "Mars 2024", title: "Chevalier", desc: "Le DG Gal. BITOTE décoré Chevalier de l'Ordre National du Mérite français.", color: "accent" },
  { year: "Juin 2025", title: "BESS 11 / DEMFS 14", desc: "61 diplômés issus de 6 pays africains, première certification d'un douanier camerounais.", color: "primary" },
  { year: "12 nov. 2025", title: "Nouveau souffle", desc: "Installation de 8 nouveaux cadres nommés par décret présidentiel.", color: "accent" },
  { year: "Sept. 2025", title: "BESS 12", desc: "Ouverture du 12ᵉ Brevet d'Études Supérieures de Sécurité.", color: "primary" },
];

export const MISSIONS = {
  pillars: [
    {
      icon: "shield",
      title: "Stabilité régionale",
      desc: "Contribuer au renforcement de la stabilité régionale et à la prévention des conflits.",
    },
    {
      icon: "scale",
      title: "Gouvernance sécuritaire",
      desc: "Améliorer la gouvernance sécuritaire des pays africains.",
    },
    {
      icon: "users",
      title: "Standards communs",
      desc: "Promouvoir des standards communs au sein des forces de Police et de Gendarmerie dans les missions ONU/UA.",
    },
  ],
  tasks: [
    "Former, entraîner, recycler et perfectionner les unités constituées de type Gendarmerie et Police aux opérations de soutien à la paix.",
    "Former et perfectionner les experts civils et militaires aux OSP.",
    "Former, entraîner et recycler les cadres de maîtrise et de conception, civils et militaires, aux missions de Police intérieure et en OSP.",
    "Organiser et dispenser l'enseignement supérieur dans le domaine des missions policières de soutien à la paix.",
    "Effectuer des recherches dans les domaines de soutien à la paix et de la sécurité.",
  ],
};

export const FORMATIONS = {
  superieur: [
    {
      code: "BESS",
      title: "Brevet d'Études Supérieures de Sécurité",
      level: "Stratégique",
      duration: "10 mois (42 semaines)",
      desc: "Préparer les officiers supérieurs à la conception, planification et conduite d'opérations de sécurité en cadre national ou multinational.",
      outcomes: [
        "Commandement d'un groupe opérationnel de sécurité national",
        "Officier d'état-major en mission OSP",
        "Forces de proposition auprès des autorités politiques",
        "Direction d'organisations interministérielles",
      ],
      tuition: "20 000 000 FCFA",
    },
    {
      code: "DEMFS",
      title: "Diplôme d'État-Major des Forces de Sécurité",
      level: "Opératif",
      duration: "5 mois (20 semaines)",
      desc: "Former et perfectionner les officiers aux missions policières de sécurité intérieure et de soutien à la paix.",
      outcomes: [
        "Officier traitant en état-major composante police",
        "Commandement de groupements des forces de Police",
        "Méthode d'élaboration d'une décision opérationnelle (MEDO)",
        "Anglais opérationnel + droit de la guerre / droits humains",
      ],
      tuition: "10 000 000 FCFA",
    },
    {
      code: "SCUS",
      title: "Stage de Commandement d'Unité de Sécurité",
      level: "Tactique",
      duration: "16 semaines",
      desc: "Maillon tactique liant fondamental et enseignement supérieur. Police judiciaire, gestion démocratique des foules, police administrative, OMP.",
      outcomes: [
        "Commandement d'unité de sécurité au niveau tactique",
        "Polyvalence et interopérabilité inter-services",
        "Éligibilité aux formations supérieures (DEMFS / BESS)",
      ],
      tuition: "6 000 000 FCFA",
    },
  ],
  fondamental: {
    ordrePublic: [
      { code: "FOP", title: "Formation des Formateurs en Ordre Public" },
      { code: "UN/FPU ToT", title: "UN Formed Police Units — Training of Trainers" },
      { code: "PCO 2", title: "Perfectionnement au Commandement Opérationnel niveau 2" },
      { code: "MFO", title: "Moniteur en Franchissement Opérationnel" },
      { code: "FPU", title: "Formation pré-déploiement des Unités de Police Constituées" },
      { code: "RECFOP", title: "Recyclage des Formateurs en Ordre Public" },
      { code: "NEDEX", title: "Neutralisation / Destruction des Engins Explosifs" },
      { code: "TOPHP", title: "Technicien Opérationnel en Protection des Hautes Personnalités" },
    ],
    judiciaire: [
      { code: "PTS", title: "Police Technique et Scientifique" },
      { code: "EPEI", title: "Équipes Projetables d'Experts en Investigations" },
      { code: "PRÉVÔTÉ", title: "Police d'Accompagnement (Prévôté)" },
    ],
  },
  thematique: [
    "Gouvernance sécuritaire",
    "Protection des civils",
    "Lutte contre le terrorisme",
    "Criminalité transfrontalière",
    "Protection des enfants",
    "Négociation et médiation dans les OSP",
  ],
};

export const RECHERCHE = {
  crd: {
    name: "Centre de Recherche et de Documentation",
    short: "CRD",
    desc: "Œuvre à l'éclairage des évolutions de l'environnement sécuritaire, au renforcement des capacités d'anticipation des systèmes de sécurité africains, et à la veille stratégique pour l'aide à la décision.",
    axes: [
      "Explication des dynamiques de l'environnement sécuritaire",
      "Renforcement des capacités d'anticipation",
      "Veille stratégique & aide à la décision",
      "Concepts pour la doctrine d'emploi des Forces",
      "Leçons d'expérience pour la formation et les OSP",
    ],
  },
  publications: [
    { type: "Périodique", title: "VIGIE", desc: "Bulletin trimestriel d'analyse stratégique et prospective (12 numéros parus, + édition spéciale Cyber-criminalité)." },
    { type: "Revue", title: "RASI", desc: "Revue Africaine de Sécurité Internationale. Numéro 003 sur l'interaction entre acteurs en gestion de crise." },
    { type: "Note", title: "Notes d'éclairage du CRD", desc: "+25 notes thématiques : CAN 2021, BRICS, Wagner, ISCAP, conflit israélo-palestinien, retrait sahélien CEDEAO..." },
    { type: "Colloque", title: "Actes de colloques", desc: "Conférences internationales 2013–2018 sur les OSP, terrorisme, gouvernance des foules, identité et stabilité de l'État." },
  ],
  themes: [
    "Les motos-taxis comme vecteurs d'insécurité urbaine",
    "Menaces transfrontalières en Afrique centrale",
    "Compréhension et lutte contre Boko Haram",
    "Réfugiés et déplacés dans le Bassin du Lac Tchad",
    "Force multinationale mixte du Lac Tchad",
    "Cybercriminalité et engins explosifs improvisés",
    "Drones et sécurité en Afrique",
  ],
};

export const COOPERATION = {
  bilaterale: [
    { country: "France", code: "FR", role: "Partenaire historique depuis 2011. Appui au pôle ordre public + 2 conseillers techniques permanents + missions d'expertise. Plus de 1 000 stagiaires formés sur 22-23 pays africains. Considéré comme le phare de la coopération sécuritaire française au Cameroun.", tag: "Bilateral" },
    { country: "Chine", code: "CN", role: "Soutien en moyens roulants et équipements divers pour le campus d'Awaé.", tag: "Bilateral" },
    { country: "Japon", code: "JP", role: "À travers le PNUD, appui à la formation, à la recherche et à l'acquisition d'équipements.", tag: "Bilateral" },
    { country: "États-Unis", code: "US", role: "Partenariat avec DLIELC, POTI (Peace Operations Training Institute), FLETC, CESA — Center for Strategic African Studies. Appui aux équipements et formation de formateurs (Capstone).", tag: "Bilateral" },
    { country: "Tchad", code: "TD", role: "Visites bilatérales, missions d'études (juin 2025 — N'Djaména).", tag: "Bilateral" },
  ],
  multilaterale: [
    { country: "Nations Unies", code: "ONU", role: "Formations pilotes de pré-déploiement (policiers individuels, protection des enfants), FPU ToT, processus de certification en cours.", tag: "Multilateral" },
    { country: "Union Africaine", code: "UA", role: "Centre d'Excellence reconnu. Application des normes de la Force Africaine en Attente (FAA).", tag: "Multilateral" },
    { country: "Union Européenne", code: "UE", role: "Co-financement (avec Cameroun + CEEAC) de 7 promotions longues (stratégique + opératif). Exercice EUPST Awaé 2014. Programme PAGIRN (sécurité routière, FED 2018/400-468).", tag: "Multilateral" },
    { country: "CEEAC", code: "CEEAC", role: "Label Centre d'Excellence attribué à l'EIFORCES pour la formation et la recherche en sécurité et OSP.", tag: "Multilateral" },
    { country: "PNUD", code: "PNUD", role: "Acquisition d'équipements, financement des formations et de la recherche, développement institutionnel, mise en réseau.", tag: "Multilateral" },
    { country: "CAFRAD", code: "CAFRAD", role: "Partenaire multilatéral africain. Visites d'échange du DG Gal. BITOTE (Académie Royale Militaire de Meknès, EROG).", tag: "Multilateral" },
  ],
  autres: [
    { name: "COESPU", role: "Center of Excellence for Stability Police Units — Vicence, Italie. Stages avancés pour formateurs.", tag: "Partner" },
    { name: "APSTA", role: "Association des Centres Africains de Formation au Soutien à la Paix — 20+ centres membres.", tag: "Network" },
    { name: "IAPTC", role: "International Association of Peace Training Centers. 26ᵉ conférence au BIPSOT Bangladesh (oct.–nov. 2022).", tag: "Network" },
    { name: "POTI / DLIELC", role: "E-learning gratuit sur les opérations de paix, en anglais/français/espagnol/portugais.", tag: "Network" },
  ],
};

export const INFRA = [
  { name: "Bâtiment MESS", capacity: "350 places", icon: "building" },
  { name: "Dortoirs", capacity: "88 places", icon: "bed" },
  { name: "Infirmerie moderne", capacity: "Sur site 24/7", icon: "heart" },
  { name: "Tour d'escalade", capacity: "Formation tactique", icon: "mountain" },
  { name: "Tour de direction des exercices", capacity: "PC tactique", icon: "antenna" },
  { name: "Stand de tir", capacity: "Calibrage ONU", icon: "target" },
];

export const NEWS = [
  {
    date: "2026-07-09",
    category: "Coopération",
    title: "EIFORCES 2026 Study Mission : de la Suisse au Maroc",
    excerpt:
      "Dans le cadre de leur mission d'études Afrique, la 12ᵉ promotion du BESS a conclu son parcours par une étape finale au Maroc.",
    lang: "EN",
  },
  {
    date: "2026-06-29",
    category: "Coopération bilatérale",
    title: "Prévôt training : partenariat EIFORCES-France confirmé",
    excerpt:
      "Le 8ᵉ stage de formation aux missions prévôtales a été clos le 26 juin 2026 à Awaé. L'attaché de sécurité intérieure de l'ambassade de France a salué l'excellence opérationnelle.",
    lang: "EN",
  },
  {
    date: "2026-06-27",
    category: "BESS",
    title: "Le BESS 12 en visite au CICR et à l'UNOG à Genève",
    excerpt:
      "À la troisième journée de la mission d'études à Genève, la promotion BESS 12 a rencontré les organisations internationales clés.",
    lang: "FR",
  },
  {
    date: "2025-12-22",
    category: "Budget",
    title: "Budget 2026 — Compétitivité et attractivité",
    excerpt:
      "Le DG a présenté le budget 2026 axé sur la compétitivité des programmes et l'attractivité de l'offre de formation.",
    lang: "FR",
  },
  {
    date: "2025-12-05",
    category: "Coopération",
    title: "EIFORCES-France : du matériel pédagogique pour une formation de qualité",
    excerpt:
      "Don de matériels pédagogiques par la coopération française pour accompagner les cycles de formation.",
    lang: "FR",
  },
  {
    date: "2025-11-12",
    category: "Gouvernance",
    title: "Installation de 8 nouveaux responsables",
    excerpt:
      "Par décret et arrêté présidentiels du 12 novembre 2025, 8 cadres ont été installés à la Direction des études, au CRD et à la DAF.",
    lang: "FR",
  },
];

export const CONCOURS = [
  { title: "DEMFS 16 — 5 mois", deadline: "Voir communiqué", tag: "À venir", url: "#" },
  { title: "BESS 13 — 10 mois", deadline: "Voir communiqué", tag: "À venir", url: "#" },
  { title: "SCUS — 16 semaines", deadline: "Sessions semestrielles", tag: "Continu", url: "#" },
  { title: "Recrutement — Comptable PAGIRN", deadline: "Clôturé (août)", tag: "Archivé", url: "#" },
];

export const SERVICES_ONLINE = [
  { icon: "library", title: "Bibliothèque virtuelle", desc: "Mémoires, publications du CRD, fonds documentaire." },
  { icon: "message", title: "Forum", desc: "Espace d'échange entre alumni et chercheurs." },
  { icon: "shield-alert", title: "Cyber sécurité", desc: "Conseils pratiques pour les citoyens." },
  { icon: "car", title: "Sécurité routière", desc: "Programme PAGIRN." },
  { icon: "baby", title: "Protection des enfants", desc: "Sensibilisation et signalement." },
  { icon: "lightbulb", title: "Conseils pratiques", desc: "Santé, sécurité au quotidien, vidéosurveillance." },
];

export const DOCS_OFFICIALS = [
  { type: "Décret", title: "Décret n° 2008/179 du 22 mai 2008", desc: "Création de l'EIFORCES." },
  { type: "Décret", title: "Décret n° 2012/307 du 25 juin 2012", desc: "Extension / réorganisation." },
  { type: "Texte", title: "Statut du personnel", desc: "À consulter." },
  { type: "Texte", title: "Règlement intérieur", desc: "À consulter." },
];

export const LINKS_TOP = [
  "Accueil", "Organisation", "Genèse", "Missions", "Organigramme",
  "Infrastructures", "Formations", "Recherche", "Coopération", "Actualités",
  "Publications", "Médiathèque", "Contact",
];

export const VIGIE_ISSUES = [
  { num: "001", year: 2020, theme: "Éditorial inaugural" },
  { num: "002", year: 2020, theme: "COVID-19 & paix-sécurité en Afrique" },
  { num: "003-004", year: 2020, theme: "OMS, G5 Sahel" },
  { num: "005-006", year: 2021, theme: "Missions de police en OSP" },
  { num: "007", year: 2022, theme: "Force Multinationale Mixte — Lac Tchad" },
  { num: "008", year: 2020, theme: "20 mai 2020 — DDR" },
  { num: "Special", year: 2022, theme: "Cyber-criminalité" },
  { num: "010-011", year: 2022, theme: "Engins explosifs improvisés — menace en Afrique centrale" },
  { num: "011-012", year: 2023, theme: "Drones & sécurité en Afrique" },
];

export const NOTES = [
  { date: "Juillet 2021", theme: "CAN 2021" },
  { date: "Fév. 2022", theme: "Sommet Afrique-UE n°6" },
  { date: "Mars 2022", theme: "Guerre Russie-Ukraine" },
  { date: "Avril 2022", theme: "Matières premières & géopolitique" },
  { date: "2023", theme: "Facilité européenne pour la paix" },
  { date: "Sept. 2023", theme: "Sommet Russie-Afrique (Saint-Pétersbourg)" },
  { date: "Oct. 2023", theme: "BRICS & bipolarisation" },
  { date: "Oct. 2023", theme: "Groupe Wagner en Afrique" },
  { date: "Déc. 2023", theme: "78ᵉ Assemblée générale de l'ONU" },
  { date: "Déc. 2023", theme: "Conflit israélo-palestinien" },
  { date: "Janv. 2024", theme: "Retrait sahélien de la CEDEAO" },
  { date: "Mars 2024", theme: "Guerre & femmes africaines" },
  { date: "Fév. 2024", theme: "Prix des carburants au Cameroun" },
];
