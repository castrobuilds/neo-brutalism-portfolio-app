export default function SpecializationCard({
  specialization,
}: {
  specialization: any;
}) {
  return (
    <div className={`card relative z-10 overflow-hidden p-5`}>
      <div
        className="border-t-6 border-solid absolute top-0 left-0 w-full"
        style={{
          borderColor: `var(--color-${specialization.bgColor})`,
          filter: "saturate(1.5)",
        }}
      ></div>
      <div
        className={`text-4xl font-bold mb-5 font-space-mono mt-2 text-${specialization.bgColor} `}
        style={{
          color: `var(--color-${specialization.bgColor})`,
          filter: "saturate(1.5)",
        }}
      >
        {specialization.id}
      </div>
      <h3 className="mb-3">{specialization.title}</h3>
      <p className="mb-5">{specialization.description}</p>
    </div>
  );
}
