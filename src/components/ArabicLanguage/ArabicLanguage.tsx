import React from "react";
import "../../styles/components/ArabicLanguage/ArabicLanguage.scss";

type Props = {
  t: any
};

const ArabicLanguage: React.FC<Props> = ({
  t
}) => {
  const items = [
    {
      id: 1,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/05/songs-1-300x300.png",
      title: t('ArabicLanguage.songs'),
    },
    {
      id: 2,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/05/stories-300x300.png",
      title: t('ArabicLanguage.stories'),
    },
    {
      id: 3,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/05/games-300x300.png",
      title: t('ArabicLanguage.game'),
    },
    {
      id: 4,
      image:
        "https://www.fasolyaa.com/wp-content/uploads/2023/05/prodcast-300x300.png",
        title: t('ArabicLanguage.blogs'),
    },
  ];
  return (
    <div className="arabicLanguage">
      <h1 style={{color: '#fff'}}>.</h1>
      <h1>{t('ArabicLanguage.title')}</h1>
      <p className="descriptionAnimation">{t('ArabicLanguage.description')}</p>
      <div className="containerItems">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="containerImageArabicLanguage">
                <img src={item.image} alt=""/>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicLanguage;
