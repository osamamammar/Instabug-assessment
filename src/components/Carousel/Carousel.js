import React, { useEffect, useState } from "react";
import Dots from "./Dots/Dots";
import SliderContent from "./SliderContent/SliderContent";
import { sliderImages } from "./SliderImages/SliderImages";
import "./Carousel.scss";
import { useMatchMediaQuery } from "../../hooks";

const Carousel = () => {
  const length = sliderImages.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMatched } = useMatchMediaQuery();

  useEffect(() => {
    let interval;
    if (isMatched) {
      interval = setInterval(() => {
        setActiveIndex((activeIndex) =>
          activeIndex === length ? 0 : activeIndex + 1
        );
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [activeIndex, length, isMatched]);

  return (
    <>
      <SliderContent
        activeIndex={activeIndex}
        sliderImages={sliderImages}
      ></SliderContent>

      <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      ></Dots>
    </>
  );
};

export default Carousel;
