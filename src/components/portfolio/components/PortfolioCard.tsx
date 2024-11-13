import { PortfolioItems } from "@/types";
import Image from "next/image";

export const PortfolioCard = ({ title, image, link, desc }: PortfolioItems) => {
  return (
    <div className="w-full py-12 max-[375px]:py-8">
      <div className="h-fit overflow-hidden">
        <Image
          width={1228}
          height={672}
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="py-8 max-[375px]:py-4">{desc}</p>
      <a className="hover:underline" href={link}>
        {title}
      </a>
    </div>
  );
};
