import React from "react";
import "../styles/screens/Cookie_Policy.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

type Props = {};

const Cookie_Policy = (props: Props) => {
  const [t, il8n] = useTranslation();
  return (
    <div className="cookiePolicy">
      <div className="headerFixed">
        <Header
          scrollToArabic={function (): void {}}
          scrollToFromFamily={function (): void {}}
          scrollToDidYouKnow={function (): void {}}
          // scrollToSubscription={function (): void {}}
          t={t}
          il8n={il8n}
        />
      </div>
      <div className={il8n.language == 'en' ? "content" : "content contentAR"}>
        <h1>{t("Cookie_Policy.title")}</h1>
        <p>{t("Cookie_Policy.description1")}</p>
        <p>{t("Cookie_Policy.description2")}</p>
        <p>{t("Cookie_Policy.description3")}</p>
        <p>{t("Cookie_Policy.description4")}</p>
        <strong>{t("Cookie_Policy.strong1")}</strong>
        <p>{t("Cookie_Policy.description5")}</p>
        <p>
          <strong>{t("Cookie_Policy.strong2")}</strong> {t("Cookie_Policy.description6")}
        </p>
        <strong>{t("Cookie_Policy.strong3")}</strong>
        <p>{t("Cookie_Policy.description7")}</p>
        <ol>
          <li>
          {t("Cookie_Policy.li1")}
          </li>
          <li>
          {t("Cookie_Policy.li2")}
          </li>
          <li>
          {t("Cookie_Policy.li3")}
          </li>
          <li>
          {t("Cookie_Policy.li4")}
          </li>
          <li>
          {t("Cookie_Policy.li5")}
          </li>
        </ol>
        <strong>{t('Cookie_Policy.strong4')}</strong>
        <p>
        {t('Cookie_Policy.description8')}
        </p>
        <p>
        {t('Cookie_Policy.description9')}
        </p>
        <p>
        {t('Cookie_Policy.description10')}
        </p>
        <strong>{t('Cookie_Policy.strong5')}</strong>
        <p>
          {t('Cookie_Policy.description11')}
        </p>
        <p>
          {t('Cookie_Policy.description12')}
        </p>
        <p>
          {t('Cookie_Policy.description13')}
        </p>
        <strong>{t('Cookie_Policy.strong6')}</strong>
      </div>
      <Footer t={t} il8n={il8n} />
    </div>
  );
};

export default Cookie_Policy;
