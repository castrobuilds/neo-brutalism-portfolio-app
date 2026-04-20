export default function HeroSection() {
  return (
    <section className="relative flex justify-between items-center mb-25 overflow-hidden p-5 border-3 border-black bg-white">
      <div>
        <h2 className="leading-none font-bold text-5xl mb-5">WEB DEVELOPER</h2>
        <p className="text-xl mb-5 pl-4">
          Making web applications with modern technologies.
        </p>
        <button className="relative border-3 border-black bg-blue-500 px-5 py-5 font-bold text-xl overflow-hidden z-10 cursor-pointer">
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
