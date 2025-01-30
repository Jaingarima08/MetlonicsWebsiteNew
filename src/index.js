import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./i18n"; // Import i18n configuration
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <React.Suspense fallback="loading...">
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </React.Suspense>
  </React.StrictMode>
);

reportWebVitals();
