import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    // START CONTACT SECTION
    <section>
      <h3 className="mb-2">{t("title")}</h3>
      <section className="flex items-center gap-3">
        <Link
          className="contact_link inline-flex items-center justify-center gap-3 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
          href={"mailto:talhaoui.sabir@gmail.com"}
          target="_blank"
        >
          {t("link1")}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
          </svg>
        </Link>
        <Link
          className="contact_link inline-flex items-center justify-center gap-3 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
          href="mailto:moncef@selance.com"
        >
          {t("link2")}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
              fill="#000000"
            />
          </svg>
        </Link>
      </section>
    </section>
    // END CONTACT SECTION
  );
}
