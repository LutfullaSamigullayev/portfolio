import { menuItems } from "@/data";
import { LangSelect } from "./LangSelect";
import { Icons } from "@/Icons/Icons";
import { MenuProps } from "@/types";
import { useTranslations } from "next-intl";

export const Menu = ({ className, onCancel }: MenuProps) => {
  const t = useTranslations("Menu");

  return (
    <div className={`boxMenu ${className ? "open" : ""}`}>
      <div className="menu containerUz">
        <ul className="menuItems">
          {menuItems.map((item) => (
            <li key={item.id} className="text-grey font-gilroy-bold">
              <a onClick={onCancel} href={item.link}>
                {t(item.title)}
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
