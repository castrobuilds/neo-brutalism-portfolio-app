"use server";

import Footer from "@/components/footer/page";
import NavBar from "@/components/nav-bar/page";
import Home from "@/contents/home/page";

import { skillData } from "@/data/skills";
import { specializations } from "@/data/specializations";
import { aboutData } from "@/data/aboutme";
import { projectsData } from "@/data/projects";

export default async function App() {
  return (
    <div className="relative max-w-300 mx-auto px-5">
      <NavBar />
      <Home
        skills={skillData}
        specializations={specializations}
        about={aboutData}
        projects={projectsData.filter(
          (project) => project.featured === "false",
        )}
        featured={projectsData.filter((project) => project.featured === "true")}
      />
      <Footer />
    </div>
  );
}
