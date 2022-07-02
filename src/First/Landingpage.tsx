import React from "react";
import "./LandingPage.css";
import Slider from "../components/Slider";
import CircleImage from "../components/CircleImage";
import LabTestCards from "../components/LabTestCards";

const Landingpage = () => {
  return (
    <div>
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

          <button className="buttonStyle1">Book Now</button>
        </div>
        <div className="iconWithLable">
          <div className="Section_Icon"></div>
        </div>
      </div>
      <div className="second_section">
        <div className="secondsection_first">
          <h2>Health Packages</h2>
          <div className="secondsection_subflex">
            <div className="subflex_icon">SVG</div>
            <div className="subflex_text">
              <div className="text_blue">Upto 50% off</div>
              <h4>2000+ TESTS</h4>
              <h4>NABL & ICMR</h4>
              <h4>APPROVED LABS</h4>
            </div>
          </div>
        </div>
        <div className="secondsection_Second">
          <h2>Health Scans and Imagings</h2>
          <div className="secondsection_subflex">
            <div className="subflex_icon">SVG</div>
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
          <CircleImage name="Brain" image="Image" />
          <CircleImage name="Heart" image="Image" />
          <CircleImage name="Lungs" image="Image" />
          <CircleImage name="Kideny" image="Image" />
          <CircleImage name="Liver" image="Image" />
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Tests <button>see more</button>
        </div>
        <div className="labtest_cards">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including measuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including asfdjkaldsjflakdsf adsjfasjf dasdjfslmeasuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
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
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Pakages <button>see more</button>
        </div>
        <div className="labtest_cards">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including asfdjkaldsjflakdsf adsjfasjf dasdjfslmeasuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
          {/* Needed Book Now Button in Pakages */}
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
