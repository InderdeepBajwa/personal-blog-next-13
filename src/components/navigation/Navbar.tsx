import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <p className="bg-gray-800 text-center p-4">
        WIP: This Website Is Mobile Only At The Moment
      </p>
      <nav className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto my-5">
        <ul className="flex justify-between">
          <li className="font-bold">
            <Link href="/">Inder Singh</Link>
          </li>
          <li className="underline">
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a href="https://cal.com/inderdeepsingh">Meet W/ Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
