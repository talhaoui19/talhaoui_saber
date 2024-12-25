import { BlogContent } from "@/components/Blog/blog_content";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: any };
}): Promise<Metadata> {
  const post = await fetchPost(id);

  return {
    title:
      locale === "ar"
        ? `${post?.titleAr.slice(0, 29)}... | مدونة طلحاوي صابر التقنية`
        : post?.titleEn,
  };
}

async function fetchPost(id: string): Promise<Post | null> {
  const baseUrl = process.env.BASE_URL;
  const localUrl = process.env.LOCAL_URL;
  const response = await fetch(
    process.env.NODE_ENV === "production"
      ? `${baseUrl}api/posts/${id}`
      : `${localUrl}api/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // FETCH POST
  const post = await fetchPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
        <div className="flex min-h-[60vh] w-full items-center justify-center py-6 xs:py-10">
          <BlogContent post={post} />
          <div
            className="fixed inset-0 h-1 origin-[0%] bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500"
            style={{ transform: "scaleX(0) translateZ(0px)" }}
          />
        </div>
      </main>
    </>
  );
}
