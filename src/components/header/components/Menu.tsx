import { menuItems } from "@/data/index";
import { LangSelect } from "./LangSelect";
import { Icons } from "@/Icons/Icons";
import { MenuProps } from "@/types";

export const Menu = ({ className, onCancel }: MenuProps) => {
  return (
    <div className={`boxMenu ${className ? "open" : ""}`}>
      <div className=" menu containerUz ">
        <ul className="menuItems">
          {menuItems.map((item) => (
            <li key={item.id} className="text-grey font-gilroy-bold">
              <a onClick={onCancel} href={item.link}>{item.title}</a>
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
