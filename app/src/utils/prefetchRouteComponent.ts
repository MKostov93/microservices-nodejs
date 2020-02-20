/**
 * EXTERNAL DEPENDENCIES.
 */
import { matchPath } from "react-router-dom";

/**
 * ROUTES.
 */
import routes from "routes";

/**
 * INTERFACES.
 */
import { RouteInfo } from 'models/Route';

/**
 * UTILS.
 */
import { isValidString } from "utils";

/**
 * Finds the route which path matches the given path.
 *
 * @param {String} path
 * @param {Array} routes
 * @returns {RouteProps | undefined}
 */
const findRoute = (
  path: string,
  routes: RouteInfo[]
): RouteInfo | undefined => {
  const matchingRoutes = routes.find(({ path: routePath, exact }) =>
    matchPath(path, {
      exact,
      path: routePath
    })
  );

  if (matchingRoutes?.routes) {
    return findRoute(path, matchingRoutes.routes);
  }

  return matchingRoutes;
};

/**
 * Prefetches a route component by a given path.
 *
 * @param {*} to
 */
const prefetchRouteComponent = (to: any) => {
  const path = isValidString(to) ? to : to.pathname;
  const matchingRoute = findRoute(path, routes);

  if (matchingRoute?.component?.preload) {
    matchingRoute.component.preload();
  }
};

export default prefetchRouteComponent;
