import "./App.css";
import React, { useState, useContext } from "react";
import AppContainer from "./AppContainer";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("clear-sky-day");
  const value = { theme, setTheme };
  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <AppContainer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
