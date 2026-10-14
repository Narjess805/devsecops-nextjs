import Link from "next/link";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

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
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Tous les projets
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{project.name}</h1>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="mb-4">
          <strong>Technologies :</strong> {project.tech.join(", ")}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className="text-blue-600 hover:underline"
        >
          Voir le projet →
        </a>
      </div>
    </main>
  );
}
