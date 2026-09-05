import Link from "next/link";
import { whatsappGeneralLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="font-serif text-lg italic text-cream">
            Maison Fleurie
          </span>
          <p className="mt-3 text-sm leading-relaxed text-cream/50">
            Seasonal, small-batch florals — cut, composed, and delivered by
            hand.
          </p>
        </div>

        <div className="flex gap-16 text-xs uppercase tracking-[0.25em] text-cream/60">
          <div className="flex flex-col gap-3">
            <span className="text-cream/35">Shop</span>
            <Link href="/#collections" className="transition-colors hover:text-cream">
              Collections
            </Link>
            <Link href="/gift-cards" className="transition-colors hover:text-cream">
              Gift Cards
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-cream/35">Studio</span>
            <Link href="/our-story" className="transition-colors hover:text-cream">
              Our Story
            </Link>
            <Link href="/visit" className="transition-colors hover:text-cream">
              Visit
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-cream/35">Contact</span>
            <a
              href={whatsappGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-6xl text-[11px] uppercase tracking-[0.2em] text-cream/30">
        &copy; {new Date().getFullYear()} Maison Fleurie
      </p>
    </footer>
  );
}
