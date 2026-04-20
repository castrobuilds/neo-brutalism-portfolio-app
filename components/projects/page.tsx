import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl mb-10 relative inline-block">Projects</h2>
      <div className="grid grid-cols-4 gap-5 mb-25">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
