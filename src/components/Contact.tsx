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
          className="contact_link inline-flex items-center justify-center gap-2 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
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
          className="contact_link inline-flex items-center justify-center gap-2 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
          href="#"
        >
          {t("link2")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                className="fill-[#555555] dark:fill-[#ffffff]"
              />{" "}
              <path
                d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                className="fill-[#555555] dark:fill-[#ffffff]"
              />{" "}
            </g>
          </svg>
        </Link>
      </section>
    </section>
    // END CONTACT SECTION
  );
}
