"use client";
import { BlogIconMenu, CloseIcon, HomeIcon, MenuIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function PhoneMenu() {
  const tMenu = useTranslations("menu");
  const [ShowMenuphone, setShowMenuphone] = useState(true);
  const ShowMenuphoneClick = () => {
    setShowMenuphone(!ShowMenuphone);
  };
  return (
    <>
      <button
        type="button"
        onClick={() => {
          ShowMenuphoneClick();
        }}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R14mbtta:"
        data-state="closed"
        className="items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8 flex lg:hidden"
      >
        {ShowMenuphone ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div
        role="dialog"
        id="radix-:R14mbtta:"
        aria-describedby="radix-:R14mbttaH2:"
        aria-labelledby="radix-:R14mbttaH1:"
        data-state="open"
        className="phoneMenu absolute z-50 popover-bg border-dashed border-light-200 dark:border-dark-700 label-text transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-2/6 w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm flex flex-col gap-0 px-3 pt-14 lg:hidden"
        tabIndex={-1}
        style={{
          top: ShowMenuphone ? "-660px" : "50px",
          opacity: ShowMenuphone ? "0" : "1",
        }}
      >
        <Link
          className="link flex h-10 items-center gap-3 border-b border-dashed border-light-200 px-3 text-lg transition-all duration-75 dark:border-dark-700"
          href={"/"}
        >
          <HomeIcon />
          <span className="text-center">{tMenu("home")}</span>
        </Link>
        <Link
          className="link flex h-10 items-center gap-3 border-b border-dashed border-light-200 px-3 text-lg transition-all duration-75 dark:border-dark-700"
          href={"/ar/blog"}
        >
          <BlogIconMenu />
          <span className="text-center"> {tMenu("blog")}</span>
        </Link>
      </div>
    </>
  );
}
