/**
 * EXTERNAL DEPENDENCIES.
 */
import loadable from "@loadable/component";

/**
 * INTERFACES.
 */
import { RouteInfo } from 'models/Route';

/**
 * COMPONENTS.
 */
const Listings = loadable(() =>
  import(
    /* webpackChunkName: "listing" */
    "containers/Listings/Listings"
  )
);
const About = loadable(() =>
  import(
    /* webpackChunkName: "about" */
    "containers/About/About"
  )
);

const routes: RouteInfo[] = [
  {
    path: "/",
    exact: true,
    component: Listings
  },
  {
    path: "/about",
    exact: true,
    component: About
  }
];

export default routes;
