import React, { useState } from "react";
import HeaderOptions from "./HeaderOptions";
import "./Header.css";
import { HomeSharp } from "@mui/icons-material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import Logo from "../image/LabtinLogo.png";
import { Link } from "react-router-dom";
import LeftDrawer from "./LeftDrawer";
import { Modal } from "@mui/material";
import PrescriptionDialog from "./PrescriptionDialog";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header_main">
      <PrescriptionDialog
        className="mymodal"
        overlayClassName="myoverlay"
        visibility={show}
        onClose={async () => {
          setShow(false);
        }}
      />

      <PrescriptionDialog
        visibility={show}
        onClose={async () => {
          setShow(false);
        }}
      />

      <Link to="/">
        <div className="header_logo">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <div className="header_menu">
        <div className="menuItems">
          <Link to="/">
            <HeaderOptions Icon={HomeSharp} Title={"Home"} />
          </Link>
          <Link to="/Booking">
            <HeaderOptions Icon={CalendarMonthRoundedIcon} Title={"Bookings"} />
          </Link>
          <Link to="/MyReport">
            <HeaderOptions Icon={SummarizeRoundedIcon} Title={"My Report"} />
          </Link>
          <Link to="/Support">
            {" "}
            <HeaderOptions Icon={SupportAgentRoundedIcon} Title={"Support"} />
          </Link>
          <LeftDrawer />
        </div>
      </div>
      <div className="searchwithPrescreption">
        <div className="searchbar">
          <input
            className="searchbar_input"
            type="text"
            placeholder="Search Lab Test Eg: Tyroid, CBD, Liqid..."
          />
          <div className="searchIcon">
            <SearchTwoToneIcon
              className="searchbar_icon"
              fontSize="inherit"
              color="inherit"
            />
          </div>
        </div>
        <div
          className="uploadPrescription"
          onClick={async () => {
            setShow(true);
          }}
        >
          {/* <HeaderOptions Icon={NoteAddRoundedIcon} Title={"Prescription"} /> */}
          <NoteAddRoundedIcon fontSize="large" />
        </div>

        <div className="selectState">
          <select name="state" id="sState">
            <option value="Hyderabad">Hyderabad</option>
            <option value="Hyderabad">Bengaluru</option>
            <option value="Hyderabad">Chennai</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
