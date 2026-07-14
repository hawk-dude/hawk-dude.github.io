import Image from "next/image";
import type { Education } from "../lib/definitions";

export default function EducationEntry({ entry }: { entry: Education }) {
  return (
    <article className="flex items-start gap-4">
      <Image
        src={entry.image}
        alt={entry.school}
        width={48}
        height={48}
        className="mt-1 shrink-0 rounded border border-sumi-ink-4 object-cover"
      />
      <div>
        <h3 className="font-bold text-crystal-blue">{entry.school}</h3>
        <p className="text-sm text-old-white">
          {entry.degree} <span className="text-fuji-gray">·</span>{" "}
          {entry.major}
        </p>
        <p className="text-sm text-fuji-gray">
          {entry.start_date} – {entry.end_date}
        </p>
        <ul className="mt-2 flex flex-col gap-1 text-sm text-fuji-white">
          {entry.achievements.map((item) => (
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
