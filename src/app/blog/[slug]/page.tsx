import Post from "@blog/components/posts/post";
import { QueryParams, SanityDocument } from "next-sanity";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { cachedClient } from "../../../../sanity/lib/client";

export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery);

  return posts;
}

export default async function BlogPost({ params }: { params: QueryParams }) {
  const post = await cachedClient<SanityDocument>(postQuery, params);

  return <Post post={post} />;
}
