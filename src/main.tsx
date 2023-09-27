import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TourProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TourProvider>
      <App />
    </TourProvider>
  </React.StrictMode>
);
