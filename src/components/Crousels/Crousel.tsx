import React from "react";
import Slider from "react-slick";
import LabTestCards from "../LabTestCards";
import Data from "../../testData/individual.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./Crousel.css";
const Crousel = (props: any) => {
  const sliderSettings = {
    dots: true,
    arrows: true,

    useCSS: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const indivualData = Data.Individualdata;
  const pakageData = Data.PakagesData;
  const individualTestDiv = indivualData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <LabTestCards
          heading={data.heading}
          requirement={data.requirement}
          offPercentage={data.offPercentage}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          diagnostics={data.diagnostics}
        />
      </div>
    );
  });
  const pakageTestDiv = pakageData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <LabTestCards
          heading={data.heading}
          requirement={data.requirement}
          offPercentage={data.offPercentage}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          diagnostics={data.diagnostics}
        />
      </div>
    );
  });
  return (
    <div className="crousel_forDestop">
      {/* <div className="controls">
        <button>
          <KeyboardArrowLeftIcon />
        </button>
        <button>
          <KeyboardArrowRightIcon />
        </button>
      </div> */}
      <Slider {...sliderSettings}>
        {props.crousalData == "pakages" ? pakageTestDiv : individualTestDiv}
      </Slider>
    </div>
  );
};

export default Crousel;
