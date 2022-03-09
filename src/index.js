import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Contextapiis} from "./contextapi";

ReactDOM.render(
  <React.StrictMode>
    <Contextapiis>
      <App />
    </Contextapiis>
  </React.StrictMode>,
  document.getElementById("root")
);
