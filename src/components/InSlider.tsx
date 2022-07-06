import React from "react";
import "./InSlider.css";
// import FirstIconFirst from "../image/FreeSample.png";
// import FirstIconSecond from "../image/firstIcon-2.png";
// import FirstIconThird from "../image/firstIcon-3.png";
// import secondFirst from "../image/secondfirst.png";
import Slide1 from "../image/slide1.png";
const InSlider = () => {
  return (
    <div id="slider">
      <figure>
        <div>
          <img src={Slide1} alt="SliderImage" />
        </div>

        <div>
          {" "}
          <img src={Slide1} alt="SliderImage" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage" />
        </div>
      </figure>
    </div>
  );
};

export default InSlider;
