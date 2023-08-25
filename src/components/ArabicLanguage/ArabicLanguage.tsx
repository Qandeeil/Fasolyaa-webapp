import React from "react";
import "../../styles/components/ArabicLanguage/ArabicLanguage.scss";
import Mice from "./icon/Mice.svg";
import Blogs from "./icon/Blogs.svg";
import Question from "./icon/Question.svg";
import Songs from "./icon/Songs.svg";

type Props = {
  t: any;
};

const ArabicLanguage: React.FC<Props> = ({ t }) => {
  const items = [
    {
      id: 1,
      image: Songs,
      title: t("ArabicLanguage.songs"),
      backgroundColor: '#FF8625',
    },
    {
      id: 2,
      image: Blogs,
      title: t("ArabicLanguage.stories"),
      backgroundColor: '#9FD657',
    },
    {
      id: 3,
      image: Question,
      title: t("ArabicLanguage.game"),
      backgroundColor: '#FF6652',
    },
    {
      id: 4,
      image: Mice,
      title: t("ArabicLanguage.blogs"),
      backgroundColor: '#77C8F4',
    },
  ];
  return (
    <div className="arabicLanguage">
      <h1 style={{ color: "#fff" }}>.</h1>
      <h1>{t("ArabicLanguage.title")}</h1>
      <p className="descriptionAnimation">{t("ArabicLanguage.description")}</p>
      <div className="containerItems">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="containerImageArabicLanguage">
              <div className="backgroundImage" style={{backgroundColor: item.backgroundColor}}></div>
              <img src={item.image} alt="" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicLanguage;
