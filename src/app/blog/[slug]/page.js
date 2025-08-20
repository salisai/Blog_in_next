import posts from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";


export async function generateStaticParams(){
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({params}){
    const post = posts.find((p) => p.slug === params.slug);

    if(!post){
        return notFound();
    }

    return (
        <article className="prose dark:prose-invert max-w-3xl mx-auto py-12">
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="rounded-xl mb-8"
                />
            )}

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{post.content}</p>

        </article>
    )
}