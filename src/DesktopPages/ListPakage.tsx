import "./ListPakage.css";
import { useLocation } from "react-router-dom";
import DSlider from "../components/DSlider";
import PopularPakages from "./PopularPakages";
import Data from "../testData/individual.json";

const ListPakage = () => {
  const { state }: any = useLocation();
  const indivualData = Data.Individualdata;
  const individualTestDiv = indivualData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <PopularPakages
          Name={data.heading}
          // requirement={data.requirement}
          offPercentage={data.offPercentage}
          // description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          // diagnostics={data.diagnostics}
        />
      </div>
    );
  });
  return (
    <div className="pakages_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="pakages_main_div">
        <h2>{state?.name || "Individual Tests"}</h2>
        <div className="pakages_grid">{individualTestDiv}</div>
      </div>
    </div>
  );
};

export default ListPakage;
