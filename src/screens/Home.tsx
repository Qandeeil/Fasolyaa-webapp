import React, { Fragment, useRef } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import ArabicLanguage from "../components/ArabicLanguage/ArabicLanguage";
import FromFamily from "../components/FromFamily/FromFamily";
import DidYouKnow from "../components/DidYouKnow/DidYouKnow";
import Subscription from "../components/Subscription/Subscription";
import Footer from "../components/Footer/Footer";
import "../styles/screens/Home.scss";
import { useTranslation } from "react-i18next";

type Props = {};

const Home: React.FC<Props> = (props) => {
  const [t, il8n] = useTranslation();
  const arabicLanguageRef = useRef<HTMLDivElement>(null);
  const fromFamilyRef = useRef<HTMLDivElement>(null);
  const didYouKnowRef = useRef<HTMLDivElement>(null);
  const subscriptionRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <div className="headerFixed">
        <Header
          scrollToArabic={() => scrollToRef(arabicLanguageRef)}
          scrollToFromFamily={() => scrollToRef(fromFamilyRef)}
          scrollToDidYouKnow={() => scrollToRef(didYouKnowRef)}
          scrollToSubscription={() => scrollToRef(subscriptionRef)}
          t={t}
          il8n={il8n}
        />
      </div>
      <div style={{ width: "85%", margin: "auto" }}>
        <Slider il8n={il8n}/>
        <div ref={arabicLanguageRef}>
          <ArabicLanguage t={t} />
        </div>
      </div>
      <div ref={fromFamilyRef}>
        <FromFamily t={t} />
      </div>
      <div ref={didYouKnowRef}>
        <DidYouKnow t={t} />
      </div>
      <div ref={subscriptionRef}>
        <Subscription t={t} il8n={il8n} />
      </div>
      <Footer t={t} il8n={il8n}/>
    </Fragment>
  );
};

export default Home;
