import Link from "next/link";
import type { SanityDocument } from "next-sanity";
import { cachedClient } from "../../../sanity/lib/client";
import { postsQuery } from "../../../sanity/lib/queries";
import Posts from "@blog/components/posts/posts";

export default async function Blog() {
  const posts = await cachedClient(postsQuery);

  return <Posts posts={posts} />;
}
