import FeaturedCard from "./feature-card";

export default function FeaturedSection() {
  return (
    <section>
      <h2 className="relative inline-block mb-10 text-4xl">
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-5 mb-25">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
}
