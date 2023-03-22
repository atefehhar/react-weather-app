import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/atefeh-haraeini/"
            target="_blank"
            rel="noreferrer"
          >
            Atefeh Haraeini
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/atefehhar/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
