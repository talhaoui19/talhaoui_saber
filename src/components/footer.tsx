"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import useHover from "@/hooks/useHover";
import { socialLinks } from "@/contents/scoial_links";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    // START FOOTER SECTION
    <>
      <section className="flex flex-col items-center justify-between gap-3 border-y border-light-400 bg-primary-500 bg-newsback px-6 py-6 pb-8 lg:py-3 text-dark-900 dark:border-dark-700 dark:bg-primary-500/80 sm:h-24 sm:flex-row sm:px-12 md:px-16 lg:px-36">
        <h3 className="text-xl font-semibold text-white">{t("title")}</h3>
        <form className="flex w-full items-center sm:w-fit">
          <input
            className={`flex w-full rounded bg-light-300 px-3 py-2 text-sm text-dark-500 ring-offset-light-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light-950 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-light-500 dark:ring-offset-dark-500 dark:placeholder:text-dark-50 h-10 ${
              locale === "ar" ? "rounded-l-none" : "rounded-r-none"
            }`}
            dir="ltr"
            placeholder="example@gmail.com"
            aria-invalid="false"
            type="email"
            name="email"
          />
          <button
            className={`inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#f5f5f5] hover:bg-light-400 text-dark-500 hover:text-dark-600 active:text-dark-900 active:bg-light-300 px-4 py-2 h-10 ${
              locale === "ar" ? "rounded-r-none" : "rounded-l-none"
            }`}
            type="submit"
          >
            {t("link")}
          </button>
        </form>
      </section>
      <footer className="relative px-6 py-6 sm:px-12 md:px-16 lg:px-36">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="relative z-10 flex gap-4">
            {socialLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  target="_blank"
                  className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8"
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link.name.toLowerCase())}
                  onMouseLeave={() => handleMouseLeave(link.name.toLowerCase())}
                >
                  {link.icon}
                </Link>
                {isHovered[link.name.toLowerCase()] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div absolute top-[-35px] left-[-50%] bg-white text-black text-xs font-semibold py-1 px-2 rounded shadow-lg"
                  >
                    {link.name}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-dark-50">
            {t("copyRight")}
          </div>
        </div>
      </footer>
    </>
    // END FOOTER SECTION
  );
}
