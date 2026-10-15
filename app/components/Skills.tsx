"use client";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const skillIcons: Record<string, string> = {
  Git: "🌿",
  Docker: "🐳",
  Jenkins: "🔧",
  Kubernetes: "☸️",
  Ansible: "⚙️",
  Terraform: "🏗️",
  "Argo CD": "🚀",
};

export default function Skills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
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
        <span className="icon">🛠️</span> Compétences DevSecOps
      </h2>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          Chargement...
        </div>
      ) : (
        <ul className="skills-list">
          {skills.map((s) => (
            <li key={s} className="skill-badge">
              <span>{skillIcons[s] || "📦"}</span>
              {s}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
