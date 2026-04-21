import { ArrowRight } from "lucide-react";

export default function AboutCard() {
  return (
    <div className="p-5 card bg-white">
      <h4 className="text-xl mb-2">More About Me</h4>
      <p className="mb-4 text-sm text-black/50">
        What I do, my passions, and what drives me in the world of software
        development.
      </p>
      <a
        className="link inline-flex items-center gap-1 group text-accent2 hover:text-primary"
        href="#"
      >
        <span>DETAILS</span>
        <ArrowRight size={18} />
      </a>
    </div>
  );
}
