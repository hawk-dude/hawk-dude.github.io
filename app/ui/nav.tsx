"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "~" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

/**
 * Terminal tab bar, right under the titlebar. The current page is the
 * "focused" tab: same background as the terminal, yellow text.
 */
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex shrink-0 overflow-x-auto border-b border-sumi-ink-4 bg-sumi-ink-0 text-sm">
      {tabs.map((tab, i) => {
        const active =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`border-r border-sumi-ink-4 px-4 py-1.5 whitespace-nowrap transition-colors ${
              active
                ? "bg-sumi-ink-1 text-carp-yellow"
                : "bg-sumi-ink-0 text-fuji-gray hover:bg-sumi-ink-2 hover:text-old-white"
            }`}
          >
            <span className="mr-1.5 text-sumi-ink-4">{i + 1}:</span>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
