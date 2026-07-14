import type { Project } from "../lib/definitions";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-sumi-ink-4 bg-sumi-ink-2 p-4 transition-colors hover:border-crystal-blue">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-bold text-carp-yellow">{project.title}</h3>
        <span className="text-xs text-fuji-gray">{project.date}</span>
      </div>
      <p className="mt-2 text-sm text-fuji-white">{project.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.key_words.map((keyword) => (
          <li
            key={keyword}
            className="rounded border border-sumi-ink-4 px-2 py-0.5 text-xs text-wave-aqua-2"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </article>
  );
}
