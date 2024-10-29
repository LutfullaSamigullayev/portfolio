import { LangSelect } from "./LangSelect";
import { Icons } from "@/Icons/Icons";
import { MenuItems, MenuProps } from "@/types";
import { useTranslations } from "next-intl";

export const Menu = ({ className, onCancel }: MenuProps) => {
  const t = useTranslations("Menu");

  const menuItems: MenuItems[] = [
    {
      id: 1,
      link: "#home",
      title: t("home"),
    },
    {
      id: 2,
      link: "#about",
      title: t("about"),
    },
    {
      id: 3,
      link: "#skills",
      title: t("skills"),
    },
    {
      id: 4,
      link: "#portfolio",
      title: t("porftolio"),
    },
    {
      id: 5,
      link: "#contacts",
      title: t("contacts"),
    },
  ];

  return (
    <div className={`boxMenu ${className ? "open" : ""}`}>
      <div className=" menu containerUz ">
        <ul className="menuItems">
          {menuItems.map((item) => (
            <li key={item.id} className="text-grey font-gilroy-bold">
              <a onClick={onCancel} href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="menuLang">
          <button onClick={onCancel}>
            <Icons.cancel />
          </button>
          <LangSelect />
        </div>
      </div>
    </div>
  );
};
