import { useTranslations } from "next-intl";

export const About = () => {
  
  const t = useTranslations('AboutPage');
  return (
    <div id="about" className="bg-pink">
      <div className="containerUz section">
        <h1 className="title">{t('about-title')}</h1>
        <br />
        <p className="leading-5">
          {t("about")} <br />
          Hi, I'm Denis - UX/UI designer from Minsk.
          <br />
          I'm interested in design and everything connected with it.
          <br />
          <br />
          I'm studying at courses "Web and mobile design <br />
          interfaces" in IT-Academy.
          <br />
          <br />
          Ready to implement excellent projects
          <br />
          with wonderful people.
          <br />
          {t("title")}
        </p>
      </div>
    </div>
  );
};
