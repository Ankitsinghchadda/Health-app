import React from "react";
import HeaderOptions from "./HeaderOptions";
import "./Header.css";
import { HomeSharp } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import Logo from "../image/LabtinLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_logo">
        <img src={Logo} alt="Logo" />
      </div>
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
          <Link to="/Menu">
            {" "}
            <HeaderOptions Icon={MenuRoundedIcon} Title={"Menu"} />
          </Link>
        </div>
      </div>
      <div className="searchwithPrescreption">
        <div className="searchbar">
          <input
            className="searchbar_input"
            type="text"
            placeholder="Search Lab Test Eg: Tyroid, CBD, Liq..."
          />
          <SearchIcon className="searchbar_icon" fontSize="medium" />
        </div>
        <div className="uploadPrescription">
          <HeaderOptions Icon={NoteAddRoundedIcon} Title={"Prescription"} />
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
