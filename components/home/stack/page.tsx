import StackCard from "./stack-card";

export default function StackSection({ skills }: { skills: any }) {
  return (
    <section className="mb-25">
      <h2 className="section-title mb-10">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-5">
        {skills.map((skill: any) => (
          <StackCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
