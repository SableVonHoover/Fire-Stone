// DO NOT REMOVE, APPARENTLY ESSENTIAL FOR TRAVIS TO PASS

import React from "react";
// import logo from "../images/FireLogo2.png";
import "../css/App.css";

function Landing() {
  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>Welcome to FireStone!!!</p>
      <a
        className="App-link"
        href="https://github.com/SableVonHoover/Fire-Stone"
        target="_blank"
        rel="noopener noreferrer"
      >
        This is a simple react game.
      </a>
    </header>
  );
}

export default Landing;
