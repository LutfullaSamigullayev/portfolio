import { portfolioItems } from "@/data"
import { PortfolioCard } from "./components"

export const Portfolio = () => {
    return (
        <div id="portfolio" className="bg-pink">
            <div className="containerUz section">
                <h1 className="title">Portfolio</h1>
                <br />
                <ul>
                    {portfolioItems.map((portfolio) => (
                        <PortfolioCard key={portfolio.id} {...portfolio} />
                    ))}
                </ul>
            </div>
        </div>
    )
}