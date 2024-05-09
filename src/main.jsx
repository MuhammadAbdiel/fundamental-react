// import App from "./App.jsx";
// import "./index.css";
// import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./Example.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Example />
  </BrowserRouter>
);
