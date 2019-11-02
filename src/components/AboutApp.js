import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function AboutApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is AboutApp
        </a>
      </header>
    </div>
  );
}

export default AboutApp;
