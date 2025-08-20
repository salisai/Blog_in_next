'use client'
// components/BlogGrid.jsx
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {posts.map((post, index) => (
        <BlogCard key={index} data={post} />
      ))}
    </div>
  );
}
