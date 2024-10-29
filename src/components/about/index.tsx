import { getLocale, getTranslations } from "next-intl/server";

export const About = async () => {

  const locale = await getLocale() // nextjs ning ozida use client qilmasdan pathname olish
  const isRussian = locale == "ru"
  const userName = isRussian ? "Денис" : "Denis";

  const t = await getTranslations('AboutPage'); // agar funksiya async bo'lsa getTranstaion ishlatiladi await bilan

  return (
    <div id="about" className="bg-pink">
      <div className="containerUz section">
        <h1 className="title">{t('title')}</h1>
        <br />
        <p className="leading-5">
          {t("about", {name: userName})}
          <br />
          {t("interes")}
          <br />
          {t("student")}
          <br />
          {t("implement")}
        </p>
      </div>
    </div>
  );
};
