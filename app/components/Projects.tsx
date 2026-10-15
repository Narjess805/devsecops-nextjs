"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="icon">📁</span> Projets
      </h2>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          Chargement...
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="project-card"
            >
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className="project-link">Voir le projet →</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
