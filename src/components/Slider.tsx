import React from "react";
import "./Slider.css";
import DocImg from "../image/image.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider_text">
        <h4>Your Health is our Priority</h4>
        <h2>Free Medical Clinics Operate Nationwide</h2>
        <div className="slider_text_para">
          <p>
            find your local Medical Clinic by Phoning 1300-123-456 or visiting
            reallygreatsite.com
          </p>
        </div>
      </div>
      <div className="slider_image">
        <img src={DocImg} alt="" />
      </div>
    </div>
  );
};

export default Slider;
