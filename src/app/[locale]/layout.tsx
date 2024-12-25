import "../globals.css";
import { Header, ProgressBar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    icons: {
      icon: "/favicon.png",
    },
    title:
      locale === "ar"
        ? " طلحاوي صابر | مبرمج مواقع و مدون تقني"
        : "Talhaoui Saber | Fullstack Devloper",
    description:
      locale === "ar"
        ? "مطور برمجيات من الجزائر متخصص في تطوير الويب و هندسة البرمجيات والتدوين التقني."
        : "Experienced Fullstack Developer from Algeria specializing in web development, software engineering, and tech blogging.",
    keywords:
      "مطور فول ستاك, مطور جزائري, تطوير الويب, هندسة البرمجيات, مدون تقني",
    creator: "Talhaoui Saber",
    robots: "index, follow",
    category: "Technology",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-light-50 text-dark-50 selection:bg-dark-500/60 selection:text-light-500 selection:backdrop-blur-md dark:bg-dark-900 dark:text-light-500 dark:selection:bg-dark-500/50 dark:selection:text-primary-500 __className_e2db9d">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <ProgressBar />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
