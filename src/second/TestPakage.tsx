import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LabTestCards from "../components/LabTestCards";
import Data from "../testData/individual.json";
import "./TestPakages.css";

export default function TestPakage() {
  const [value, setValue] = React.useState("1");
  const indivualData = Data.Individualdata;
  const pakageData = Data.PakagesData;

  const individualTestDiv = indivualData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <LabTestCards
          heading={data.heading}
          requirement={data.requirement}
          offPercentage={data.offPercentage}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          diagnostics={data.diagnostics}
        />
      </div>
    );
  });
  const pakageTestDiv = pakageData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <LabTestCards
          heading={data.heading}
          requirement={data.requirement}
          offPercentage={data.offPercentage}
          description={data.description}
          previousPrice={data.previousPrice}
          currentPrice={data.currentPrice}
          diagnostics={data.diagnostics}
        />
      </div>
    );
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="testpakages">
      <Box sx={{ minWidth: "20rem", typography: "body1", marginTop: "1rem" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              paddingTop: " 1rem",
            }}
          >
            <div className="indiTan">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {" "}
                <Tab
                  label="Individual Tests"
                  value="1"
                  sx={{
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    margin: "inherit",
                  }}
                />
                <Tab
                  label="Pakages"
                  value="2"
                  sx={{
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    margin: "inherit",
                  }}
                />
              </TabList>
            </div>
          </Box>
          <TabPanel value="1" sx={{ margin: "0 1rem" }}>
            <div className="labtest_cards">{individualTestDiv}</div>
          </TabPanel>
          <TabPanel value="2" sx={{ margin: "0 1rem" }}>
            <div className="labtest_cards"> {pakageTestDiv} </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
