// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;

import React, { useState } from "react";
import c1 from "./assets/Coffee 1.jpg";
import c3 from "./assets/Coffee 3.jpg";
import c4 from "./assets/Coffee 4.jpg";
import c5 from "./assets/Coffee.jpg";
import c6 from "./assets/Coffee.png";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Home = () => {
  const slides = [
    { url: c1, title: "1st image" },
    { url: c3, title: "1st image" },
    { url: c4, title: "1st image" },
    { url: c5, title: "1st image" },
    { url: c6, title: "1st image" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={{ backgroundImage: `url(${c1})` }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={goToPrevious}
          style={
            (leftArrowStyles,
            {
              color: "red",
              fontSize: "22px",
              marginRight: "10px",
              cursor: "pointer",
            })
          }
        >
          ❰
        </div>
        <img src={slides[currentIndex].url} width="400px" height="400px" />
        <div
          onClick={goToNext}
          style={
            (rightArrowStyles,
            {
              color: "red",
              fontSize: "22px",
              marginLeft: "10px",
              cursor: "pointer",
            })
          }
        >
          ❱
        </div>
      </div>
      {/* <div style={slideStylesWidthBackground}></div> */}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
