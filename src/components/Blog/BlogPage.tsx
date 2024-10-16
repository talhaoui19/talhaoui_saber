// BlogPage.js (Server Component)

import BlogClient from "./BlogClient";

async function fetchPosts() {
  const response = await fetch("https://talhaoui-saber-s.vercel.app/api/posts", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default async function BlogPage() {
  const post = await fetchPosts();

  return <BlogClient posts={post} />;
}
