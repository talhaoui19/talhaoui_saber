"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import CopyButton from "../copy_button";
import SocialShareButtons from "../social_media_buttons";
import { SocialMediaButtons } from "..";

interface BlogContentProps {
  post: {
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
    createdAt: string;
  };
}

export function BlogContent({ post }: BlogContentProps) {
  const locale = useLocale();
  const t = useTranslations("blog_content");

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
    <>
      <article className="prose w-full max-w-2xl">
        <header className="mb-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <nav className="muted-text flex w-full max-w-2xl select-none gap-2">
            <Link
              className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
              href="/"
            >
              {t("home")}
            </Link>
            <span className="text-sm text-primary-500/50">&gt;</span>
            <Link
              className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
              href="/ar/blog"
            >
              {t("blog")}
            </Link>
            <span className="text-sm text-primary-500/50">&gt;</span>
            <div className="h-fit truncate px-1 text-sm">
              {locale === "ar" ? `${post.titleAr}` : `${post.titleEn}`}
            </div>
          </nav>
          <h1 className="m-0 mb-2">
            {locale === "ar" ? `${post.titleAr}` : `${post.titleEn}`}
          </h1>
          <section className="flex w-full items-center justify-end gap-4 mb-4">
            <SocialMediaButtons />
          </section>
          <div className="flex flex-col justify-between text-xs md:flex-row border-t border-dashed border-light-500 pt-2 dark:border-[#191919]">
            <p className="m-0 w-full text-light-900">
              {t("writed")}{" "}
              <Link
                className="!px-0 font-semibold hover:underline hover:decoration-[#0072d3]"
                href="/"
              >
                {t("saber")}
              </Link>{" "}
              {t("in")}{" "}
              <span className="font-bold text-primary-600">
                {" "}
                {formatDate(post.createdAt)}
              </span>
              .
            </p>
          </div>
        </header>
        <div
          className="prose lg:prose-xl p-1 py-4 sm:p-4"
          dangerouslySetInnerHTML={{
            __html: locale === "ar" ? post.contentAr : post.contentEn,
          }}
        />
        <footer className="mb-10 mt-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <h6 className="pb-4 !text-sm !font-bold !text-dark-900 dark:!text-light-50">
            - {t("share")}{" "}
          </h6>
          <section className="flex w-full items-center justify-evenly gap-4">
            {/* <LovedButton /> */}
            <CopyButton text={post.contentAr} />
            <SocialShareButtons />
          </section>

          <section className="mt-8 border-t border-dashed border-light-500 pt-4 dark:border-dark-700">
            <h6 className="!text-sm !font-bold !text-dark-900 dark:!text-light-50">
              - {t("aboutTitle")}
            </h6>
            <p className="text-sm">{t("aboutContent")}</p>
          </section>
        </footer>
      </article>
    </>
  );
}
