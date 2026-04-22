import AboutSection from "@/components/home/about/page";
import BlogSection from "@/components/home/blog/page";
import FeaturedSection from "@/components/home/featured/page";
import HeroSection from "@/components/home/hero/page";
import PhilosophySeparator from "@/components/home/philosophy/page";
import ProjectsSection from "@/components/home/projects/page";
import SpecializationSection from "@/components/home/specialization/page";
import StackSection from "@/components/home/stack/page";

export default function Home({
  skills,
  specializations,
  about,
  projects,
  featured,
}: {
  skills: any;
  specializations: any;
  about: any;
  projects: any;
  featured: any;
}) {
  return (
    <main>
      <HeroSection />
      <SpecializationSection specializations={specializations} />
      <PhilosophySeparator />
      <FeaturedSection featured={featured} />
      <StackSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogSection />
      <AboutSection about={about} />
    </main>
  );
}
