import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components/Counter";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Counter value={1000} />
  </React.StrictMode>
);
