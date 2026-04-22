import FeaturedCard from "./feature-card";

export default function FeaturedSection({ featured }: { featured: any }) {
  return (
    <section>
      <h2 className="section-title mb-10">Featured Projects</h2>
      <div className="grid grid-cols-2 gap-5 mb-25">
        {featured.map((project: any) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
