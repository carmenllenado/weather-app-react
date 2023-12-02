import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Makati"/>
       <footer>
        Coded by Carmen Llenado and {" "}
        <a href="https://github.com/carmenllenado/weather-app-react"
        target="_blank" rel="noreferrer">open-sourced on GitHub</a>
       </footer>
       </div>
    </div>
  );
}


