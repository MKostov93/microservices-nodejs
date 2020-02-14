/**
 * EXTERNAL DEPENDENCIES.
 */
import Loadable from 'react-loadable';

/**
 * COMPONENTS.
 */
const Listing = Loadable({
    loader: () => import('containers/Listings/Listings'),
    loading: () => null,
});

const About = Loadable({
    loader: () => import('containers/About/About'),
    loading: () => null,
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Listing
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
];

export default routes;
