import React from "react";
import "../../styles/components/FromFamily/FromFamily.scss";

type Props = {
  t: any;
};

const FromFamily: React.FC<Props> = ({ t }) => {
  const items = [
    {
      id: 1,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56029-300x300.png",
      title: t("FromFamily.enrichingQualitys"),
    },
    {
      id: 2,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56030-300x300.png",
      title: t("FromFamily.speech"),
    },
    {
      id: 3,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56031-300x300.png",
      title: t("FromFamily.listeningAbilities"),
    },
    {
      id: 4,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56032-300x300.png",
      title: t("FromFamily.concentrationSkills"),
    },
    {
      id: 5,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56036-300x300.png",
      title: t("FromFamily.arabicVocabulary"),
    },
    {
      id: 6,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56034-300x300.png",
      title: t("FromFamily.learningInAnew"),
    },
    {
      id: 7,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56033-300x300.png",
      title: t("FromFamily.childEyes"),
    },
    {
      id: 8,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/06/Group-56035-300x300.png",
      title: t("FromFamily.generalKnowledge"),
    },
  ];
  return (
    <div className="fromFamily">
      <div className="containerContent">
        <h1>{t('FromFamily.title')}</h1>
        <p>{t('FromFamily.description')}</p>
        <div className="containerItems">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div className="containerImageArabicLanguage">
                <img src={item.image} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FromFamily;
