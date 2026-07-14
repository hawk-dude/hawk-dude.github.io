import Image from "next/image";
import type { Work } from "../lib/definitions";

export default function WorkEntry({ job }: { job: Work }) {
  return (
    <article className="flex items-start gap-4">
      <Image
        src={job.image}
        alt={job.company}
        width={48}
        height={48}
        className="mt-1 shrink-0 rounded border border-sumi-ink-4 object-cover"
      />
      <div>
        <h3 className="font-bold text-crystal-blue">{job.title}</h3>
        <p className="text-sm text-old-white">
          {job.company} <span className="text-fuji-gray">· {job.location}</span>
        </p>
        <p className="text-sm text-fuji-gray">
          {job.start_date} – {job.end_date}
        </p>
        <ul className="mt-2 flex flex-col gap-1 text-sm text-fuji-white">
          {job.responsibilities.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="shrink-0 text-sakura-pink">-</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
