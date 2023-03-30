import React, { useState } from "react";
import { useEffect } from "react";

const ProgressiveImage = ({ src, placeholder, size }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "hidden") {
  //       setIsLoading(true);
  //     } else {
  //       setIsLoading(false);
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);

  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);

  const handleImageLoaded = () => {
    setIsLoading(false);
    setCurrentSrc(src);
  };

  return (
    <img
      src={currentSrc}
      onLoad={handleImageLoaded}
      className={size}
      style={{
        filter: isLoading ? "blur(20px)" : "none",
        transition: "filter 2s ease",
      }}
    />
  );
};

export default ProgressiveImage;
