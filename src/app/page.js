import Hero from "@/components/Hero";
import posts from "@/data/posts";
import BlogGrid from "@/components/BlogGrid";
import Aboutme from "@/components/Aboutme.jsx"
export default function Home() {
  const latestPosts = posts.slice(0, 6);

  return (
    <section>
      <Hero/>
      <div className="mt-12">
        <h2 className="text-center font-bold text-[24px]">My Writings</h2>
        <BlogGrid posts={latestPosts}/>
      </div>
      <Aboutme/>
    </section>
  );
  
}
