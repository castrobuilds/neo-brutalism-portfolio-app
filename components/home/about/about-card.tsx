import { IconRenderer } from "@/utils/IconRenderer";
import { ArrowRight } from "lucide-react";

export default function AboutCard({ item }: { item: any }) {
  return (
    <div className="p-5 card bg-white">
      <div className="flex items-center gap-2 mb-3">
        <IconRenderer iconName={item.icon} size={28} />
        <h4 className="text-xl">{item.title}</h4>
      </div>

      <p className="mb-4 text-sm text-black/50">{item.description}</p>
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
