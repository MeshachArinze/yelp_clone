import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.css";
import "./app.css";

import { HashRouter } from "react-router-dom";
import makeRoutes from "./routes";
const routes = makeRoutes();
import App from "./containers/App/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App history={HashRouter} routes={routes} />
  </React.StrictMode>
);
