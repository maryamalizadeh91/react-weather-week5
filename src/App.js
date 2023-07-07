import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project is created by Maryam{" "}
          <a
            href="https://www.linkedin.com/in/maryamalizadeh91/"
            target="_blank"
            rel="noreferrer">
            M.Alizadeh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/maryamalizadeh91/react-weather-week5"
            target="_blank"
            rel="noreferrer">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
