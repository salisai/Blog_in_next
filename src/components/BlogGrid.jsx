'use client'
import BlogCard from "./BlogCard";
import "../styles/BlogGrid.css"; // Import CSS file

export default function BlogGrid({ posts }) {
  return (
    <div className="blog-grid">
      {posts.map((post, index) => (
        <BlogCard key={index} data={post} />
      ))}
    </div>
  );
}
