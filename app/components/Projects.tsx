import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="font-bold text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
