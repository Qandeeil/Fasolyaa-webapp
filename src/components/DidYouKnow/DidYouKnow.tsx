import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../styles/components/DidYouKnow/DidYouKnow.scss";

type Props = {
  t: any;
};

const DidYouKnow: React.FC<Props> = ({ t }) => {
  const words = [
    {
      id: 0,
      value: t('DidYouKnow.descriptionOne'),
      color: `rgb(0,208,130)`,
    },
    {
      id: 1,
      value: t('DidYouKnow.descriptionTow'),
      color: "rgba(6,147,227,1)",
    },
    {
      id: 2,
      value: t('DidYouKnow.descriptionThree'),
      color: "rgba(255,105,0,1)",
    },
  ];

  const [wordIndex, setWordIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: any, next: any) => setWordIndex(next),
  };

  return (
    <div className="didYouKnow">
      <div className="slider-container">
        <Slider {...settings}>
          {words.map((word, i) => (
            <div className="slide" key={i}>
              <div
                style={{
                  backgroundColor: word.color,
                  borderBottomRightRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
                className="contentBox"
              >
                <h1>{t('DidYouKnow.title')}</h1>
                <p>{word.value}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DidYouKnow;
