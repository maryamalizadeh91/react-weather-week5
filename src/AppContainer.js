import React, { useContext } from "react";
import "./AppContainer.css";
import Weather from "./Weather";
import { ThemeContext } from "./ThemeContext";

function AppContainer(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="AppContainer">
      <div className={theme}>
        <div className="app-container">
          <div className="container">
            <h1>Weather App</h1>
            <Weather defaultCity="Tabriz" />
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
      </div>
    </div>
  );
}

export default AppContainer;
