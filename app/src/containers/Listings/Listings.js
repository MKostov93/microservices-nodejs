/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from "@apollo/react-hooks";

/**
 * QUERIES.
 */
import { LISTINGS } from 'api/queries/listings';

/**
 * ACTIONS.
 */
import {
    listingsRequest,
    listingsSuccess,
    listingsFailure,
} from 'store/modules/Listings/actions';

/**
 * COMPONENTS.
 */
import CreateListing from './CreateListing/CreateListing';

/**
 * STYLES.
 */
const Listing = styled.div`
  padding: 1rem 0;

  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.veryLightGrey};
  }
`;

const Title = styled.h4`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const Listings = () => {
    const dispatch = useDispatch();
    const listings = useSelector(state => state?.listings);
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

    if (loading) {
        return 'Loading...';
    }

    return (
        <>
            <div>
                {listingItems.map(({ id, title, description }) => (
                    <Listing key={id}>
                        <Title>{title}</Title>

                        <Description>{description}</Description>
                    </Listing>
                ))}
            </div>

            <CreateListing />
        </>
    );
};

export default Listings;