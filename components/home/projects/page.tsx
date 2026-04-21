import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section>
      <h2 className="section-title mb-10 ">Projects</h2>
      <div className="grid grid-cols-4 gap-5 mb-25">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
