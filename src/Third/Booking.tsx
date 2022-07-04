import React, { useState } from "react";
import "./Booking.css";
import Avatar from "@mui/material/Avatar";
import Logo from "../image/LabtinLogo.png";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
export interface State extends SnackbarOrigin {
  open: boolean;
}

const Booking = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const navigate = useNavigate();
  const [appointmentDetails, setAppointmentDetails] = useState({
    time: "",
    date: "",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    if (appointmentDetails.time === "" && appointmentDetails.date === "")
      setState({ ...state, open: false });
  };
  const toggleOptionsV = (e: any) => {
    if (e.target.parentElement.classList[0] === "appointmentSection") {
      e.target.parentElement.nextSibling.classList.toggle("hideOptions");
    }
  };

  const handleAppointment = (e: any) => {
    setAppointmentDetails({ ...appointmentDetails, date: e.target.innerHTML });

    const options = document.getElementsByClassName("appointmentOption");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("activeOption");
    }
    e.target.classList.add("activeOption");
    handleClick();
  };

  const handleCheckOut = () => {
    if (appointmentDetails.time !== "" && appointmentDetails.date !== "")
      handleClick();
  };

  const handleDate = (e: any) => {
    setAppointmentDetails({
      ...appointmentDetails,
      time: e.target.value,
    });
    handleCheckOut();
  };

  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/onSummary");
      }}
    >
      Checkout
    </button>
  );

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
        <input
          className="appointmentDate"
          type="date"
          name="appointmentDate"
          onChange={handleDate}
        />
        <div className="appointmentSelect">
          <div className="appointmentSection" onClick={toggleOptionsV}>
            <h4>
              Morning <span>(6:00 AM - 12:00 PM)</span>
            </h4>
            <ArrowDropDownIcon className="downArrow" />
          </div>
          <div className="appointmentOptions hideOptions">
            <div className="appointmentOption" onClick={handleAppointment}>
              6:00 AM - 7:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              7:00 AM - 8:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              8:00 AM - 9:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              9:00 AM - 10:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              10:00 AM - 11:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              11:00 AM - 12:00 PM
            </div>
          </div>
        </div>
        <div className="appointmentSelect">
          <div className="appointmentSection" onClick={toggleOptionsV}>
            <h4>
              Afternoon <span>(12:00 PM-2:00PM)</span>
            </h4>
            <ArrowDropDownIcon />
          </div>

          <div className="appointmentOptions hideOptions">
            <div className="appointmentOption" onClick={handleAppointment}>
              6:00 AM - 7:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              7:00 AM - 8:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              8:00 AM - 9:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              9:00 AM - 10:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              10:00 AM - 11:00 AM
            </div>
            <div className="appointmentOption" onClick={handleAppointment}>
              11:00 AM - 12:00 PM
            </div>
          </div>
        </div>
        <Snackbar
          sx={{ marginBottom: "5rem" }}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Slot Selected"
          action={action}
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default Booking;
