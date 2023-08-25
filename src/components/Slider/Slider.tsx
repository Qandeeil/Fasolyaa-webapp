import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderReact from "react-slick";
import "../../styles/components/Slider/Slider.scss";

type Props = {
  il8n: any;
};

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): any;
};

const Slider = ({ il8n }: Props) => {
  const [wordIndex, setWordIndex] = useState(0);

  const imagesEN = require.context("./BannerEN", true);
  const imageListEN = imagesEN.keys().map((image: any) => imagesEN(image));

  const imagesAR = require.context("./BannerAR", true);
  const imageListAR = imagesAR.keys().map((image: any) => imagesAR(image));

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
          {il8n.language == "en"
            ? imageListEN.map((image: any, i: React.Key | null | undefined) => (
                <img src={image} key={i} alt={`Image ${i}`} />
              ))
            : imageListAR.map((image: any, i: React.Key | null | undefined) => (
                <img src={image} key={i} alt={`Image ${i}`} />
              ))}
        </SliderReact>
      </div>
    </div>
  );
};

export default Slider;
