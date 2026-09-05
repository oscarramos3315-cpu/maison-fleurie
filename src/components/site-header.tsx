import Link from "next/link";

export function SiteHeader({
  variant = "overlay",
}: {
  variant?: "overlay" | "solid";
}) {
  return (
    <header
      className={
        variant === "overlay"
          ? "absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-7 sm:px-10 lg:px-16"
          : "flex items-center justify-between bg-ink-deep px-6 py-7 sm:px-10 lg:px-16"
      }
    >
      <Link
        href="/"
        className="font-serif text-lg italic tracking-wide text-cream"
      >
        Maison Fleurie
      </Link>
      <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-cream/70 sm:flex">
        <Link href="/#collections" className="transition-colors hover:text-cream">
          Collections
        </Link>
        <Link href="/journal" className="transition-colors hover:text-cream">
          Journal
        </Link>
        <Link href="/visit" className="transition-colors hover:text-cream">
          Visit
        </Link>
      </nav>
    </header>
  );
}
