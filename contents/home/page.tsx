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
<<<<<<< HEAD
=======
  featured,
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
}: {
  skills: any;
  specializations: any;
  about: any;
  projects: any;
<<<<<<< HEAD
=======
  featured: any;
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
}) {
  return (
    <main>
      <HeroSection />
      <SpecializationSection specializations={specializations} />
<<<<<<< HEAD
      {/* <PhilosophySeparator /> */}
      {/*<FeaturedSection featured={featured} />*/}
      <ProjectsSection projects={projects} />
      <StackSection skills={skills} />

      {/*  <BlogSection /> COMING SOON */}
=======
      <PhilosophySeparator />
      <FeaturedSection featured={featured} />
      <StackSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogSection />
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
      <AboutSection about={about} />
    </main>
  );
}
