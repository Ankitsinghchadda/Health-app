import React from "react";
import "./LandingPage.css";

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
      </div>
    </div>
  );
};

export default Landingpage;
