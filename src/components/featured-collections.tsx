import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { whatsappOrderLink } from "@/lib/whatsapp";

const collections = [
  {
    name: "The Ivory Peony",
    price: 145,
    tag: "Seasonal",
    image: "/images/ivory-peony.jpg",
    alt: "Close-up of a single blush pink peony bloom",
  },
  {
    name: "The Wild Sage",
    price: 185,
    tag: "Best Seller",
    image: "/images/wild-sage.jpg",
    alt: "White ranunculus with eucalyptus greenery against a teal wall",
  },
  {
    name: "The Garden Rose",
    price: 225,
    tag: "Limited",
    image: "/images/garden-rose.jpg",
    alt: "A wrapped bouquet of pink garden roses with white and gold wildflowers",
  },
] as const;

export function FeaturedCollections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto mb-16 max-w-xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage-dark">
          Featured Collections
        </span>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Arrangements for the everyday and the exceptional
        </h2>
      </FadeIn>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.12}>
            <article className="group flex flex-col">
              <div className="relative mb-5 aspect-4/5 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ink">{item.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-sage-dark">
                From ${item.price}
              </p>
              <a
                href={whatsappOrderLink(item.name, item.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-3 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink underline decoration-sage-dark/40 underline-offset-4 transition-colors duration-300 hover:decoration-ink"
              >
                Order via WhatsApp
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
