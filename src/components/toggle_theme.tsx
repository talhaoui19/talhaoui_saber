"use client";

import { MoonIcon, SunIcon } from "@/assets/icons";
import useHover from "@/hooks/useHover";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const locale = useLocale();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (prefersDark) {
      setCurrentTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  const Tooltip = ({ message }: { message: string }) => (
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
        {message}
      </motion.div>
    </div>
  );

  return (
    <button
      className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 active:bg-light-300 h-6 w-6 group relative"
      id="theme"
      name="theme button"
      data-state="closed"
      onClick={toggleTheme}
      aria-label="toggle theme"
      onMouseEnter={() => handleMouseEnter("toggleTheme")}
      onMouseLeave={() => handleMouseLeave("toggleTheme")}
    >
      {currentTheme === "dark" ? (
        <>
          {isHovered.toggleTheme && (
            <Tooltip
              message={
                locale === "ar" ? "تغيير الوضع إلى العادي" : "Light Mode"
              }
            />
          )}
          <SunIcon />
        </>
      ) : (
        <>
          {isHovered.toggleTheme && (
            <Tooltip
              message={locale === "ar" ? "تغيير الوضع إلى المظلم" : "Dark Mode"}
            />
          )}
          <MoonIcon />
        </>
      )}
    </button>
  );
}
