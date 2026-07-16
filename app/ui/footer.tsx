import { bio } from "../lib/data";

/**
 * Status-bar style footer (like tmux/waybar): contact links on the left,
 * location on the right.
 */
export default function Footer() {
  return (
    <footer className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-1 border-t border-sumi-ink-4 bg-sumi-ink-0 px-4 py-2 text-xs">
      <a
        href={bio.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fuji-gray transition-colors hover:text-crystal-blue"
      >
        <span className="text-oni-violet">gh:</span>{bio.githubHandle}
      </a>
      <a
        href={bio.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fuji-gray transition-colors hover:text-crystal-blue"
      >
        <span className="text-wave-aqua-2">in:</span>{bio.linkedinHandle}
      </a>
      <a
        href={`mailto:${bio.email}`}
        className="text-fuji-gray transition-colors hover:text-crystal-blue"
      >
        <span className="text-carp-yellow">mail:</span>{bio.email}
      </a>
      <span className="ml-auto hidden text-fuji-gray sm:inline">
        {bio.location}
      </span>
    </footer>
  );
}
