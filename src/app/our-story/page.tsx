import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/fade-in";
import { BASE_PATH } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Story | Maison Fleurie",
  description:
    "How Maison Fleurie started, and why we still cut and compose every arrangement by hand, in small batches, one season at a time.",
};

export default function OurStoryPage() {
  return (
    <main>
      <SiteHeader variant="solid" />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage-dark">
            Our Story
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Grown from a love of slow things.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mt-10 aspect-16/9 overflow-hidden rounded-sm">
            <Image
              src={`${BASE_PATH}/images/garden-rose.jpg`}
              alt="A wrapped bouquet of pink garden roses with white and gold wildflowers"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-ink/75">
            <p>
              Maison Fleurie began with a simple frustration: most flowers
              arrive already finished, arranged for shelf life rather than
              feeling. We wanted arrangements that looked like they had just
              been cut from someone&apos;s garden — a little wild, a little
              imperfect, entirely alive.
            </p>
            <p>
              So we kept things small. Every order is cut, conditioned, and
              composed by hand in batches, never on an assembly line. We work
              with what&apos;s in season, which means the exact stems in your
              arrangement will shift through the year — but the feeling
              stays the same: unhurried, textured, and a little bit
              editorial.
            </p>
            <p>
              We don&apos;t have a storefront full of ready-made bouquets.
              Instead, we&apos;d rather talk through what you&apos;re
              celebrating, marking, or simply feeling, and build something
              around that.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.26}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/#collections"
              className="inline-flex items-center justify-center rounded-full bg-ink-deep px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-sage-dark"
            >
              Explore the Collection
            </Link>
            <Link
              href="/visit"
              className="text-xs uppercase tracking-[0.25em] text-sage-dark transition-colors duration-300 hover:text-ink"
            >
              Visit the Studio &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  );
}
