import SpecializationCard from "./specialization-card";

export default function SpecializationSection() {
  return (
    <section className="grid grid-cols-3 gap-5 mb-25">
      <SpecializationCard />
      <SpecializationCard />
      <SpecializationCard />
    </section>
  );
}
