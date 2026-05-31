import BlogCard from "./blog-card";

export default function BlogSection() {
  return (
    <section className="mb-25">
      <h2 className="section-title mb-10">Blog</h2>
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
