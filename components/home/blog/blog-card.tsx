export default function BlogCard() {
  return (
    <div className="border-3 border-black bg-white">
      <div className="h-50 border-b-3 border-black bg-rose-400">
        {/* Image Placeholder */}
      </div>
      <div className="p-5">
        <div className="text-sm font-bold mb-2 text-rose-400">Jan 1, 2024</div>
        <h3 className="text-2xl mb-3"> Post Title</h3>
        <p className="mb-5">Post excerpt or summary goes here.</p>
        <a className="font-bold text-black text-sm" href="#">
          READ MORE
        </a>
      </div>
    </div>
  );
}
