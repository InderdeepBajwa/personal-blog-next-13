import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto">
      <section className="space-y-16 my-20">
        <h1 className="font-bold text-2xl">
          Software Engineer | Multi-Disciplinary Specialist | Startup Enthusiast
        </h1>
        <p>
          I am a software engineer creating compelling software solutions with a
          multi-disciplinary approach for disruptive startups & challenging
          businesses.
        </p>
        <p>💼 I work at Paychex Inc as a Software Engineer.</p>
        <a
          href="https://cal.com/inderdeepsingh"
          className="block bg-gray-900 w-full text-center py-4"
        >
          Schedule A Virtual Coffee Chat
        </a>
      </section>
      <section>
        <h2>Latest Blog Posts</h2>
        <p>Coming soon...</p>
      </section>
    </main>
  );
}
