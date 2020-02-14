/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { Link } from 'react-router-dom'

/**
 * UTILS.
 */
import prefetchRouteComponent from 'utils/prefetchRouteComponent';

const PrefetchLink = (props) => {
    const handleMouseEnter = () => prefetchRouteComponent(props.to);

    return <Link onMouseEnter={handleMouseEnter} {...props} />;
}

export default PrefetchLink;
