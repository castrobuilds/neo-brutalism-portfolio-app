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
<<<<<<< HEAD
    <div className="relative max-w-300 mx-auto px-5 ">
      <div
        className="hidden
  bg-accent bg-accent1 bg-accent2
  bg-accent3 bg-accent4 bg-accent5"
      />
=======
    <div className="relative max-w-300 mx-auto px-5">
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
      <NavBar />
      <Home
        skills={skillData}
        specializations={specializations}
        about={aboutData}
<<<<<<< HEAD
        projects={projectsData}
        //projects={projectsData.filter((project) => project.featured === "false",)}
        //featured={projectsData.filter((project) => project.featured === "true")}
=======
        projects={projectsData.filter(
          (project) => project.featured === "false",
        )}
        featured={projectsData.filter((project) => project.featured === "true")}
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
      />
      <Footer />
    </div>
  );
}
