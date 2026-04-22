import { aboutData } from "@/data/aboutme";
import AboutCard from "./about-card";
import { IconRenderer } from "@/utils/IconRenderer";

export default function AboutSection({ about }: { about: any }) {
  return (
    <section className="mb-25">
      <h2 className="section-title mb-10">About Me</h2>
      <div className="flex justify-between gap-12">
        {/* About Me Content */}
        <div className="card w-1/2 p-10 bg-accent2! saturate-200 text-white">
          <h3 className="text-4xl! mb-10 ">Hi, I'm {aboutData.main.name}</h3>
          {aboutData.main.bio.map((paragraph: string, index: number) => (
            <p key={index} className="font-inter! text-xl! font-semibold! mb-4">
              {paragraph}
            </p>
          ))}
          <button className="btn relative bg-white! overflow-hidden z-10 mt-5">
            Contact Me
          </button>
          <div className="flex flex-wrap gap-2 mt-10">
            {aboutData.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link mr-5"
              >
                <IconRenderer
                  iconName={social.icon}
                  size={40}
                  color={social.color}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          {aboutData.timeline.map((item) => (
            <AboutCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
