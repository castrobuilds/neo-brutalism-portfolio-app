export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="card relative h-72 overflow-hidden">
      <div className="bg-rose-400 h-42 border-b-3 border-black"></div>
      <div className="p-5 ">
        <h3 className="mb-3">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
