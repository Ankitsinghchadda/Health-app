import React from "react";
import "./LabTestCard.css";
const LabTestCards = (props: any) => {
  return (
    <div className="labtest_card">
      <div className="card_offer ">Extra {props.offPercentage}% off</div>
      <div className="card_firstSection">
        <div className="card_heading">
          <h3>{props.heading}</h3>
          <h4 style={{ color: "red" }}>{props.requirement}</h4>
        </div>
      </div>
      <div className="card_secondSection">
        <div className="card_description">
          <p>{props.description}</p>
        </div>
        <div className="card_price">
          <h3>Starts From</h3>
          <div>
            <span style={{ color: "red", textDecoration: "line-through" }}>
              ₹{props.previousPrice}
            </span>
            <span> ₹{props.currentPrice}</span>
          </div>
          <br />
          <button className="labtest_addButton">Add</button>
        </div>
      </div>
      <div className="card_thirdSection">
        <button className="card_knowMore">
          {"("}Know More{")"}
        </button>
        <div className="card_availabity">
          <span>Available In</span>
          <h3>{props.diagnostics} Diagnostics</h3>
        </div>
      </div>
    </div>
  );
};

export default LabTestCards;
