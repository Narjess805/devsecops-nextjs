# DevSecOps Portfolio — Version Next.js

Portfolio DevSecOps migré vers **Next.js 16** avec TypeScript + Tailwind CSS.

##  Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

##  Structure du projet

```
devsecops-nextjs/
├── app/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                # Données séparées
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── projects/            # Pages dynamiques
│   │   ├── page.tsx         # /projects
│   │   └── [slug]/
│   │       └── page.tsx     # /projects/:slug
│   ├── page.tsx             # Page d'accueil
│   └── layout.tsx
├── public/
└── package.json
```

##  Installation (Activité 18)

```bash
npx create-next-app@latest devsecops-nextjs \
  --typescript --tailwind --app --eslint --no-src-dir \
  --import-alias "@/*" --use-npm

cd devsecops-nextjs
npm run dev
```

Accès : http://192.168.56.101:3000

![Création Next.js](images/nextjs-create.png)

**Page d'accueil par défaut :**
![Accueil Next.js](images/nextjs-home.png)

##  Composants réutilisables (Activité 19)

Composants dans `app/components/` :

| Composant | Rôle |
|---|---|
| `Header` | Nom + rôle |
| `About` | Section À propos |
| `Skills` | Compétences DevSecOps |
| `Projects` | Liste des projets |
| `Contact` | Coordonnées |
| `Footer` | Pied de page |

**Utilisation dans `app/page.tsx` :**
```tsx
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
```

![Composants](images/nextjs-components.png)

##  Fichiers de données séparés (Activité 20)

**`app/data/skills.ts` :**
```typescript
export const skills = [
  "Git", "Docker", "Jenkins",
  "Kubernetes", "Ansible", "Terraform", "Argo CD",
];
```

**`app/data/projects.ts` :**
```typescript
export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "minicv",
    name: "Mini CV One Page",
    description: "CV en HTML5/CSS3/JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Narjess805/minicv",
  },
  // ...
];
```

![Données](images/nextjs-data.png)

##  Portfolio rendu

![Portfolio Next.js](images/nextjs-portfolio.png)

##  Pages dynamiques (Activité 21)

- **`/projects`** → liste tous les projets
- **`/projects/[slug]`** → détail d'un projet

**`app/projects/[slug]/page.tsx` :**
```tsx
export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Technologies :</strong> {project.tech.join(", ")}</p>
      <a href={project.link}>Voir le projet →</a>
    </main>
  );
}
```

**Liste des projets :** http://192.168.56.101:3000/projects

![Liste des projets](images/nextjs-projects-list.png)

**Exemple d'accès direct :** http://192.168.56.101:3000/projects/minicv

![Détail projet](images/nextjs-project-detail.png)

##  Lancer en développement

```bash
npm run dev
```

Accès : http://192.168.56.101:3000

##  Prérequis

- **Node.js** ≥ 20

```bash
node --version
```
```
v20.20.2
```
![Node.js](images/node-version.png)
