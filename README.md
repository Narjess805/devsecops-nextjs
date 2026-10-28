# DevSecOps Portfolio — Version Next.js

Portfolio DevSecOps migré vers **Next.js 16** avec TypeScript + Tailwind CSS.

##  Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **Node.js 20**

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
├── Jenkinsfile              # Pipeline Jenkins
├── images/                  # Captures d'écran
├── package.json
└── tsconfig.json
```

##  Installation (Activité 18)

```bash
# Vérifier Node.js
node --version
# v20.20.2

# Créer le projet Next.js
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

Structure des composants dans `app/components/` :

| Composant | Rôle |
|---|---|
| `Header` | En-tête avec nom et rôle |
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
    <main className="min-h-screen bg-gray-50">
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
  "Git",
  "Docker",
  "Jenkins",
  "Kubernetes",
  "Ansible",
  "Terraform",
  "Argo CD",
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
    description: "CV en HTML5/CSS3/JavaScript avec thème clair/sombre.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Narjess805/minicv",
  },
  {
    slug: "devsecops-portfolio",
    name: "DevSecOps Portfolio",
    description: "Portfolio personnel présentant les compétences DevSecOps.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    link: "https://github.com/Narjess805/minicv",
  },
  {
    slug: "docker-portfolio",
    name: "Conteneurisation Nginx",
    description: "Image Docker cv-docker servant le portfolio via Nginx.",
    tech: ["Docker", "Nginx"],
    link: "#",
  },
  {
    slug: "jenkins-pipeline",
    name: "Jenkins Pipeline",
    description: "Pipeline CI/CD pour le portfolio DevSecOps.",
    tech: ["Jenkins", "Git", "Docker"],
    link: "#",
  },
];
```

![Données](images/nextjs-data.png)

##  Portfolio rendu

![Portfolio Next.js](images/nextjs-portfolio.png)

## 🔗 Pages dynamiques (Activité 21)

Deux nouvelles routes :
- **`/projects`** → liste tous les projets
- **`/projects/[slug]`** → détail d'un projet (routing dynamique)

**`app/projects/[slug]/page.tsx` :**
```tsx
import Link from "next/link";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Technologies :</strong> {project.tech.join(", ")}</p>
      <a href={project.link}>Voir le projet →</a>
    </main>
  );
}
```

**Liste des projets :** http://192.168.56.101:3000/projects

![Liste des projets](images/nextjs-projects-list.png)

**Exemple de détail :** http://192.168.56.101:3000/projects/minicv

![Détail projet](images/nextjs-project-detail.png)

##  Lancer en développement

```bash
npm run dev
```

Accès : http://192.168.56.101:3000

## 🔧 Prérequis

- **Node.js** ≥ 20

```bash
node --version
```
```
v20.20.2
```
![Node.js](images/node-version.png)

---

##  Premier pipeline Jenkins (Activités 22-24)

### Configuration de la clé SSH Jenkins → GitHub

**Génération d'une clé SSH dédiée à Jenkins :**
```bash
sudo -u jenkins ssh-keygen -t ed25519 -C "jenkins-vm" \
  -f /var/lib/jenkins/.ssh/id_ed25519 -N ""

sudo cat /var/lib/jenkins/.ssh/id_ed25519.pub
```

**Test de la connexion depuis Jenkins :**
```bash
sudo su - jenkins -s /bin/bash
ssh -T git@github.com
```
```
Hi Narjess805! You've successfully authenticated, but GitHub does not provide shell access.
```

![Test SSH Jenkins](images/jenkins-ssh-test.png)

**Ajout des credentials dans Jenkins :**
- Kind : `SSH Username with private key`
- ID : `jenkins-github-ssh`
- Description : `Jenkins GitHub SSH Key`
- Username : `git`
- Private Key : `/var/lib/jenkins/workspace/credentials/jenkins_key`

![Credentials Jenkins](images/jenkins-credentials.png)

### 22. Premier pipeline Jenkins

**Fichier `Jenkinsfile` :**
```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Récupération du dépôt GitHub...'
                git branch: 'main',
                    url: 'git@github.com:Narjess805/devsecops-nextjs.git'
            }
        }

        stage('Install') {
            steps {
                echo '📦 Installation des dépendances...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '🔨 Construction de l\'application Next.js...'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline terminé avec succès'
        }
        failure {
            echo '❌ Pipeline échoué'
        }
    }
}
```

**Configuration du job Jenkins :**
- Type : **Pipeline**
- Definition : `Pipeline script from SCM`
- SCM : `Git`
- Repository URL : `git@github.com:Narjess805/devsecops-nextjs.git`
- Credentials : `jenkins-github-ssh`
- Branch Specifier : `*/main`
- Script Path : `Jenkinsfile`

**Stage View (Checkout réussi) :**
![Jenkins Pipeline 1](images/jenkins-pipeline-1.png)

**Console Output :**
![Console Jenkins](images/jenkins-console-1.png)

### 23. Étape Install

Ajout de l'étape `npm install` pour installer les dépendances du projet Next.js.

**Résultat de `npm install` :**
```
+ npm install
added 370 packages, and audited 371 packages in 45s
```

### 24. Étape Build

Ajout de l'étape `npm run build` pour construire l'application Next.js.

**Résultat de `npm run build` :**
```
+ npm run build
▲ Next.js 16.4.0 (Turbopack)
✓ Compiled successfully in 24.2s
✓ Generating static pages (10/10)
```

**Stage View finale (3 stages en vert) :**
![Jenkins Pipeline Build](images/jenkins-pipeline-build.png)

**URL Jenkins :** http://192.168.56.101:8080/job/devsecops-portfolio-pipeline/

---

## 📌 Liens utiles

-  Portfolio Next.js (local) : http://192.168.56.101:3000
-  Portfolio HTML/CSS/JS : https://github.com/Narjess805/minicv
-  Jenkins : http://192.168.56.101:8080/job/devsecops-portfolio-pipeline/
-  Next.js : https://nextjs.org

---

## 👤 Auteure

**Narjess Dabbech**
- Étudiante ingénieure DevSecOps
- GitHub : [@Narjess805](https://github.com/Narjess805)
- Email : narjessdabbech3@gmail.com

---

**© 2026 Narjess Dabbech — DevSecOps Portfolio**
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
