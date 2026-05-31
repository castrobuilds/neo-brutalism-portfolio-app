import { IconRenderer } from "@/utils/IconRenderer";

export default function TechCard({ tech }: { tech: any }) {
  return (
    <div
      key={tech.name}
      className="flex flex-col items-center gap-1 group relative"
    >
      <div
        className={`
                  skill-card flex items-center justify-center w-12 h-12 p-1 text-black! transition-all duration-300 hover:scale-110 hover:bg-background! [&:hover]:text-(--hover-color)!`}
        style={
          {
            backgroundColor: `var(--color-${tech.bgcolor})`,

            color: tech.color,
            "--hover-color": tech.color,
          } as React.CSSProperties
        }
      >
        <IconRenderer iconName={tech.icon} size={30} />
      </div>

      {/* Tooltip on Hover 
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max bg-black text-white text-[10px] px-2 py-1 border border-white z-20">
              {tech.hoverText}
            </span>
            */}
    </div>
  );
}
