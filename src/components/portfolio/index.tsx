import { portfolioItems } from "@/data";
import { PortfolioCard } from "./components";
import { useTranslations } from "next-intl";

export const Portfolio = () => {
  const t = useTranslations("PortfolioPage");

  return (
    <div id="portfolio" className="bg-pink dark:bg-zinc-900">
      <div className="containerUz section">
        <h1 className="title">{t("title")}</h1>
        <br />
        <ul>
          {portfolioItems.map((portfolio) => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </ul>
      </div>
    </div>
  );
};
