import React, { useState } from "react";
import HeaderOptions from "./HeaderOptions";
import "./Header.css";
import { HomeSharp } from "@mui/icons-material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import Logo from "../image/LabtinLogo.png";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import LeftDrawer from "./LeftDrawer";
import { Modal } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PrescriptionDialog from "./PrescriptionDialog";
import { useNavigate } from "react-router-dom";
import CircleImage from "./CircleImage";
import Tick from "../image/21.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handlenav1 = (e: any) => {
    e.preventDefault();
    navigate(`/BookingPakages`, {
      state: { name: "HealthPakages" },
    });
  };
  const handlenav2 = (e: any) => {
    e.preventDefault();
    navigate(`/BookingPakages`, {
      state: { name: "IndividualTests" },
    });
  };
  const handlenav3 = (e: any) => {
    e.preventDefault();
    navigate(`/BookingPakages`, {
      state: { name: "Scan&Imaging" },
    });
  };

  const handledrop = (e: any) => {
    const toggleMenu: any = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
  return (
    <div className="header_div">
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
        {/* <div className="header_menu">
          <div className="menuItems">
            <Link to="/">
              <HeaderOptions Icon={HomeSharp} Title={"Home"} />
            </Link>
            <Link to="/Booking">
              <HeaderOptions
                Icon={CalendarMonthRoundedIcon}
                Title={"Bookings"}
              />
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
        </div> */}
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
      <div className="header_div_desktop">
        <div className="headerforDesktop">
          <button onClick={handlenav1}>Health Pakages</button>
          <button onClick={handlenav2}>Individual Tests</button>
          <button onClick={handlenav3}>Health Scans & Imaging</button>
        </div>
        <div className="header_profile" onClick={handledrop}>
          <PersonIcon fontSize="large" />
          <p>Profile</p>
        </div>
      </div>
      <div className="action">
        <div className="menu">
          <CircleImage image={Tick} name="Surya Thambiereddy" />
          <ul>
            <li>
              <Link to="/">
                <div className="sidebar_icons1">
                  <HomeIcon /> <span className="icon_name1">Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Booking">
                <div className="sidebar_icons1">
                  <CalendarMonthIcon />{" "}
                  <span className="icon_name1">My Bookings</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/MyReports">
                <div className="sidebar_icons1">
                  <SummarizeRoundedIcon />{" "}
                  <span className="icon_name1">My Reports</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Address">
                <div className="sidebar_icons1">
                  <LocationOnRoundedIcon />{" "}
                  <span className="icon_name1">Address</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Offers">
                <div className="sidebar_icons1">
                  <LocalOfferIcon /> <span className="icon_name1">Offers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Help">
                <div className="sidebar_icons1">
                  <HelpIcon /> <span className="icon_name1">Help</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Logout">
                <div className="sidebar_icons1">
                  <LogoutIcon /> <span className="icon_name1">Logout</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
