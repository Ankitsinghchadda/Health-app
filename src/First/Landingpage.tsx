import React from "react";
import "./LandingPage.css";
import Slider from "../components/Slider";
import CircleImage from "../components/CircleImage";
import LabTestCards from "../components/LabTestCards";
import { useNavigate } from "react-router-dom";
import FirstIconFirst from "../image/FreeSample.png";
import FirstIconSecond from "../image/firstIcon-2.png";
import FirstIconThird from "../image/firstIcon-3.png";
import secondFirst from "../image/secondfirst.png";
import secondIcon from "../image/secondsecond.png";
import SFirstIcon from "../image/1.png";
import SSecondIcon from "../image/2.png";
import SThirdIcon from "../image/3.png";
import SFourthIcon from "../image/4.png";
import SFifthIcon from "../image/5.png";

const Landingpage = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const navigateToIP = () => {
    navigate("/TestPakage");
  };

  return (
    <div className="landing_div">
      <div className="first_section">
        <div className="first_section_heading">
          <div>
            <h2 className="headingfirst" style={{ color: "#000C83" }}>
              Get Sample Collected,{" "}
            </h2>
            <h2 className="headingfirst" style={{ color: "white" }}>
              In just 45 MINUTES
            </h2>
          </div>

          <button className="buttonStyle1">BOOK NOW</button>
        </div>
        <div className="iconWithLable">
          <div className="Section_Icon">
            <img src={FirstIconFirst} alt="At Work Or AT Home" />
            <img src={FirstIconSecond} alt="" />
            <img src={FirstIconThird} alt="" />
          </div>
        </div>
      </div>
      <div className="second_section">
        <div className="secondsection_first" onClick={navigateToIP}>
          <h2>Health Packages</h2>
          <div className="secondsection_subflex">
            <div className="subflex_icon">
              <img src={secondFirst} alt="" />
            </div>
            <div className="subflex_text">
              <div className="text_blue">Upto 50% off</div>
              <h4>2000+ TESTS</h4>
              <h4>NABL & ICMR</h4>
              <h4>APPROVED LABS</h4>
            </div>
          </div>
        </div>
        <div className="secondsection_Second" onClick={navigateToIP}>
          <h2>Health Scans & Imagings</h2>
          <div className="secondsection_subflex">
            <div className="subflex_icon">
              {" "}
              <img src={secondIcon} alt="" />
            </div>
            <div className="subflex_text">
              <div className="text_blue">Upto 30% off</div>
              <h4>Advanced &</h4>
              <h4>Affordable Radiology</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="third_section">
        <Slider />
      </div>
      <div className="fourth_section">
        <div className="fourth_section_heading">Most Common Self Checks</div>
        <div className="SelfCheck_slider">
          <CircleImage name="Brain" image={SFifthIcon} />
          <CircleImage name="Heart" image={SSecondIcon} />
          <CircleImage name="Lungs" image={SThirdIcon} />
          <CircleImage name="Kideny" image={SFourthIcon} />
          <CircleImage name="Liver" image={SFifthIcon} />
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Tests <button>see more</button>
        </div>
        <div className="labtest_cards_list">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including measuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Pakages <button>see more</button>
        </div>
        <div className="labtest_cards_list">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including asfdjkaldsjflakdsf adsjfasjf dasdjfslmeasuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
