import { ArrowRight } from "lucide-react";

export default function BlogCard() {
  return (
    <div className="card">
      <div className="h-50 border-b-3 border-black bg-rose-400">
        {/* Image Placeholder */}
      </div>
      <div className="p-5">
        <div className="blog-date mb-2">January 1, 2024</div>
        <h3 className="text-2xl mb-3"> Post Title</h3>
        <p className="mb-5">Post excerpt or summary goes here.</p>
        <a
          className="link inline-flex items-center gap-1 group text-primary hover:text-accent2"
          href="#"
        >
          <span>DETAILS</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
