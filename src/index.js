// global.Buffer = global.Buffer || require("buffer").Buffer;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "stream-http";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </BrowserRouter>
);
