import Hero from "@/components/Hero";
import posts from "@/data/posts";
import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  const latestPosts = posts.slice(0, 6);

  return (
    <section>
      <Hero/>
      <div className="mt-12">
        <h2>My Writings</h2>
        <BlogGrid posts={latestPosts}/>
      </div>
    </section>
  );
  
}
