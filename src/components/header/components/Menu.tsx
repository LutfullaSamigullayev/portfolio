// "use client";

import { menuItems } from "@/data/index";
// import { toggleMenu } from "@/redux/slices/menuSlice";
// import { RootState } from "@/redux/store";
// import { useDispatch, useSelector } from "react-redux";

export const Menu = () => {

  // const dispatch = useDispatch();
  // const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  // const handleToggle = () => {
  //   dispatch(toggleMenu());
  // };

  return (
    <div className="from-slate-50	 fixed z-20 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1228px] px-4 backdrop-blur-sm  max-[375px]:hidden">
      <div className="containerUz !px-0 py-8 border-b border-grey">
        <ul className="flex justify-between"
          // ${isOpen ? 'flex-col absolute top-0 left-0 w-full h-screen bg-white z-30' : 'hidden md:flex'}
          >
          {menuItems.map((item) => (
            <li key={item.id} className="text-grey font-gilroy-bold">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* {isOpen && (
        <button className="fixed inset-0 bg-black opacity-50 z-20" onClick={handleToggle}>
          x
        </button>
      )} */}
    </div>
  );
};
