export default function FeaturedCard({ project }: { project: any }) {
  return (
    <div className="card">
      <div
        className="h-60 border-b-3 border-black"
        style={{ backgroundColor: `var(--color-${project.color})` }}
      >
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h3 className="p-5 text-2xl bg-white">{project.title}</h3>
    </div>
  );
}
