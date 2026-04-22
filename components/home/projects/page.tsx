import ProjectCard from "./project-card";

export default function ProjectsSection({ projects }: { projects: any }) {
  return (
    <section>
      <h2 className="section-title mb-10 ">Projects</h2>
      <div className="grid grid-cols-4 gap-5 mb-25">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
