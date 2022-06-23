import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";

function App() {
  return (
    <div className="App">
      {<Header />} <Landingpage />
    </div>
  );
}

export default App;
