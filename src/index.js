// global.Buffer = global.Buffer || require("buffer").Buffer;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "stream-http";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
