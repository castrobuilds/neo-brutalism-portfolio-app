import Hero from "@/components/hero/page";
import Philosophy from "@/components/philosophy/page";
import SpecializationCard from "@/components/specialization-card/page";

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

      {/* Featured Section */}
      {/* Stack Section */}
      {/* Projects Section */}
      {/* Blog Section */}
      {/* About Me Section */}
      {/* Footer  */}
    </main>
  );
}
