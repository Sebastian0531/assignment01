import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ClothingList } from "./ClothingList/ClothingList";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clothing/:role" element={<ClothingList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
