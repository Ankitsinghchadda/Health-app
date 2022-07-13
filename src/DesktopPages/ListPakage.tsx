import React from "react";
import "./ListPakage.css";
import { useLocation } from "react-router-dom";
import InSlider from "../components/InSlider";
import PopularPakages from "./PopularPakages";

const ListPakage = () => {
  const { state }: any = useLocation();

  return (
    <div className="pakages_main">
      <div className="third_section desktopElement">
        <InSlider />
      </div>
      <div className="pakages_main_div">
        <h2>{state.name}</h2>
        <div className="pakages_grid">
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
          <PopularPakages offPercentage="30" Name="Advanced Health Package" />
        </div>
      </div>
    </div>
  );
};

export default ListPakage;
