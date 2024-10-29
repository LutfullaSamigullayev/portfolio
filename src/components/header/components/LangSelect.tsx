import Link from "next/link";
import { getPathname } from "@/utils";
import clsx from "clsx";

export const LangSelect = () => {
  const activeLang = getPathname();

  return (
    <div className="boxLang vertical-text">
      <Link href="/uz">
        <span className={clsx("lang", activeLang === "uz" && "active")}>UZ</span>
      </Link>
      <span className="separator"> | </span>
      <Link href="/ru">
        <span className={clsx("lang", activeLang === "ru" && "active")}>RU</span>
      </Link>
      <span className="separator"> | </span>
      <Link href="/en">
        <span className={clsx("lang", activeLang === "en" && "active")}>EN</span>
      </Link>
    </div>
  );
};
