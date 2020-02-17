/**
 * EXTERNAL DEPENDENCIES.
 */
import loadable from '@loadable/component';

/**
 * COMPONENTS.
 */
const Listing = loadable(() => import(
    /* webpackChunkName: "listing" */
    'containers/Listings/Listings'
));
const About = loadable(() => import(
    /* webpackChunkName: "about" */
    'containers/About/About'
));

const routes = [
    {
        path: '/',
        exact: true,
        component: Listing,
    },
    {
        path: '/about',
        exact: true,
        component: About,
    },
];

export default routes;
