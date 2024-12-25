"use client";

import {
  ToggleTheme,
  LanguageSwitcher,
  PhoneMenu,
  BlogLink,
} from "@/components";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    // START HEADER SECTION
    <>
      <header className="top-0 z-50 flex h-14 w-full items-center justify-between px-6 sm:px-12 md:px-16 lg:px-36">
        <div className="logo_name text-[#0d0d0d] dark:text-[#ffff] rounded-full transition-colors duration-75 hover:bg-primary-500/50 dark:hover:bg-dark-700/50 hover:text-white">
          <Link
            className={`logo_name_link text-xl ${
              locale === "ar" ? "mb-2" : ""
            }`}
            href="/"
          >
            {t("title")}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <BlogLink />
          <ToggleTheme />
          <LanguageSwitcher />
          <PhoneMenu />
        </div>
      </header>
    </>
    // END HEADER SECTION
  );
}
