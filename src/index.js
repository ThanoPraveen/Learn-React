import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppOld from "./AppOld";
import AppNew from "./AppNew";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppOld /> */}
    <AppNew />
  </React.StrictMode>
);
//
reportWebVitals();
