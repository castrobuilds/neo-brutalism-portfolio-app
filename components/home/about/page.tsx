import AboutCard from "./about-card";

export default function AboutSection() {
  return (
    <section className="mb-25">
      <h2 className="relative inline-block text-5xl mb-10">About Me</h2>
      <div className="flex justify-between gap-12">
        {/* About Me Content */}
        <div className="w-1/2 p-10 bg-rose-400 border-3 border-black ">
          <h3 className="text-3xl mb-5">Hi, I'm Tiago Castro</h3>
          <p className="text-lg mb-8">
            I'm a passionate software developer with a love for creating
            innovative solutions.
          </p>
          <button className="relative px-4 py-2 bg-white border-3 border-black text-lg font-bold cursor-pointer overflow-hidden z-10">
            Contact Me
          </button>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </section>
  );
}
