import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Journal | Maison Fleurie",
  description:
    "Notes from the Maison Fleurie studio on seasonal flowers, care, and arranging.",
};

const entries = [
  {
    date: "March 2026",
    title: "Why we stopped using floral foam",
    excerpt:
      "A short note on why every arrangement now leaves the studio foam-free — and what we use instead to keep stems hydrated in transit.",
  },
  {
    date: "January 2026",
    title: "Reading the season before the catalog",
    excerpt:
      "How we plan collections around what's actually blooming nearby, rather than what a wholesale list says is available.",
  },
  {
    date: "November 2025",
    title: "Caring for peonies once they're home",
    excerpt:
      "Three small habits — water changes, stem trims, and cool nights — that noticeably extend a peony's life on your table.",
  },
];

export default function JournalPage() {
  return (
    <main>
      <SiteHeader variant="solid" />

      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage-dark">
            Journal
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Notes from the studio.
          </h1>
        </FadeIn>

        <div className="mt-14 flex flex-col divide-y divide-ink/10">
          {entries.map((entry, index) => (
            <FadeIn key={entry.title} delay={index * 0.1}>
              <article className="py-8 first:pt-0">
                <span className="text-xs uppercase tracking-[0.25em] text-sage-dark">
                  {entry.date}
                </span>
                <h2 className="mt-2 font-serif text-2xl text-ink">
                  {entry.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {entry.excerpt}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
