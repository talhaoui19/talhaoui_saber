import BlogClient from "./blog_section_client";

async function fetchPosts() {
  const baseUrl = process.env.BASE_URL;
  const localUrl = process.env.LOCAL_URL;
  const response = await fetch(
    process.env.NODE_ENV === "production"
      ? `${baseUrl}api/posts`
      : `${localUrl}api/posts`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default async function BlogPage() {
  const post = await fetchPosts();

  return <BlogClient posts={post} />;
}
