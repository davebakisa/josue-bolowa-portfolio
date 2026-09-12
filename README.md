# Portfolio — Josue Bolowa

Site portfolio de **Josue Bolowa**, graphiste designer & monteur vidéos
(Kinshasa, RDC). Monorepo **pnpm** en **TypeScript**, application web en
**React + Vite**, déploiement automatique sur **GitHub Pages** via
**GitHub Actions**.

## Structure du monorepo

```
.
├── apps/
│   └── web/                 # Application React + Vite (le site)
│       ├── public/images/   # Visuels des projets (identité, packaging, etc.)
│       └── src/
│           ├── components/  # Header, Hero, About, ProjectCard, Gallery, Lightbox, Footer...
│           ├── data/        # Contenu du site (profil, projets, expériences)
│           └── styles/      # Design tokens globaux
├── packages/
│   └── config/               # tsconfig + preset ESLint partagés entre les apps
└── .github/workflows/        # CI + déploiement GitHub Pages
```

## Prérequis

- Node.js ≥ 20 (voir `.nvmrc`)
- pnpm ≥ 9 (`corepack enable` suffit si Corepack est disponible)

## Démarrer en local

```bash
pnpm install
pnpm dev
```

Le site est servi sur http://localhost:5173.

## Scripts disponibles (racine)

| Commande          | Description                                  |
| ------------------ | --------------------------------------------- |
| `pnpm dev`          | Lance le serveur de développement Vite        |
| `pnpm build`        | Build de production (`apps/web/dist`)         |
| `pnpm preview`      | Prévisualise le build de production           |
| `pnpm lint`         | Vérifie le code avec ESLint                    |
| `pnpm typecheck`    | Vérifie les types TypeScript sans émettre      |
| `pnpm format`       | Formate tout le repo avec Prettier             |
| `pnpm format:check` | Vérifie le formatage sans modifier les fichiers |

## Déploiement (GitHub Actions → GitHub Pages)

Deux workflows sont fournis dans `.github/workflows/` :

- **`ci.yml`** : à chaque push / pull request sur `main`, installe les
  dépendances, vérifie le format, le lint, les types, puis build le site.
- **`deploy.yml`** : à chaque push sur `main` (ou déclenchement manuel),
  build le site avec le bon chemin de base puis le publie sur GitHub Pages
  via `actions/deploy-pages`.

### Activer GitHub Pages sur le dépôt

1. Pousser ce repo sur GitHub.
2. Dans **Settings → Pages**, choisir la source **GitHub Actions**.
3. Pousser sur `main` (ou lancer le workflow manuellement depuis l'onglet
   **Actions**) : le site est alors construit et déployé automatiquement.

Le workflow utilise `actions/configure-pages` pour déterminer automatiquement
le bon chemin de base (`VITE_BASE`), que le site soit publié comme *project
page* (`https://<user>.github.io/<repo>/`) ou sur un domaine personnalisé —
aucune configuration manuelle du chemin n'est nécessaire.

## Contenu & images

Tout le texte du site (bio, expériences, projets, légendes) est centralisé
dans `apps/web/src/data/content.ts` : c'est le seul fichier à modifier pour
mettre à jour les informations sans toucher aux composants.

Les visuels dans `apps/web/public/images/` sont issus du PDF portfolio
original, recadrés (suppression des signatures répétées) et compressés en
JPEG pour rester légers sur le web.

## Notes

- Aucun `pnpm-lock.yaml` n'est fourni dans cette archive (pas d'accès réseau
  au moment de la génération) : lancez `pnpm install` une première fois en
  local pour le générer, puis committez-le afin que `pnpm install
  --frozen-lockfile` fonctionne dans les workflows CI/déploiement.
- Les polices (Anton, Caveat, Work Sans) sont chargées depuis Google Fonts
  dans `apps/web/index.html`.
