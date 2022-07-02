import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HeaderOptions from "./HeaderOptions";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CircleImage from "./CircleImage";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import "./LeftDrawer.css";
import { Link } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CircleImage image="" name="Surya Thambiereddy" />
      <div className="sidebar_menu">
        <Link to="/">
          <div className="sidebar_icons">
            <HomeIcon /> <span className="icon_name">Home</span>
          </div>
        </Link>
        <Link to="/Booking">
          <div className="sidebar_icons">
            <CalendarMonthIcon /> <span className="icon_name">My Bookings</span>
          </div>
        </Link>
        <Link to="/MyReports">
          <div className="sidebar_icons">
            <SummarizeRoundedIcon />{" "}
            <span className="icon_name">My Reports</span>
          </div>
        </Link>
        <Link to="/Address">
          <div className="sidebar_icons">
            <LocationOnRoundedIcon /> <span className="icon_name">Address</span>
          </div>
        </Link>
        <Link to="/Offers">
          <div className="sidebar_icons">
            <LocalOfferIcon /> <span className="icon_name">Offers</span>
          </div>
        </Link>
        <Link to="/Help">
          <div className="sidebar_icons">
            <HelpIcon /> <span className="icon_name">Help</span>
          </div>
        </Link>
        <Link to="/Logout">
          <div className="sidebar_icons">
            <LogoutIcon /> <span className="icon_name">Logout</span>
          </div>
        </Link>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <HeaderOptions
          Icon={MenuRoundedIcon}
          Title="Menu"
          onClick={toggleDrawer("left", true)}
        />
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
