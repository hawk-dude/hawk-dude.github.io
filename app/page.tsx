import Image from "next/image";
import Link from "next/link";
import Prompt from "./ui/prompt";
import { site } from "./lib/site";

type Stat = { label: string; value: string };

// Sections: bio, technical, things I like
const statGroups: Stat[][] = [
  [
    { label: "Name", value: site.name },
    { label: "Title", value: "CS Student · System Administrator" },
    { label: "School", value: "University of Manitoba" },
    { label: "Origin", value: "Kyiv, Ukraine" },
    { label: "Countries Visited", value: "7" },
  ],
  [
    { label: "OS", value: "Arch Linux x86_64 (btw)" },
    { label: "CPU", value: "AMD Ryzen 5 7600X" },
    { label: "GPU", value: "NVIDIA GeForce RTX 4070 SUPER" },
    { label: "Memory", value: "32 GiB" },
    { label: "Languages", value: "Java, TypeScript, Python, Bash" },
    { label: "PC Builds", value: "3" },
  ],
  [
    { label: "Favourite Game", value: "Victoria 3" },
    { label: "Favourite Song", value: "Lil Mosey — Go Ahead" },
    { label: "Favourite Movie", value: "Sherlock Holmes" },
    { label: "Favourite Course", value: "Data Structures & Algorithms" },
    { label: "Last Book Read", value: "Jules Verne — 20,000 Leagues Under the Sea" },
  ],
];

const paletteRow = [
  "bg-sumi-ink-4",
  "bg-peach-red",
  "bg-spring-green",
  "bg-carp-yellow",
  "bg-crystal-blue",
  "bg-oni-violet",
  "bg-wave-aqua-2",
  "bg-fuji-white",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <Prompt command="fastfetch" />
        <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:gap-10">
          {/* Logo slot: fastfetch shows an image here */}
          <Image
            src="/assets/img/profile.jpg"
            alt={site.name}
            width={192}
            height={192}
            priority
            className="rounded-lg border border-sumi-ink-4"
          />
          <div className="min-w-0 text-sm leading-6">
            <p>
              <span className="text-spring-green">{site.user}</span>
              <span className="text-fuji-white">@</span>
              <span className="text-spring-green">{site.host}</span>
            </p>
            <p className="text-fuji-gray">-----------------</p>
            <dl className="flex flex-col gap-3">
              {statGroups.map((group) => (
                <div key={group[0].label}>
                  {group.map((stat) => (
                    <div key={stat.label} className="flex gap-2">
                      <dt className="shrink-0 text-crystal-blue">
                        {stat.label}:
                      </dt>
                      <dd className="text-fuji-white">{stat.value}</dd>
                    </div>
                  ))}
                </div>
              ))}
            </dl>
            <div className="mt-3 flex">
              {paletteRow.map((color) => (
                <span key={color} className={`h-4 w-7 ${color}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Prompt command="ls" />
        <ul className="mt-2 flex flex-col gap-1 sm:flex-row sm:gap-8">
          <li>
            <Link
              href="/about"
              className="text-crystal-blue hover:text-carp-yellow"
            >
              about/
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-crystal-blue hover:text-carp-yellow"
            >
              projects/
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-crystal-blue hover:text-carp-yellow"
            >
              contact/
            </Link>
          </li>
        </ul>
      </section>

      <p className="text-fuji-gray"># navigate with the tabs above, or ls</p>
    </div>
  );
}
