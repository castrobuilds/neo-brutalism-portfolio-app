import AboutSection from "@/components/home/about/page";
import BlogSection from "@/components/home/blog/page";
import FeaturedSection from "@/components/home/featured/page";
import HeroSection from "@/components/home/hero/page";
import PhilosophySeparator from "@/components/home/philosophy/page";
import ProjectsSection from "@/components/home/projects/page";
import SpecializationSection from "@/components/home/specialization/page";
import StackSection from "@/components/home/stack/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SpecializationSection />
      <PhilosophySeparator />
      <FeaturedSection />
      <StackSection />
      <ProjectsSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
}
