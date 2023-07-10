import Link from "next/link";

// TEMP post list page
const POSTS = [
  {
    id: 1,
    title: "Test Post",
    slug: "test-post",
    date: "2021-01-01",
    content: "Test post content",
  },
  {
    id: 2,
    title: "Test Post 2",
    slug: "test-post-2",
    date: "2021-01-01",
    content: "Test post content",
  },
];

export default function Blog() {
  return (
    <main className="max-w-sm mx-auto">
      <section>
        <header className="my-10">
          <h1 className="text-2xl">Latest Posts</h1>
        </header>
        {POSTS.map((post) => (
          <Link href="#" key={post.id}>
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
