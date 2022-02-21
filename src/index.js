import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/App";

import reportWebVitals from "./reportWebVitals";
import GeneralState from "./context/state";

ReactDOM.render(
  <GeneralState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GeneralState>,
  document.getElementById("root")
);

reportWebVitals();
