import { Hero } from "@/components/hero";
import { FeaturedCollections } from "@/components/featured-collections";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollections />
      <SiteFooter />
    </main>
  );
}
