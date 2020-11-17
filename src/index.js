import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Motor } from "@motor-js/core";
import { config } from "./config.js";
import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Motor config={config} theme={theme}>
      <App />
    </Motor>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
