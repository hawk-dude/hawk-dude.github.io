import Image from "next/image";
import Link from "next/link";
import Prompt from "./ui/prompt";
import { bio, fastfetch, paletteRow } from "./lib/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <Prompt command="fastfetch" />
        <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:gap-10">
          {/* Logo slot: fastfetch shows an image here */}
          <Image
            src="/assets/img/profile.jpg"
            alt={bio.name}
            width={192}
            height={192}
            priority
            className="rounded-lg border border-sumi-ink-4"
          />
          <div className="min-w-0 text-sm leading-6">
            <p>
              <span className="text-spring-green">{bio.user}</span>
              <span className="text-fuji-white">@</span>
              <span className="text-spring-green">{bio.host}</span>
            </p>
            <p className="text-fuji-gray">-----------------</p>
            <dl className="flex flex-col gap-3">
              {fastfetch.map((group) => (
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
