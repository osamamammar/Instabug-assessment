import React from "react";

const SliderContent = ({ activeIndex, sliderImages }) => {
  return (
    <div className="carousel__contents">
      {sliderImages.map((slide, index) => {
        return (
          <figure
            key={index}
            className={`carousel__slide ${
              index === activeIndex ? "carousel__slide--active" : "inactive"
            }`}
          >
            <img
              src={slide.image}
              alt="img"
              width={slide.width}
              height={slide.height}
            />
            <figcaption>{slide.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default SliderContent;
