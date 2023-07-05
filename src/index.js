import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";

//rendering upgraded to the latest react version18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//this was in  older versions of < react 18 it use to work as follows

// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
