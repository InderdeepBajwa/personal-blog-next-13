import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto">
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
      <section className="text-center">
        <Link href="/blog" className="underline">
          Latest Posts From Me
        </Link>
      </section>
    </main>
  );
}
