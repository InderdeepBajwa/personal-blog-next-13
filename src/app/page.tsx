import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto space-y-20">
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
        <h2 className="text-2xl">Companies I Worked With:</h2>
        <ul>
          <li>Paychex Inc.</li>
          <li>Microsoft</li>
          <li>National Science Foundation</li>
          <li>State University of New York</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl">Startups That I Have Advised:</h2>
        <ul>
          <li>Aphinity Inc.</li>
          <li>MetaDock</li>
          <li>ZubAir</li>
          <li>Bond Insurance</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl">Mentoring & Speaking</h2>
        <ul>
          <li>
            Mentor at HackMIT 2019 as a part of the Microsoft mentorship team
          </li>
          <li>
            Speaker at Microsoft Ignite 2020 for Github Spaces (pre-launch)
          </li>
        </ul>
      </section>
      <section className="text-center">
        <Link href="/blog" className="underline">
          Latest Posts From Me
        </Link>
      </section>
    </main>
  );
}
