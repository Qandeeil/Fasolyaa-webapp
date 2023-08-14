import React, { Fragment } from "react";
import "../../styles/components/Footer/Footer.scss";
import { NavLink } from "react-router-dom";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import youtube from "./icons/youtube.svg";
import email from "./icons/email.svg";

type Props = {
  t: any,
  il8n: any
};

const Footer = ({t,il8n}: Props) => {
  return (
    <Fragment>
      <div className="footer">
        <div className={il8n.language == 'en' ? "container" : 'container containerAR'}>
          <div className="leftFooter">
            <div className="SitePolicies">
              <NavLink to="/Security_Privacy">{t('Footer.Security_Privacy')}</NavLink>
              <NavLink to="/Terms_Conditions">{t('Footer.Terms_Conditions')}</NavLink>
              <NavLink to="/Cookie_Policy">{t('Footer.Cookie_Policy')}</NavLink>
            </div>
            <div className="downloadApp">
              <NavLink to="https://play.google.com/store/apps/details?id=com.fasolyaa.app">
                <img
                  src="https://fasolyaa.com/wp-content/uploads/elementor/thumbs/fasolyaa-play-storee-q8ttoirozanclg5rht6cobvyle28id4slcu93g5b3o.png"
                  alt="Google play"
                />
              </NavLink>
              <NavLink to="https://apps.apple.com/us/app/fasolyaa/id1583543822">
                <img
                  src="https://fasolyaa.com/wp-content/uploads/elementor/thumbs/fasolyaa-appstore-q8ttongvxgts7hyxqd7hisp9kbf2kunga03ohtyc8k.png"
                  alt="App Store"
                />
              </NavLink>
            </div>
          </div>
          <div className="rightFooter">
            <NavLink to="https://www.facebook.com/fasolyaafam">
              <img src={facebook} alt="Fascebook" width="33px" height="33px" />
            </NavLink>
            <NavLink to="https://www.instagram.com/fasolyaafam/">
              <img src={instagram} alt="Instagram" width="33px" height="33px" />
            </NavLink>
            <NavLink to="https://www.youtube.com/channel/UC6DUvZiTCJiPp_wE1yn_VzQ">
              <img src={youtube} alt="Youtube" width="33px" height="33px" />
            </NavLink>
            <NavLink to="mailto:recipient@example.com">
              <img src={email} alt="Email" width="33px" height="33px" />
            </NavLink>
          </div>
        </div>
      </div>
      <p style={{
        textAlign: 'center',
        color: '#312858',
        paddingTop: 7,
        paddingBottom: 7,
        fontSize: 14
      }}>All Rights Reserved. ©FA SOL YAA 2023</p>
    </Fragment>
  );
};

export default Footer;
