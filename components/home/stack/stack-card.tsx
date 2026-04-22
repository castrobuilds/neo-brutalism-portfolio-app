"use client";

import { IconRenderer } from "@/utils/IconRenderer";
import * as LucideIcons from "lucide-react";
import TechCard from "./tech-card";

export default function StackCard({ skill }: { skill: any }) {
  const CategoryIcon = (LucideIcons as any)[skill.icon];

  return (
    <div className="relative p-5 z-10 bg-white card">
      <div className="flex justify-center items-center w-16 h-16 border-3 border-black bg-accent mb-5">
        <CategoryIcon size={32} />
      </div>
      <h3 className="text-2xl mb-3">{skill.categoryName}</h3>
      <div className="flex flex-wrap justify-start gap-3">
        {skill.technologies.map((tech: any) => {
          return <TechCard key={tech.name} tech={tech} />;
        })}
      </div>
    </div>
  );
}
