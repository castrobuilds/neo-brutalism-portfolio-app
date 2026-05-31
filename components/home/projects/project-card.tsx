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
<<<<<<< HEAD
        <h3 className="mb-3 shrink-0 line-clamp-2">{project.title}</h3>
        <div className="grow">
          <p className="line-clamp-4">{project.description}</p>
        </div>
        <a
          className="link inline-flex items-center gap-1 mt-auto group text-primary hover:text-accent"
=======
        <h3 className="mb-3">{project.title}</h3>
        <p>{project.description}</p>
        <a
          className="link inline-flex items-center gap-1 mt-5 group text-primary hover:text-accent"
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
          href="#"
        >
          <span>EXPLORE</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
