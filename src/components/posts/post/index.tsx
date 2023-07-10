"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto my-20 container prose prose-lg dark:prose-invert">
      <h1>{post.title}</h1>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}

      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
}
