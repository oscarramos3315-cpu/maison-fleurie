export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
      <span className="font-serif text-lg italic tracking-wide text-cream">
        Maison Fleurie
      </span>
      <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-cream/70 sm:flex">
        <a href="#collections" className="transition-colors hover:text-cream">
          Collections
        </a>
        <a href="#" className="transition-colors hover:text-cream">
          Journal
        </a>
        <a href="#" className="transition-colors hover:text-cream">
          Visit
        </a>
      </nav>
    </header>
  );
}
