import { Icons } from "@/Icons/Icons";

export const BurgerMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="hidden h-fit max-[375px]:block">
      {<Icons.burger width={30} height={30} />}
    </button>
  );
};
