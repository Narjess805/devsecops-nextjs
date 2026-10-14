import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tous les projets</h1>
        <ul className="space-y-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="text-blue-600 hover:underline text-lg"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="inline-block mt-6 text-gray-600 hover:underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
