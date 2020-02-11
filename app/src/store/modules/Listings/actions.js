/**
 * TYPES.
 */
import * as actionTypes from './types';

/**
 * ACTIONS.
 */
export const listingsRequest = () => ({
    type: actionTypes.LISTINGS_REQUEST
});

export const listingsSuccess = (listings) => ({
    type: actionTypes.LISTINGS_SUCCESS,
    payload: listings
});

export const listingsFailure = (error) => ({
    type: actionTypes.LISTINGS_FAILURE,
    payload: error
});

export const listingCreateRequest = () => ({
    type: actionTypes.LISTING_CREATE_REQUEST
});

export const listingCreateSuccess = (listing) => ({
    type: actionTypes.LISTING_CREATE_SUCCESS,
    payload: listing
});

export const listingCreateFailure = (error) => ({
    type: actionTypes.LISTING_CREATE_FAILURE,
    payload: error
});

export const listingDeleteRequest = () => ({
    type: actionTypes.LISTING_DELETE_REQUEST
});

export const listingDeleteSuccess = (listingId) => ({
    type: actionTypes.LISTING_DELETE_SUCCESS,
    payload: listingId
});

export const listingDeleteFailure = (error) => ({
    type: actionTypes.LISTING_DELETE_FAILURE,
    payload: error
});

