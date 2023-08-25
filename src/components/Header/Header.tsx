import React, { useState } from "react";
import Logo from "./images/Logo.png";
import { NavLink } from "react-router-dom";
import "../../styles/components/Header/Header.scss";
import useLocalStorage from "use-local-storage";
import PopPup from "../PopPup/PopPup";
import closeIcon from "./images/close.svg";

type Props = {
  scrollToArabic: () => void;
  scrollToFromFamily: () => void;
  scrollToDidYouKnow: () => void;
  // scrollToSubscription: () => void;
  t: any;
  il8n: any;
};

const Header: React.FC<Props> = ({
  scrollToArabic,
  scrollToFromFamily,
  scrollToDidYouKnow,
  // scrollToSubscription,
  t,
  il8n,
}) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [showMessageSubscription, setShowMessageSubscription] = useState(false);

  const handleLanguageChange = () => {
    if (il8n.language === "en") {
      il8n.changeLanguage("ar");
      setLanguage("ar");
    } else {
      il8n.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <div className={il8n.language === "en" ? "header" : "header headerAR"}>
      <div className="containerLogo">
        <NavLink to={"/"}>
          <img src={Logo} alt="logo fasolyaa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/#" onClick={scrollToArabic}>
              {t("Header.theApplication")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/#" onClick={scrollToFromFamily}>
              {t("Header.USP")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/#" onClick={scrollToDidYouKnow}>
              {t("Header.didYouKnow")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/#" onClick={() => setShowMessageSubscription(true)}>
              {t("Header.subscription")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="containerSignin">
        <a
          href={`https://webapp.fasolyaa.com/log-in?lang=${
            il8n.language === "en" ? "en" : "ar"
          }`}
        >
          {t("Header.signIn")}
        </a>
        <NavLink to="/" onClick={handleLanguageChange}>
          {il8n.language === "en" ? "العربية" : "English"}
        </NavLink>
      </div>
      <PopPup showMessage={showMessageSubscription}>
        <div className="popPup-inner">
          <div
            className="close"
            onClick={() => setShowMessageSubscription(false)}
          >
            <img src={closeIcon} alt="close" />
          </div>
          <div className="logo">
            <img src={Logo} alt="logo fasolyaa" />
          </div>
          <div className="contetnTitle">
            <h1>Subscribe to Fasolyaa</h1>
            <p>Currently, you cannot subscribe to through our application</p>
          </div>
          <div className="downloadApp">
            <NavLink to="">
              <img
                src="https://fasolyaa.com/wp-content/uploads/elementor/thumbs/fasolyaa-play-storee-q8ttoirozanclg5rht6cobvyle28id4slcu93g5b3o.png"
                alt="Google play"
              />
            </NavLink>
            <NavLink to="">
              <img
                src="https://fasolyaa.com/wp-content/uploads/elementor/thumbs/fasolyaa-appstore-q8ttongvxgts7hyxqd7hisp9kbf2kunga03ohtyc8k.png"
                alt="App Store"
              />
            </NavLink>
          </div>
        </div>
      </PopPup>
    </div>
  );
};

export default Header;
