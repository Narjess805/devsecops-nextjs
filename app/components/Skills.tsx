import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Compétences DevSecOps</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li
            key={s}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
