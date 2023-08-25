import React, { Fragment, useRef } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/screens/Page404.scss";
import { NavLink } from "react-router-dom";

type Props = {};

const Page404 = (props: Props) => {
  const [t, il8n] = useTranslation();

  return (
    <Fragment>
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
      <div className="containerPage404">
        <h1 className="number404">404</h1>
        <div className="content">
          <h1 className="title">Oops...</h1>
          <p className="page_description">
            We're sorry, but <br />
            something went wrong.
          </p>
          <NavLink to={"/"}>الرئيسية</NavLink>
        </div>
      </div>
      <Footer t={t} il8n={il8n} />
    </Fragment>
  );
};

export default Page404;
