import { Icons } from "@/Icons/Icons";
import { useTranslations } from "next-intl";

export const Contacts = () => {
  const t = useTranslations("ContactsPage");

  return (
    <div id="contacts" className="containerUz section">
      <h1 className="title">{t("title")}</h1>
      <p className="py-5">
        {t("chat")}
        <br />
        {t("wellcome")}
      </p>
      <button className="bg-black text-white  dark:bg-white dark:text-black font-gilroy-bold rounded-full px-6 py-3 max-[375px]:w-full hover:text-opacity-60 transition-all ">
        {t("send")}
      </button>
      <div className="flex items-center gap-x-16 justify-center pt-20 max-[375px]:pt-12 max-[375px]:gap-x-1 max-[375px]:justify-between">
        <Icons.linkedIn />
        <Icons.instagram />
        <Icons.behance />
        <Icons.dribble />
      </div>
      <p className="pt-10 text-grey">
        {t("like")}
        <br />
        LinkedIn, Instagram, Behance, Dribble
      </p>
    </div>
  );
};
