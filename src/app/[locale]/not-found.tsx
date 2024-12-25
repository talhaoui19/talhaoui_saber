"use client";

import { useLocale, useTranslations } from "next-intl";
import "../globals.css";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("not_found");
  const router = useRouter();
  const pathname = usePathname();
  const handleGoBack = () => {
    const newPath = pathname.split("/").slice(0, -1).join("/") || "/";
    router.push(newPath);
  };
  return (
    // START NOT FOUND PAGE
    <main className="px-6 pt-20 sm:px-12 md:px-16 lg:px-36">
      <div className="prose min-h-[60vh]">
        <div className="flex items-center gap-2">
          <h2>#</h2>
          <h2>{t("title")}</h2>
        </div>

        <p className="mt-2">{t("message")}</p>
        <div className="poppins flex items-center prose mx-auto mt-8 mb-8">
          <br />
          {locale === "en" && <span dir="ltr">&gt; </span>}
          <button
            dir="ltr"
            className="border-b border-[rgba(125, 125, 125, .3)] hover:border-[#555] text-[#868686] hover:text-[#555] ml-2 transition-all"
            onClick={handleGoBack}
          >
            cd
            <span className="ml-3">. .</span>
          </button>
          {locale === "ar" && <span dir="ltr">&gt; </span>}
        </div>
      </div>
    </main>

    // END NOT FOUND PAGE
  );
}
