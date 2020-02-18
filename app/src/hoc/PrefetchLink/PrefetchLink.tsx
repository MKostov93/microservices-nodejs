/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

/**
 * UTILS.
 */
import prefetchRouteComponent from 'utils/prefetchRouteComponent';

const PrefetchLink = (props) => {
    const { saveData } = useSaveData();
    const { effectiveConnectionType } = useNetworkStatus();
    const handleMouseEnter = () => prefetchRouteComponent(props.to);

    if (/\slow-2g|2g|3g/.test(effectiveConnectionType) || saveData) {
        return <Link {...props} />;
    }

    return <Link onMouseEnter={handleMouseEnter} {...props} />;
}

export default PrefetchLink;
