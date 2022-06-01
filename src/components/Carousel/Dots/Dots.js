import React from "react";

const Dots = ({ activeIndex, onClick, sliderImages }) => {
  return (
    <ul className="carousel__dots">
      {sliderImages.map((slide, index) => {
        return (
          <li>
            <button
              aria-label="navigate to next slide"
              key={index}
              className={`carousel__dot ${
                activeIndex === index ? "carousel__dot--active" : ""
              }`}
              onClick={() => onClick(index)}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default Dots;
