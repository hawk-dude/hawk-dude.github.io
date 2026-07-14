import Image from "next/image";
import type { Certification } from "../lib/definitions";

export default function CertEntry({ cert }: { cert: Certification }) {
  return (
    <article className="flex items-start gap-4">
      <Image
        src={cert.image}
        alt={cert.title}
        width={64}
        height={64}
        className="mt-1 shrink-0 object-contain"
      />
      <div>
        <h3 className="font-bold text-crystal-blue">{cert.title}</h3>
        <p className="text-sm text-old-white">
          {cert.issuer} <span className="text-fuji-gray">· {cert.date}</span>
        </p>
        <p className="mt-1 text-sm text-fuji-white">{cert.description}</p>
      </div>
    </article>
  );
}
