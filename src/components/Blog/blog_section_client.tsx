"use client";

import { MoreIcon } from "@/assets/icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClientComponent({ posts }: BlogClientProps) {
  const locale = useLocale();
  const t = useTranslations("blog");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "ar" ? "ar-EG" : "en-US",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
  };
  return (
    <section className="relative flex min-h-screen w-full flex-col gap-5 overflow-hidden rounded px-6 py-10 sm:px-20 lg:px-32 xl:px-64">
      <h3 className="label-text mb-2 font-semibold">
        {t("title")}
        {/* */} :
      </h3>
      <section className="flex w-full flex-col items-center">
        <main className="grid w-full border-dashed lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group flex w-full max-w-2xl border-collapse overflow-hidden border-b border-dashed border-light-400 transition-all duration-75 hover:bg-white dark:border-dark-700 dark:hover:bg-dark-800 lg:border"
            >
              <main className="flex w-full flex-col justify-between p-4">
                <header>
                  <Link href={`/blog/${post._id}`}>
                    <h2 className="line-clamp-4 text-xl font-semibold text-dark-500 transition-all duration-75 hover:text-dark-950 dark:text-light-100 dark:hover:text-primary-500 sm:text-3xl">
                      {locale === "ar" ? `${post.titleAr}` : `${post.titleEn}`}
                    </h2>
                  </Link>
                  <div
                    className="label-text mb-2 mt-1 line-clamp-2 text-sm"
                    dangerouslySetInnerHTML={{
                      __html:
                        locale === "ar"
                          ? `${post.contentAr}...`
                          : `${post.contentEn}...`,
                    }}
                  />
                </header>
                <footer className="flex w-full items-center justify-between">
                  <p className="muted-text text-xs font-light">
                    {t("writed")}
                    {/* */}{" "}
                    <span className="font-bold text-dark-500 dark:text-primary-500">
                      {locale === "ar" ? "صابر" : "Saber"}
                      {/* */}{" "}
                    </span>
                    <span className="text-[0.6rem]">
                      {locale === "ar" ? "في" : "in"}
                      {/* */} {/* */}
                      {formatDate(post.createdAt)}
                    </span>
                  </p>
                  <section className="flex">
                    <Link
                      className="muted-text group flex w-fit items-center gap-1 !text-xs decoration-light-950 decoration-dashed underline-offset-2 transition-all duration-100 hover:decoration-black hover:underline-offset-2 active:decoration-dark-500 group-hover:underline dark:decoration-dark-50 dark:hover:decoration-light-950 dark:active:decoration-light-500"
                      href={`/blog/${post._id}`}
                    >
                      <p className="m-0 text-xs">
                        {" "}
                        {t("readMore")}
                        {/* */}{" "}
                      </p>
                      <MoreIcon />
                    </Link>
                  </section>
                </footer>
              </main>
            </article>
          ))}
        </main>
      </section>
    </section>
  );
}
