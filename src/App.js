import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";


import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <h1 className="chart-title">BIKES</h1>
      <button onClick={toggleDarkMode} style={{ margin: "10px" }} className={isDarkMode ? "dark-button" : "light-button"}>
        {isDarkMode ? "MODO CLARO" : "MODO OSCURO"}
      </button>
      <div className="container">
        <h2 className="chart-title">
          <b>LINEAL</b>
        </h2>
        <LinesChart />
      </div>

      <hr className="mt-3 mb-2" />
      <div className="container">
        <h2 className="chart-title">
          <b>BARRAS</b>
        </h2>
        <BarsChart />
      </div>

      <hr className="mt-3 mb-2" />
      <div className="container">
        <h2 className="chart-title">
          <b>CIRCULAR</b>
        </h2>
        <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
          <PiesChart />
        </div>
      </div>
    </div>
  );
}

export default App;
