// "use client";

import { menuItems } from "@/data/index";
import { LangSelect } from "./LangSelect";
import { Icons } from "@/Icons/Icons";

export const Menu = () => {

  return (
    <div className="boxMenu open">
      <div className=" menu containerUz ">
        <ul className="menuItems"
          >
          {menuItems.map((item) => (
            <li key={item.id} className="text-grey font-gilroy-bold">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="menuLang">
          <button><Icons.cancel /></button>
              <LangSelect />
            </div>
      </div>
    </div>
  );
};
