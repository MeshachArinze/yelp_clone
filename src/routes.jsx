import React from "react";
import {  Route } from "react-router-dom";

import makeMainRoutes from "./views/Main/routes";

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return <Route path="">{main}</Route>;
};

export default makeRoutes;
