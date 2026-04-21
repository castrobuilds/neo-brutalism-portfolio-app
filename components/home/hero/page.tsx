export default function HeroSection() {
  return (
    <section className="relative flex justify-between items-center mb-25 overflow-hidden p-10 border-3 border-black bg-white">
      <div>
        <h1 className="hero-title mb-5">WEB DEVELOPER</h1>
        <p className="hero-text mb-5 pl-4">
          Making web applications with modern technologies.
        </p>
        <button className="btn relative overflow-hidden z-10">
          Contact me
        </button>
      </div>
      <div className="relative">
        <img
          src="/images/hero-image.png"
          alt="Hero Image"
          className="w-75 h-75 object-cover bg-amber-100 border-3 border-black overflow-hidden"
        />
      </div>
    </section>
  );
}
