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

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_logo">Labtin Logo</div>
      <div className="header_menu">
        <div className="menuItems">
          <HeaderOptions Icon={HomeSharp} Title={"Home"} />
          <HeaderOptions Icon={CalendarMonthRoundedIcon} Title={"Bookings"} />
          <HeaderOptions Icon={SummarizeRoundedIcon} Title={"My Report"} />
          <HeaderOptions Icon={SupportAgentRoundedIcon} Title={"Support"} />
          <HeaderOptions Icon={MenuRoundedIcon} Title={"Menu"} />
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
