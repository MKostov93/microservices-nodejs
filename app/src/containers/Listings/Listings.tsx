/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";

/**
 * QUERIES.
 */
import { LISTINGS } from "api/queries/listings";

/**
 * MUTATIONS.
 */
import { DELETE_LISTING } from "api/mutation/listings";

/**
 * ACTIONS.
 */
import {
  listingsRequest,
  listingsSuccess,
  listingsFailure,
  listingDeleteRequest,
  listingDeleteSuccess,
  listingDeleteFailure
} from "store/modules/Listings/actions";

/**
 * INTERFACES.
 */
import { IListing } from "models/Listing";

/**
 * SELECTORS.
 */
import { isSignedOut } from "store/modules/Authentication/selectors";

/**
 * COMPONENTS.
 */
import PrefetchLink from "hoc/PrefetchLink/PrefetchLink";
import CreateListing from "./CreateListing/CreateListing";
import Listing from "components/UI/Listing/Listing";

/**
 * UTILS.
 */
import { isEmpty } from 'utils';

const Listings = () => {
  const dispatch = useDispatch();
  const isNotAuthenticated = useSelector(isSignedOut);
  const [deleteListing] = useMutation(DELETE_LISTING);
  const { loading, error, data, refetch } = useQuery(LISTINGS);

  if (loading) {
    dispatch(listingsRequest());

    return 'Loading...';
  }

  if (error) {
    dispatch(listingsFailure(error));
  }

  if (data?.listings) {
    dispatch(listingsSuccess(data.listings));
  }

  const handleDeleteListing = async (listingId: string) => {
    dispatch(listingDeleteRequest());

    try {
      await deleteListing({ variables: { listingId: listingId } });

      dispatch(listingDeleteSuccess(listingId));

      refetch();
    } catch (error) {
      dispatch(listingDeleteFailure(error));
    }
  };

  const handleCreateListing = () => {
    refetch();
  }

  return (
    <>
      <div>
        {!isEmpty(data.listings) ? data.listings.map((listingItem: IListing) => (
          <Listing
            key={listingItem.id}
            listing={listingItem}
            onDelete={() => handleDeleteListing(listingItem.id)} />
        )) : <h2>No listings found!</h2>}
      </div>

      {isNotAuthenticated ? <p>Sign in to add listings.</p> : <CreateListing onCreateListing={handleCreateListing} />}

      <PrefetchLink to="/about">About</PrefetchLink>
    </>
  );
};

export default Listings;
