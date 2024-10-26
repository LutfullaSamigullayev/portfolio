import { Icons } from "@/Icons/Icons";
import { LangSelect, Menu } from "./components";

export const Header = () => {

  return (
    <div>
      <Menu />
      <div
        id="home"
        className="containerUz py-24 max-[375px]:pt-5 max-[375px]:pb-20"
      >
        <div className="w-full max-[375px]:flex max-[375px]:justify-between py-10">
          <div className="flex max-[375px]:flex-col justify-between items-end max-[375px]:items-start ">
            <h1 className="text-5xl font-gilroy-bold">
              Denis <br /> Novik
            </h1>
            <p>
              UX | UI designer <br />
              24 years old, Minsk
            </p>
            <div className="block max-[375px]:hidden ">
              <LangSelect />
            </div>
          </div>
          <button className="hidden h-fit max-[375px]:block">
            {<Icons.burger width={30} height={30} />}
          </button>
        </div>
        <div className="w-full h-96 overflow-hidden">
          <img
            src="/header.jpg"
            alt="author"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
