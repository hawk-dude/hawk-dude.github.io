/**
 * Two-line powerline prompt styled after night-owl.omp.json (oh-my-posh):
 * `╭─ [os][path][git branch][0ms]` then `╰─❯❯ command`.
 *
 * Colors are the night-owl theme's own hexes, not Kanagawa, to match the
 * real shell. Arrows are CSS border triangles because the site font is not
 * nerd-font patched, so powerline glyphs would not render.
 */

// night-owl.omp.json segment colors
const os = "#21c7a8";
const pathBg = "#82AAFF";
const gitBg = "#addb67";
const timeBg = "#575656";
const darkFg = "#011627";
const lightFg = "#d6deeb";
const arrowFg = "#22da6e";

/** Powerline arrow: triangle of the previous segment's color over the next one's. */
function Arrow({ from, to }: { from: string; to?: string }) {
  return (
    <span
      className="flex h-6 shrink-0 items-center"
      style={{ backgroundColor: to }}
    >
      <span
        className="h-0 w-0 border-y-[12px] border-y-transparent border-l-[10px]"
        style={{ borderLeftColor: from }}
      />
    </span>
  );
}

export default function Prompt({
  path = "~",
  command,
  branch = "main",
}: {
  path?: string;
  command?: string;
  branch?: string;
}) {
  return (
    <div className="overflow-x-auto text-sm">
      <div className="flex items-center whitespace-nowrap">
        <span style={{ color: os }}>╭─</span>
        <span
          className="flex h-6 items-center rounded-l-full pl-3 pr-2"
          style={{ backgroundColor: os, color: darkFg }}
        >
          ▲
        </span>
        <Arrow from={os} to={pathBg} />
        <span
          className="flex h-6 items-center pl-1 pr-2"
          style={{ backgroundColor: pathBg, color: darkFg }}
        >
          {path}
        </span>
        <Arrow from={pathBg} to={gitBg} />
        <span
          className="flex h-6 items-center pl-1 pr-2"
          style={{ backgroundColor: gitBg, color: darkFg }}
        >
          ⎇ {branch}
        </span>
        <Arrow from={gitBg} to={timeBg} />
        <span
          className="flex h-6 items-center rounded-r-full pl-1 pr-3"
          style={{ backgroundColor: timeBg, color: lightFg }}
        >
          0ms
        </span>
      </div>
      <div className="whitespace-nowrap">
        <span style={{ color: os }}>╰─</span>
        <span style={{ color: arrowFg }}>❯❯</span>
        {command && <span className="text-fuji-white"> {command}</span>}
      </div>
    </div>
  );
}
