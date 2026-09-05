import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/fade-in";
import { whatsappVisitLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Visit | Maison Fleurie",
  description:
    "Studio hours and how to arrange a visit to Maison Fleurie, by appointment.",
};

const hours = [{ day: "Tuesday – Saturday", time: "10:00am – 5:00pm" }];

export default function VisitPage() {
  return (
    <main>
      <SiteHeader variant="solid" />

      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage-dark">
            Visit
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Come see us in person.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
            The studio is open by appointment, so we can give your order —
            and your questions — proper attention. Reach out on WhatsApp and
            we&apos;ll find a time that works; we&apos;ll share the address
            once your visit is scheduled.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-12">
            <span className="text-xs uppercase tracking-[0.3em] text-sage-dark">
              Hours
            </span>
            <dl className="mt-3 flex flex-col gap-1.5 text-base text-ink">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-6">
                  <dt className="text-ink/70">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>

        <FadeIn delay={0.22}>
          <a
            href={whatsappVisitLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-ink-deep px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-sage-dark"
          >
            Arrange a Visit via WhatsApp
          </a>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  );
}
