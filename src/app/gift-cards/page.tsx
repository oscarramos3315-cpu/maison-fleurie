import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/fade-in";
import { whatsappGiftCardLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Gift Cards | Maison Fleurie",
  description:
    "Send a Maison Fleurie gift card — the recipient chooses their own arrangement when they're ready.",
};

const amounts = [75, 150, 250];

export default function GiftCardsPage() {
  return (
    <main>
      <SiteHeader variant="solid" />

      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage-dark">
            Gift Cards
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Give the gift of flowers.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
            A Maison Fleurie gift card lets someone choose their own
            arrangement, whenever they&apos;re ready. Pick an amount below
            and we&apos;ll take it from there over WhatsApp.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {amounts.map((amount, index) => (
            <FadeIn key={amount} delay={index * 0.1}>
              <div className="flex flex-col items-center gap-4 rounded-sm border border-ink/10 px-6 py-10 text-center">
                <span className="font-serif text-3xl text-ink">
                  ${amount}
                </span>
                <a
                  href={whatsappGiftCardLink(amount)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-sage-dark underline decoration-sage-dark/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  Order via WhatsApp
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-sm text-ink/60">
            Looking for a different amount? Mention it in your message and
            we&apos;ll sort out the details with you directly.
          </p>
        </FadeIn>
      </section>

      <SiteFooter />
    </main>
  );
}
