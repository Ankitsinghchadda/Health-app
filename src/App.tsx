import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import TestPakage from "./second/TestPakage";
import Booking from "./Third/Booking";
import Report from "./ReportsPage/Report";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Header />}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/MyReport" element={<Report />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/TestPakage" element={<TestPakage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
