import { useEffect, useState } from "react";

export const useMatchMediaQuery = () => {
  const [isMatched, setIsMatched] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  );
  useEffect(() => {
    const handleSmallSizesChange = (e) => {
      // Check if the media query is true
      if (e.matches) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    };

    window
      .matchMedia("only screen and (min-width: 1000px)")
      .addEventListener("change", handleSmallSizesChange);
  }, []);

  return { isMatched };
};
