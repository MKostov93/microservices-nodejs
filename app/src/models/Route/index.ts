/**
* EXTERNAL DEPENDENCIES.
*/
import React from "react";
import { RouteProps } from "react-router-dom";
import { LoadableComponent } from "@loadable/component";

export interface RouteInfo extends RouteProps {
  routes?: RouteInfo[];
  component?: LoadableComponent<{}> & React.ComponentType<{}>
}