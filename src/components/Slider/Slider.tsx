import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderReact from "react-slick";
import "../../styles/components/Slider/Slider.scss";

type Props = {
  il8n: any;
};

const Slider = ({ il8n }: Props) => {
  const sliderImagesEN = [
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/in-our-beloved-arabic-1.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/cherished-moments-with-your-children.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/away-from-screen-time.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/anywhere-everywhere-1.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/audio-application.jpg",
    },
  ];
  const sliderImagesAR = [
    {
      url: "https://fasolyaa.com/wp-content/uploads/2023/05/باللغة-العربية.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/اوقات-ثمينة-مع-اطفالكم.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/بعيدا-عن-الشاشات.jpg",
    },
    {
      url:
        "https://fasolyaa.com/wp-content/uploads/2023/05/في-اي-وقت-وفي-اي-مكان.jpg",
    },
    {
      url: "https://fasolyaa.com/wp-content/uploads/2023/05/تطبيق-صوتي-1.jpg",
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
    <div className="slider">
      <div className="SliderReact">
        <SliderReact {...settings}>
          {il8n.language == 'en' ? sliderImagesEN.map((image, i) => (
            <img src={image.url} key={i} alt={`Image ${i}`} />
          )) : sliderImagesAR.map((image, i) => (
            <img src={image.url} key={i} alt={`Image ${i}`} />
          ))}
        </SliderReact>
      </div>
    </div>
  );
};

export default Slider;
