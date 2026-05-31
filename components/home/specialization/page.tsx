import SpecializationCard from "./specialization-card";

export default function SpecializationSection({
  specializations,
}: {
  specializations: any;
}) {
  return (
    <section className="grid grid-cols-3 gap-5 mb-25">
      {specializations.map((specialization: any, index: number) => (
        <SpecializationCard key={index} specialization={specialization} />
      ))}
    </section>
  );
}
