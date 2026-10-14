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
