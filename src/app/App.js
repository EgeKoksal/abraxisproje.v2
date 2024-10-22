import React, { useEffect } from "react";

import Brand from "./Logo";
import Navbar from "./Navbar";
import Login from "./Login";
import useThemeToggle from "../hooks/ThemeChange";
import Grid from "./GridStack";

function App() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div className="App">
      <Brand />
      <Navbar />
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className={`toggle ${theme}`}></div>
        <span className="icon sun-icon">☀️</span>
        <span className="icon moon-icon">
          <i className="fa-solid fa-moon"></i>
        </span>
      </div>
      <Login />
      <Grid/>
    </div>
  );
}

export default App;
