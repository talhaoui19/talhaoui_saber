"use client";

import { MoreIcon } from "@/assets/icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";


interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

interface BlogPageContentProps {
  posts: Post[];
}

export function BlogPageContent({ posts }: BlogPageContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (id) => {
    setCopied((prevState) => ({ ...prevState, [id]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [id]: false }));
    }, 3000);
  };


  const locale = useLocale();
  const t = useTranslations("blog_content");

  const getTitle = (posts: Post) =>
    locale === "ar" ? posts.titleAr : posts.titleEn;
  const getContent = (posts: Post) =>
    locale === "ar" ? posts.contentAr : posts.contentEn;

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
    <main className="col-span-4 flex w-full max-w-2xl flex-col border-t border-dashed border-light-400 dark:border-dark-700 lg:col-span-3 lg:border-x lg:border-t-0 xl:col-span-2">
      {posts.map((post) => (
        <article
          key={post._id}
          className="group flex w-full max-w-2xl overflow-hidden border-b border-dashed border-light-400 transition-all duration-75 hover:bg-white dark:border-dark-700 dark:hover:bg-dark-800"
        >
          <main className="flex w-full flex-col justify-between p-4">
            <header>
              <Link href={`/blog/${post._id}`}>
                <h2 className="line-clamp-4 text-xl font-semibold text-dark-500 transition-all duration-75 hover:text-dark-950 dark:text-light-100 dark:hover:text-primary-500 sm:text-3xl">
                  {getTitle(post)}
                </h2>
              </Link>
              <div
                className="label-text mb-2 mt-1 line-clamp-2 text-sm"
                dangerouslySetInnerHTML={{ __html: `${getContent(post)}...` }}
              />
            </header>
            <footer className="flex w-full items-center justify-between">
              <p className="muted-text text-xs font-light">
                {t("writed")}{" "}
                <span className="font-bold text-dark-500 dark:text-primary-500">
                  {t("saber")}{" "}
                </span>
                <span className="text-[0.6rem]">
                  {t("in")} {formatDate(post.createdAt)}
                </span>
              </p>
              <section className="flex">
                <Link
                  className="muted-text group flex w-fit items-center gap-1 !text-xs decoration-light-950 decoration-dashed underline-offset-2 transition-all duration-100 hover:decoration-dark-50 hover:underline-offset-2 active:decoration-dark-500 group-hover:underline dark:decoration-dark-50 dark:hover:decoration-light-950 dark:active:decoration-light-500"
                  href={`/blog/${post._id}`}
                >
                  <p className="m-0 text-xs">
                    {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                  </p>
                  <MoreIcon />
                </Link>
              </section>
            </footer>
          </main>
        </article>
      ))}
    </main>
  );
}
