import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1 post` : `${posts.length} posts`;

  return (
    <main className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto">
      <section>
        <header className="my-10">
          <h1 className="text-2xl">{title}</h1>
        </header>
        {posts.map((post: SanityDocument) => (
          <Link href={`/blog/${post.slug.current}`} key={post.id}>
            <article className="mb-8 bg-gray-900 p-6 shadow-lg space-y-2">
              <header>
                <h2 className="font-bold">{post.title}</h2>
              </header>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-200">{post.content}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
