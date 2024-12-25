import { Blog, Contact, Hero, Projects, Tools } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    /* START HOME PAGE */
    <>
      <Head>
        <link rel="icon" href="./favicon.png" type="image/png" />
        <link href="https://fonts.cdnfonts.com/css/gistesy" rel="stylesheet" />
      </Head>
      <main className="relative flex min-h-screen w-full flex-col gap-5 overflow-hidden rounded px-6 pt-10 sm:px-20 md:pt-20 lg:px-32 xl:px-64">
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Blog />
    </>
    /* END HOME PAGE */
  );
}
