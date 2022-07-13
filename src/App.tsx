import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import TestPakage from "./second/TestPakage";
import Booking from "./Third/Booking";
import Report from "./ReportsPage/Report";
import OrderSummary from "./OrderSummary";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import BottomNavigationElement from "./components/BottomNavigationElement";
import Radiology from "./HealthTests/Radiology/Radiology";
import PrescriptionDialog from "./components/PrescriptionDialog";
import PakagesTab from "./second/PakagesTab";
import ListPakage from "./DesktopPages/ListPakage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Header />}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/MyReport" element={<Report />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/TestPakage" element={<PakagesTab />} />
          <Route path="/onSummary" element={<OrderSummary />} />
          <Route path="/Radiology" element={<Radiology />} />
          <Route path="/BookingPakages" element={<ListPakage />} />
        </Routes>
        {<BottomNavigationElement />}
      </BrowserRouter>
    </div>
  );
}

export default App;
