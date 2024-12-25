"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import useHover from "../hooks/useHover";
import { ArabicIcon, EnglishIcon } from "../assets/icons";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const locale = useLocale();
  const pathName = usePathname();
  const locales = ["en", "ar"];

  const changeLanguage = (newLocale: "en" | "ar") => {
    if (!pathName) return `/${newLocale}`;

    const segments = pathName.split("/").filter(Boolean);

    if (locales.includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    if (segments.length === 1) {
      return `/${newLocale}`;
    }

    return `/${segments.join("/")}`;
  };

  return (
    <>
      {locale === "en" && (
        <Link
          href={changeLanguage("ar")}
          className="relative inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-6 w-6"
          data-state="closed"
          onMouseEnter={() => handleMouseEnter("changeToArabic")}
          onMouseLeave={() => handleMouseLeave("changeToArabic")}
        >
          {isHovered.changeToArabic && (
            <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="motion_div header bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
              >
                Change To Arabic
              </motion.div>
            </div>
          )}
          <ArabicIcon />
        </Link>
      )}
      {locale === "ar" && (
        <Link
          href={changeLanguage("en")}
          onMouseEnter={() => handleMouseEnter("changeToEnglish")}
          onMouseLeave={() => handleMouseLeave("changeToEnglish")}
          className="relative inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-6 w-6"
        >
          {isHovered.changeToEnglish && (
            <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="motion_div header bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
              >
                تغيير اللغة إلى الإنجليزية
              </motion.div>
            </div>
          )}
          <EnglishIcon />
        </Link>
      )}
    </>
  );
}
