import React from "react";

const SliderContent = ({ activeIndex, sliderImages }) => {
  return (
    <ul className="carousel__contents">
      {sliderImages.map((slide, index) => {
        return (
          <li
            key={index}
            className={`carousel__slide ${
              index === activeIndex ? "carousel__slide--active" : "inactive"
            }`}
          >
            <figure>
              <img
                src={slide.image}
                alt="img"
                width={slide.width}
                height={slide.height}
                loading="lazy"
              />
              <figcaption>{slide.caption}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderContent;
