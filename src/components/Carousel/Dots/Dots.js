import React from "react";

const Dots = ({ activeIndex, onClick, sliderImages }) => {
  return (
    <div className="carousel__dots">
      {sliderImages.map((slide, index) => {
        return (
          <button
            aria-label="navigate to next slide"
            key={index}
            className={`carousel__dot ${
              activeIndex === index ? "carousel__dot--active" : ""
            }`}
            onClick={() => onClick(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default Dots;
