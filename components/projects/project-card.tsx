export default function ProjectCard() {
  return (
    <div className="relative h-72 border-3 border-black overflow-hidden">
      <div className="bg-rose-400 h-42 border-b-3 border-black"></div>
      <div className="p-5 ">
        <h3 className="text-2xl mb-3">Project</h3>
        <p className="text-sm">Description of the project goes here.</p>
      </div>
    </div>
  );
}
