import { PortfolioItems } from "@/types"

export const PortfolioCard = ({title, image, link, desc}: PortfolioItems) => {
    return (
        <div className="w-full py-12 max-[375px]:py-8">
            <div className="h-fit overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-contain"/>
            </div>
            <p className="py-8 max-[375px]:py-4">{desc}</p>
            <a href={link}>{title}</a>
        </div>
    )
}