import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SiteHeader } from "@/components/site-header";
import { BASE_PATH } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative w-full bg-ink-deep">
      <SiteHeader />

      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center gap-7 px-6 py-28 sm:px-10 lg:px-16 lg:py-32">
          <FadeIn>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold-light">
              Small-Batch Florals
            </span>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="max-w-lg font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
              Flowers, arranged{" "}
              <span className="italic text-gold-light">slowly</span>.
            </h1>
          </FadeIn>

          <FadeIn delay={0.24}>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-cream/65">
              Small-batch, seasonal arrangements cut and composed by hand —
              for the moments that deserve to be marked properly.
            </p>
          </FadeIn>

          <FadeIn delay={0.36}>
            <div className="mt-3 flex flex-wrap items-center gap-6">
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-full bg-gold-light px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-ink-deep transition-colors duration-300 hover:bg-cream"
              >
                Explore the Collection
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                Our Story
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative min-h-[420px] lg:min-h-0">
          <Image
            src={`${BASE_PATH}/images/hero-peony.jpg`}
            alt="A hand-tied bouquet of pink and white peonies and roses"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent"
          />
        </FadeIn>
      </div>
    </section>
  );
}
