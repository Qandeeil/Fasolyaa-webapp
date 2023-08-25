import React from "react";
import "../../styles/components/Subscription/Subscription.scss";
import iconCheck from "./icons/check.svg";

type Props = {
  t: any;
  il8n: any;
};

const Subscription = ({ t, il8n }: Props) => {
  const subscrip = [
    {
      id: 1,
      titleSubscriptionPeriod: t("Subscription.titleAnnualSubscription"),
      subtitleSubscriptionPeriod: t("Subscription.automaticallyRenewsSubscription"),
      salary: "39",
      upSalary: "99",
      numberOfDefices: 4,
      createPlaylists: true,
      downloadContent: true,
      shuffle: true,
      repeatForward: true,
      footerText: t("Subscription.allSongs"),
      backgroundColor: "#1CB0DF",
      backgroundColorSalary: "#1CB0DF1C",
      backgroundColorContent: "#F6F7FA",
    },
    {
      id: 2,
      titleSubscriptionPeriod: t("Subscription.title3MonthsSubscription"),
      subtitleSubscriptionPeriod: t("Subscription.automaticallyRenewsSubscription"),
      salary: "11",
      upSalary: "49",
      numberOfDefices: 4,
      createPlaylists: true,
      downloadContent: true,
      shuffle: true,
      repeatForward: true,
      footerText: t("Subscription.allSongs"),
      backgroundColor: "#F69225",
      backgroundColorSalary: "#AC85BC1C",
      backgroundColorContent: "#F6F7FA",
    },
    {
      id: 3,
      titleSubscriptionPeriod: t("Subscription.titleMonthlySubscription"),
      subtitleSubscriptionPeriod: t("Subscription.automaticallyRenewsSubscription"),
      salary: "3",
      upSalary: "99",
      numberOfDefices: 2,
      createPlaylists: true,
      downloadContent: true,
      shuffle: true,
      repeatForward: true,
      footerText: t("Subscription.allSongs"),
      backgroundColor: "rgba(172, 133, 188, 1)",
      backgroundColorSalary: "#AC85BC1C",
      backgroundColorContent: "#F6F7FA",
    },
  ];
  return (
    <div className="subscription">
      {subscrip.map((sub) => (
        <div
          className="card"
          style={{
            borderRadius: "23px",
            borderColor: sub.backgroundColor,
            borderWidth: 1,
            borderStyle: "solid",
          }}
          key={sub.id}
        >
          <div
            className="headerCard"
            style={{
              backgroundColor: sub.backgroundColor,
            }}
          >
            <h2>{sub.titleSubscriptionPeriod}</h2>
            <span>{sub.subtitleSubscriptionPeriod}</span>
          </div>
          <div
            className="salary"
            style={{ backgroundColor: sub.backgroundColorSalary }}
          >
            <h1>
              ${sub.salary}
              <sup>{sub.upSalary}</sup>
            </h1>
          </div>
          <div
            className="advantages"
            style={{ backgroundColor: sub.backgroundColorContent }}
          >
            <div
              className={
                il8n.language == "en"
                  ? "contentAdvantages"
                  : "contentAdvantages contentAdvantagesAR"
              }
            >
              <div className="adv">
                {sub.numberOfDefices ? (
                  <img src={iconCheck} alt="check" width="22px" height="16px" />
                ) : null}
                <span>
                  {t("Subscription.numberOfDevices")} <span>{sub.numberOfDefices}</span>
                </span>
              </div>
              <div className="adv">
                {sub.createPlaylists ? (
                  <img src={iconCheck} alt="check" width="22px" height="16px" />
                ) : null}
                <span>{t("Subscription.downloadContent")}</span>
              </div>
              <div className="adv">
                {sub.downloadContent ? (
                  <img src={iconCheck} alt="check" width="22px" height="16px" />
                ) : null}
                <span>{t("Subscription.shuffle")}</span>
              </div>
              <div className="adv">
                {sub.shuffle ? (
                  <img src={iconCheck} alt="check" width="22px" height="16px" />
                ) : null}
                <span>{t("Subscription.repeat")}</span>
              </div>
              <div className="adv">
                {sub.repeatForward ? (
                  <img src={iconCheck} alt="check" width="22px" height="16px" />
                ) : null}
                <span>{t("Subscription.allSongs")}</span>
              </div>
            </div>
            <div
              className={
                il8n.language == "en" ? "footerText" : "footerText footerTextAR"
              }
            >
              <span>{sub.footerText}</span>
            </div>
          </div>
          <div
            className="footerButton"
            style={{ backgroundColor: sub.backgroundColor }}
          >
            <button>{t("Subscription.bottonSubscribe")}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
