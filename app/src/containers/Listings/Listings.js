/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useMutation } from "@apollo/react-hooks";

/**
 * QUERIES.
 */
import { LISTINGS } from 'api/queries/listings';

/**
 * MUTATIONS.
 */
import { DELETE_LISTING } from 'api/mutation/listings';

/**
 * ACTIONS.
 */
import {
    listingsRequest,
    listingsSuccess,
    listingsFailure,
    listingDeleteRequest,
    listingDeleteSuccess,
} from 'store/modules/Listings/actions';

/**
 * COMPONENTS.
 */
import PrefetchLink from 'hoc/PrefetchLink/PrefetchLink';
import CreateListing from './CreateListing/CreateListing';
import Listing from 'components/UI/Listing/Listing';

const Listings = () => {
    const dispatch = useDispatch();
    const listings = useSelector(state => state?.listings);
    const [deleteListing] = useMutation(DELETE_LISTING);
    const { loading, error, data } = useQuery(LISTINGS);

    useEffect(() => {
        if (loading) {
            dispatch(listingsRequest());
        }

        if (error) {
            dispatch(listingsFailure(error));
        }

        if (data?.listings) {
            dispatch(listingsSuccess(data.listings));
        }
    }, [loading, error, data]);

    const listingItems = listings ?? data?.listings;

    const handleDeleteListing = (listingId) => {
        dispatch(listingDeleteRequest());

        deleteListing({ variables: { listingId: listingId } });

        dispatch(listingDeleteSuccess(listingId));
    };

    if (loading) {
        return 'Loading...';
    }

    return (
        <>
            <div>
                {listingItems.map(listingItem => (
                    <Listing
                        key={listingItem.id}
                        listing={listingItem}
                        onDelete={() => handleDeleteListing(listingItem.id)} />
                ))}
            </div>

            <CreateListing />

            <PrefetchLink to='/about'>About</PrefetchLink>
        </>
    );
};

export default Listings;
