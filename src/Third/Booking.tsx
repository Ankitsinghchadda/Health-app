import React from "react";
import "./Booking.css";
import Avatar from "@mui/material/Avatar";
import Logo from "../image/LabtinLogo.png";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
const Booking = () => {
  return (
    <div className="BookingFor_div">
      <div className="bookedFor">
        <h3>Who are you Booking for?</h3>
        <div className="avatars">
          <div className="add_beforeAvtar">
            <AddCircleOutlineRoundedIcon fontSize="inherit" />
            <h3>Add</h3>
          </div>
          <div className="addedAvatar">
            <Avatar
              alt="Logo"
              src={Logo}
              sx={{ width: "4rem", height: "4rem", border: "1px solid black" }}
            />
            <h3>Logo</h3>
          </div>
        </div>
      </div>
      <div className="pickUpLocation">
        <h3>Pick Up Location</h3>
        <div className="iconLoaction">
          <LocationOnRoundedIcon fontSize="inherit" color="inherit" />
          <p>Let us know where to collect test sample from</p>
        </div>

        <button className="addAddressButton">Add Address</button>
      </div>

      <div className="selectBookingSlot">
        <h3>Select Booking Slot</h3>
        <input className="appointmentDate" type="date" name="appointmentDate" />
        <div className="appointmentSelect">
          <div className="appointmentSection">
            <h4>
              Morning <span>(6:00 AM - 12:00 PM)</span>
            </h4>
          </div>
          <div className="appointmentOptions">
            <div className="appointmentOption">6:00 AM - 7:00 AM</div>
            <div className="appointmentOption">7:00 AM - 8:00 AM</div>
            <div className="appointmentOption">8:00 AM - 9:00 AM</div>
            <div className="appointmentOption">9:00 AM - 10:00 AM</div>
            <div className="appointmentOption">10:00 AM - 11:00 AM</div>
            <div className="appointmentOption">11:00 AM - 12:00 PM</div>
          </div>
        </div>
        <div className="appointmentSelect">
          <div className="appointmentSection">
            <h4>
              Afternoon <span>(12:00 PM-2:00PM)</span>
            </h4>
          </div>
          <div className="appointmentOptions">
            <div className="appointmentOption">6:00 AM - 7:00 AM</div>
            <div className="appointmentOption">7:00 AM - 8:00 AM</div>
            <div className="appointmentOption">8:00 AM - 9:00 AM</div>
            <div className="appointmentOption">9:00 AM - 10:00 AM</div>
            <div className="appointmentOption">10:00 AM - 11:00 AM</div>
            <div className="appointmentOption">11:00 AM - 12:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
