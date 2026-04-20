import FeaturedCard from "@/components/featured-card/page";
import Hero from "@/components/hero/page";
import Philosophy from "@/components/philosophy/page";
import SpecializationCard from "@/components/specialization-card/page";
import Stack from "@/components/stack/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="grid grid-cols-3 gap-5 mb-25">
        <SpecializationCard />
        <SpecializationCard />
        <SpecializationCard />
      </section>
      <Philosophy />

      <section>
        <h2 className="relative inline-block mb-10 text-4xl">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-25">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </section>

      <Stack />
      {/* Projects Section */}
      {/* Blog Section */}
      {/* About Me Section */}
      {/* Footer  */}
    </main>
  );
}
