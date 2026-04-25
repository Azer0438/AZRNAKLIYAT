import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { scheduleThirdPartyScripts } from "./lib/loadThirdPartyScripts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

scheduleThirdPartyScripts();
