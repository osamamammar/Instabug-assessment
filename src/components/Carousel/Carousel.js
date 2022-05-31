import React, { useEffect, useState } from "react";
import {
  BugReporting,
  ProductOverview,
  ProductsCrashReporting,
} from "../../assets";
import "./Carousel.scss";

const Carousel = () => {
  const [isMatched, setIsMatched] = useState(
    window.matchMedia("only screen and (min-width: 1000px)").matches
  );

  useEffect(() => {
    const handleSmallSizesChange = (e) => {
      // Check if the media query is true
      if (e.matches) {
        // Then log the following message to the console
        console.log("Media Query Matched!");
        setIsMatched(true);
      } else {
        console.log("Media Query Nooooooot Matched!");
        setIsMatched(false);
      }
    };

    window
      .matchMedia("only screen and (min-width: 1000px)")
      .addEventListener("change", handleSmallSizesChange);
  }, []);

  useEffect(() => {
    const carousel = document.querySelector(".carousel__container");
    const dots = Array.from(carousel.querySelectorAll(".carousel__dot"));
    const contents = carousel.querySelector(".carousel__contents");
    const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
    if (dots) {
      dots.forEach((dot) => {
        dot.addEventListener("click", (event) => {
          let clickedDotIndex;

          for (let index = 0; index < dots.length; index++) {
            if (dots[index] === dot) {
              clickedDotIndex = index;
            }
          }

          const slideToShow = slides[clickedDotIndex];
          const destination = getComputedStyle(slideToShow).left;
          contents.style.left = "-" + destination;
          // slides.forEach((slide) => {
          //   slide.classList.remove("is-selected");
          // });
          // slideToShow.classList.add("is-selected");

          dots.forEach((d) => {
            d.classList.remove("is-selected");
          });
          dot.classList.add("is-selected");
        });
      });
    }
    let interval;
    if (isMatched) {
      interval = setInterval(() => {
        const currentDot = document.querySelector(".carousel__dot.is-selected");
        const nextDot = currentDot.nextElementSibling;
        if (nextDot) {
          nextDot.click();
        } else {
          dots[0].click();
        }
      }, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isMatched]);

  return (
    <>
      <section className="section-left carousel__container">
        <ul className="carousel__contents">
          <li className="carousel__slide is-selected">
            <ProductOverview className="carousel__slide-img" />
            <p className="img-caption">
              Accelerate Your Entire Mobile Team Workflow
            </p>
          </li>

          <li className="carousel__slide">
            <BugReporting className="carousel__slide-img" />
            <p className="img-caption">
              The Most Comprehensive Bug Reporting Tool for Mobile Apps
            </p>
          </li>

          <li className="carousel__slide">
            <ProductsCrashReporting className="carousel__slide-img" />
            <p className="img-caption">
              Secure Crash Reporting With Real-Time Alerts
            </p>
          </li>
        </ul>

        <div className="carousel__dots">
          <button className="carousel__dot is-selected"></button>
          <button className="carousel__dot"></button>
          <button className="carousel__dot"></button>
        </div>
      </section>
    </>
  );
};
export default Carousel;
