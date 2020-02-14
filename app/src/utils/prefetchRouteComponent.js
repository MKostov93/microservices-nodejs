/**
 * EXTERNAL DEPENDENCIES.
 */
import { matchPath } from "react-router-dom";

/**
 * ROUTES.
 */
import routes from 'routes';

/**
 * UTILS.
 */
import { isValidString } from 'utils';

const findRoute = (path, routes) => {
    const matchingRoutes = routes.find(({ path: routePath, exact }) => (
        matchPath(path, {
            exact,
            path: routePath
        })
    ));

    if (matchingRoutes?.routes) {
        return findRoute(path, matchingRoutes.routes);
    }

    return matchingRoutes;
};

const prefetchRouteComponent = to => {
    const path = isValidString(to) ? to : to.pathname;
    const matchingRoute = findRoute(path, routes);

    if (matchingRoute?.component?.preload) {
        matchingRoute.component.preload();
    }
}

export default prefetchRouteComponent;