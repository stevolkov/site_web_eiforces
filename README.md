# EIFORCES — Refonte du site officiel

> **Démo technique / pitch commercial.** Reproduction modernisée du site `eiforces.gov.cm` (École Internationale des Forces de Sécurité, Cameroun). Contenu identique, design repensé, construit sans WordPress.

---

## Stack technique

- **Vite 8** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** (palette sur-mesure Cameroun + primary blue)
- **React Router 7** pour la navigation
- **Framer Motion** pour les micro-animations
- **Lucide React** pour les icônes
- Fonts : Plus Jakarta Sans + Inter + Source Serif Pro
- Police d'Open-Whisper : ne dépend d'**aucun CMS**, **aucune base de données**

---

## Démarrer en local

```bash
cd eiforces-redesign
npm install          # 1-2 minutes, ~190 Mo
npm run dev          # http://localhost:5173
```

## Build de production

```bash
npm run build        # → dossier dist/ (~500 Ko, ~140 Ko gzippé)
npm run preview      # serveur statique de prévisualisation : http://localhost:4173
```

---

## Arborescence

```
eiforces-redesign/
├── src/
│   ├── App.tsx              # Router principal (16 routes)
│   ├── main.tsx             # Point d'entrée
│   ├── index.css            # Tailwind + composants utilitaires
│   ├── content/site.ts      # TOUT le contenu (scraping de eiforces.gov.cm, juillet 2026)
│   ├── components/
│   │   ├── layout/          # Header (mega-menu), Footer, PageTitle
│   │   ├── home/            # Hero, Pillars, Partners, Testimonial, NewsSection
│   │   └── common/          # Timeline, OrgChart
│   └── pages/               # 16 pages — toutes les routes
│       ├── HomePage.tsx
│       ├── OrganisationPage.tsx
│       ├── GenesePage.tsx
│       ├── MissionsPage.tsx
│       ├── OrganigrammePage.tsx
│       ├── InfrastructuresPage.tsx
│       ├── FormationsPage.tsx
│       ├── RecherchePage.tsx
│       ├── CooperationPage.tsx
│       ├── ActualitesPage.tsx
│       ├── ConcoursPage.tsx
│       ├── PublicationsPage.tsx
│       ├── MediathequePage.tsx
│       ├── ContactPage.tsx
│       ├── ForumPage.tsx
│       └── NotFoundPage.tsx
├── public/
│   └── favicon.svg
├── dist/                     # Build de production pré-généré
├── screenshots/              # 30+ captures desktop + mobile (PNG)
├── take_screenshots.py       # Script Playwright pour régénérer les screenshots
├── spa_server.py             # Mini serveur statique aware-SPA
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Routes (16)

| URL                              | Page                       |
|----------------------------------|----------------------------|
| `/`                              | Accueil                    |
| `/organisation`                  | Organisation               |
| `/organisation/genese`           | Genèse et évolution        |
| `/organisation/missions`         | Missions et objectifs      |
| `/organisation/organigramme`     | Organigramme               |
| `/infrastructures`               | Infrastructures            |
| `/formations`                    | Formations                 |
| `/recherche`                     | Recherche                  |
| `/cooperation`                   | Coopérations               |
| `/actualites`                    | Actualités                 |
| `/concours`                      | Concours & recrutements    |
| `/publications`                  | Publications               |
| `/mediatheque`                   | Médiathèque                |
| `/contact`                       | Contact                    |
| `/forum`                         | Forum                      |

---

## Sources du contenu

- Toutes les informations institutionnelles proviennent du site officiel `eiforces.gov.cm` (scrapé en juillet 2026), du site de l'Observatoire Boutros-Ghali, du Ministère de la Défense camerounais et de plusieurs sources publiques tierces.
- Les photos Unsplash utilisées sur le hero / galerie sont libres de droits (placeholders).
- Aucune image de membre du gouvernement / direction n'est utilisée — seulement des illustrations de substitution.

---

## Pour itérer / étoffer le pitch

1. Remplacer le contenu dans `src/content/site.ts` (un seul fichier à modifier).
2. Adapter la palette dans `tailwind.config.js` (`colors.primary`, `colors.cameroon`).
3. Ajouter des pages = dupliquer un fichier dans `src/pages/` + ajouter une `<Route>` dans `src/App.tsx`.

---

## ⚖️ Note légale

Ce projet est une **démonstration technique** pour évaluer une refonte du site officiel EIFORCES. Il n'est pas affilié au Ministère de la Défense camerounais ni à l'École Internationale des Forces de Sécurité. À n'utiliser qu'à des fins de présentation d'une offre de refonte auprès des ayants-droit.
