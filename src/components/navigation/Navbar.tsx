import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-sm mx-auto my-5">
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
  );
}
