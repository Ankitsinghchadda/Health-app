import React from "react";
import "./App.css";
import Bookings from "./Bookings";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import HealthPackagePage from "./HealthTests/HealthPackagePage";
import Pathology from "./HealthTests/Pathology/Pathology";
import Radiology from "./HealthTests/Radiology/Radiology";

function App() {
  return (
    <div className="App">
      {<Header />} <Radiology />
    </div>
  );
}

export default App;
