import { Metadata } from "next";
import { BlogPageContent } from "@/components/Blog/blog_page_content";
import BlogPageAside from "@/components/Blog/blog_page_aside";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      locale === "ar"
        ? "مدونة طلحاوي صابر التقنية | رؤية في تطوير و هندسة البرمجيات"
        : "Talhaoui Saber's Tech Blog | Insights on Web Development and Software Engineering",
    description:
      locale === "ar"
        ? "اكتشف مقالات مفيدة حول تطوير الويب وهندسة البرمجيات واتجاهات التكنولوجيا من طلحاوي صابر مطور فول ستاك جزائري."
        : "Explore insightful articles on web development, software engineering, and tech trends by Talhaoui Saber, an Algerian fullstack developer.",
  };
}

export interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
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
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    return (await response.json()) as Post[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
      <div className="mb-12 flex min-h-screen flex-col lg:grid lg:grid-cols-4 gap-4">
        <BlogPageAside />
        <BlogPageContent posts={posts} />
      </div>
    </main>
  );
}
