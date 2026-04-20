import BlogCard from "./blog-card";

export default function Blog() {
  return (
    <section className="mb-25">
      <h2 className="text-4xl mb-10 relative inline-block">Blog</h2>
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
