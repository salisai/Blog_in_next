// src/app/blog/page.js
import BlogGrid from "@/components/BlogGrid";
import posts from "@/data/posts";

export const metadata = {
  title: "All writings",
  description: "Browse all articles",
};

export default function BlogPage() {
  return (
    <section className="mt-8">
      <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
      <BlogGrid posts={posts} />
    </section>
  );
}
