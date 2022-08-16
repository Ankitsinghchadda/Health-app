import React from "react";
import "./Report.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CircleImage from "../components/CircleImage";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Tick from "../image/21.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/AuthSlice";

const Report = () => {
  const navigate = useNavigate();
  const Loggeduser = useSelector(selectUser);
  return (
    <div className="reports_div">
      <div className="report_heading">
        <ArrowBackRoundedIcon
          className="backArrow_nav"
          onClick={(e: any) => {
            navigate("/");
          }}
        />
        <h3>My Reports</h3>
      </div>
      <div className="report_person">
        <CircleImage image={Tick} name={Loggeduser[0].displayName} />
        {/* <CircleImage image={Tick} name="Varun" />
        <CircleImage image={Tick} name="Jay Kiran" /> */}
      </div>
      <div className="reports_download">
        <div className="pdf_download_div">
          <MoreVertRoundedIcon className="threeDots" />
          <div className="pdf_image">
            <img src={Tick} alt="" />
          </div>
          <div className="pdf_download_div_footer">
            <p>25/06/22</p>
            <DownloadRoundedIcon className="download_icon" fontSize="large" />
          </div>
        </div>
        <div className="pdf_download_div">
          <MoreVertRoundedIcon className="threeDots" />
          <div className="pdf_image">
            <img src={Tick} alt="" />
          </div>
          <div className="pdf_download_div_footer">
            <p>25/06/22</p>
            <DownloadRoundedIcon className="download_icon" fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
