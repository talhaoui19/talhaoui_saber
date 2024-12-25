import { motion } from "framer-motion";
import useHover from "@/hooks/useHover";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BlogIcon } from "@/assets/icons";

export default function BlogLink() {
  const t = useTranslations("header");
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <section className="hidden items-center justify-center gap-3 lg:flex">
      <Link
        className="relative flex items-center gap-2 font-semibold text-dark-50 transition-colors duration-100 hover:text-dark-400 active:text-dark-900 dark:text-dark-50 dark:hover:text-light-950 active:dark:text-primary-500"
        href="/blog"
        onMouseEnter={() => handleMouseEnter("blog")}
        onMouseLeave={() => handleMouseLeave("blog")}
      >
        {isHovered.blog && (
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
              {t("blog")}
            </motion.div>
          </div>
        )}
        <BlogIcon />
      </Link>
    </section>
  );
}
