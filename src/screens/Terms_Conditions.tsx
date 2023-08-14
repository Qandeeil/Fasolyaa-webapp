import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/screens/Terms_Condition.scss";
import { useTranslation } from "react-i18next";

type Props = {};

const Terms_Conditions = (props: Props) => {
  const [t, il8n] = useTranslation();
  return (
    <div className="termsCondition">
      <div className="headerFixed">
        <Header
          scrollToArabic={function (): void {}}
          scrollToFromFamily={function (): void {}}
          scrollToDidYouKnow={function (): void {}}
          scrollToSubscription={function (): void {}}
          t={t}
          il8n={il8n}
        />
      </div>
      <div className={il8n.language == 'en' ? "content" : "content contentAR"}>
        <h1>{t("Terms_Conditions.title")}</h1>
        <strong>{t("Terms_Conditions.strong1")}</strong>
        <p>{t("Terms_Conditions.description1")}</p>
        <p>{t("Terms_Conditions.description2")}</p>
        <p>{t("Terms_Conditions.description3")}</p>
        <li>{t("Terms_Conditions.li1")}</li>
        <li>{t("Terms_Conditions.li2")}</li>
        <p>{t("Terms_Conditions.description4")}</p>
        <p>{t("Terms_Conditions.description5")}</p>
        <p>{t("Terms_Conditions.description6")}</p>
        <p>&nbsp;</p>
        <strong>{t("Terms_Conditions.strong2")}</strong>
        <p>{t("Terms_Conditions.description7")}</p>
        <p>{t("Terms_Conditions.description8")}</p>
        <p>{t("Terms_Conditions.description9")}</p>
        <p>{t("Terms_Conditions.description11")}</p>
        <p>{t("Terms_Conditions.description12")}</p>
        <strong>{t("Terms_Conditions.strong3")}</strong>
        <p>{t("Terms_Conditions.description17")}</p>
        <p>
          {t("Terms_Conditions.description13")}
          <br />
          {t("Terms_Conditions.description131")}
        </p>
        <p>{t("Terms_Conditions.description132")}</p>
        <ul>
          <li>{t("Terms_Conditions.li101")}</li>
          <li>{t("Terms_Conditions.li102")}</li>
          <li>{t("Terms_Conditions.li103")}</li>
          <li>{t("Terms_Conditions.li104")}</li>
          <li>{t("Terms_Conditions.li105")}</li>
          <li>{t("Terms_Conditions.li106")}</li>
          <li>{t("Terms_Conditions.li107")}</li>
        </ul>
        <strong>{t("Terms_Conditions.strong6")}</strong>
        <p>{t("Terms_Conditions.description18")}</p>
        <ul>
          <li>{t("Terms_Conditions.li3")}</li>
          <li>{t("Terms_Conditions.li4")}</li>
          <li>{t("Terms_Conditions.li5")}</li>
          <li>{t("Terms_Conditions.li6")}</li>
          <li>{t("Terms_Conditions.li7")}</li>
          <li>{t("Terms_Conditions.li8")}</li>
          <li>{t("Terms_Conditions.li9")}</li>
          <li>{t("Terms_Conditions.li10")}</li>
        </ul>
        <strong>{t("Terms_Conditions.strong4")}</strong>
        <p>{t("Terms_Conditions.description14")}</p>
        <ul>
          <li>{t("Terms_Conditions.li11")}</li>
          <li>{t("Terms_Conditions.li12")}</li>
          <li>{t("Terms_Conditions.li13")}</li>
          <li>{t("Terms_Conditions.li14")}</li>
          <li>{t("Terms_Conditions.li15")}</li>
          <li>{t("Terms_Conditions.li16")}</li>
        </ul>
        <p>{t("Terms_Conditions.description15")}</p>
        <strong>{t("Terms_Conditions.strong5")}</strong>
        <p>
          {t("Terms_Conditions.description16")}
          <br />
          {t("Terms_Conditions.description161")}
          <br />
          {t("Terms_Conditions.description162")}
        </p>
        <strong>{t("Terms_Conditions.strong7")}</strong>
        <p>{t("Terms_Conditions.description19")}</p>
        <p>{t("Terms_Conditions.description20")}</p>
        <p>{t("Terms_Conditions.description10")}</p>
        <strong>{t("Terms_Conditions.strong8")}</strong>
        <p>{t("Terms_Conditions.description21")}</p>
        <strong>{t("Terms_Conditions.strong9")}</strong>
        <p>{t("Terms_Conditions.description23")}</p>
        <strong>{t("Terms_Conditions.strong10")}</strong>
        <p>{t("Terms_Conditions.description25")}</p>
        <strong>{t("Terms_Conditions.strong11")}</strong>
        <p>{t("Terms_Conditions.description26")}</p>
        <p>{t("Terms_Conditions.description27")}</p>
      </div>
      <Footer t={t} il8n={il8n} />
    </div>
  );
};

export default Terms_Conditions;
