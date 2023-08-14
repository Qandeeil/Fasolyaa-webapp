import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/screens/Security_Privacy.scss";
import { useTranslation } from "react-i18next";

type Props = {};

const Security_Privacy = (props: Props) => {
  const [t, il8n] = useTranslation();
  return (
    <div className="security_Privacy">
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
      <div className={il8n.language == 'en' ? "content" : 'content contentAR'}>
        <h1>{t("Security_Privacy.title")}</h1>
        <p>
          <strong> {t("Security_Privacy.strong1")} </strong>
          {t("Security_Privacy.description1")}
          <strong> {t("Security_Privacy.strong2")} </strong>
          {t("Security_Privacy.description2")}
        </p>
        <h4>
          <li>{t("Security_Privacy.h41")}</li>
        </h4>
        <p>
          {t("Security_Privacy.p1")}
          <h4>
            <li>{t("Security_Privacy.h42")}</li>
          </h4>
          {t("Security_Privacy.p2")}
          <li>{t("Security_Privacy.li1")}</li>
          <li>{t("Security_Privacy.li2")}</li>
          <h4>
            <li>{t("Security_Privacy.h43")}</li>
          </h4>
          <li>{t("Security_Privacy.li3")}</li>
          <h4>
            <li>{t("Security_Privacy.h44")}</li>
          </h4>
          <li>{t("Security_Privacy.li4")}</li>
          <h4>
            <li>{t("Security_Privacy.h45")}</li>
          </h4>
          <li>{t("Security_Privacy.li5")}</li>
          <li>{t("Security_Privacy.li6")}</li>
          <h4>
            <li>{t("Security_Privacy.h46")}</li>
          </h4>
          <p>{t("Security_Privacy.p3")}</p>
          <li>{t("Security_Privacy.li7")}</li>
          <li>{t("Security_Privacy.li8")}</li>
          <li>{t("Security_Privacy.li9")}</li>
          <li>{t("Security_Privacy.li10")}</li>
        </p>
        <p>
          <strong> {t("Security_Privacy.strong3")} </strong>
          {t("Security_Privacy.p4")}
          <strong> {t("Security_Privacy.strong4")} </strong>
          {t("Security_Privacy.p5")}
          <strong> {t("Security_Privacy.strong5")} </strong>
          {t("Security_Privacy.p6")}
        </p>
        <li>{t("Security_Privacy.email")}</li>
        <li>{t("Security_Privacy.Through")}</li>
        <strong style={{ marginTop: "1rem", display: "inline-block" }}>
          {t("Security_Privacy.allRights")}
        </strong>
      </div>

      <Footer t={t} il8n={il8n} />
    </div>
  );
};

export default Security_Privacy;
