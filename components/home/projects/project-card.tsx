import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative h-72 w-full overflow-hidden card">
      <img
        src={project.cover}
        alt={`${project.title} cover`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 z-20 flex flex-col justify-center p-6 bg-secondary translate-y-full transition-transform duration-300 ease-in group-hover:translate-y-0"
        style={{ backgroundColor: `var(--color-${project.color})` }}
      >
        <h3 className="mb-3">{project.title}</h3>
        <p>{project.description}</p>
        <a
          className="link inline-flex items-center gap-1 mt-5 group text-primary hover:text-accent"
          href="#"
        >
          <span>EXPLORE</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
