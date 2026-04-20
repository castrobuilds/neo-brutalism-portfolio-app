import StackCard from "./stack-card";

export default function Stack() {
  return (
    <section className="mb-25">
      <h2 className="text-4xl mb-10 relative inline-block">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-5">
        <StackCard />
        <StackCard />
        <StackCard />
        <StackCard />
      </div>
    </section>
  );
}
