import { bio } from "../lib/data";

/**
 * Ghostty-style floating terminal window. Everything on the bio renders
 * inside this frame: titlebar on top, then whatever is passed as children
 * (nav tabs, page content, footer).
 */
export default function TerminalWindow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-1 items-center justify-center bg-sumi-ink-0 p-2 sm:p-6 md:p-10">
      <div className="flex h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-sumi-ink-4 bg-sumi-ink-1 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:h-[88dvh]">
        {/* Titlebar */}
        <div className="flex h-9 shrink-0 items-center justify-center border-b border-sumi-ink-4 bg-sumi-ink-0 px-4">
          <span className="text-xs text-fuji-gray">
            {bio.user}@{bio.host} — ghostty
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
