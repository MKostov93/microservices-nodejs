/**
 * TYPES.
 */
import { ListingsAction } from "./types";
import { ListingsActionTypes } from "./action-types";

/**
 * INTERFACES.
 */
import { IListing } from "models/Listing";

/**
 * ACTIONS.
 */
export const listingsRequest = (): ListingsAction => ({
  type: ListingsActionTypes.LISTINGS_REQUEST
});

export const listingsSuccess = (listings: [IListing]): ListingsAction => ({
  type: ListingsActionTypes.LISTINGS_SUCCESS,
  payload: listings
});

export const listingsFailure = (error: any): ListingsAction => ({
  type: ListingsActionTypes.LISTINGS_FAILURE,
  payload: error
});

export const listingCreateRequest = (): ListingsAction => ({
  type: ListingsActionTypes.LISTING_CREATE_REQUEST
});

export const listingCreateSuccess = (listing: IListing): ListingsAction => ({
  type: ListingsActionTypes.LISTING_CREATE_SUCCESS,
  payload: listing
});

export const listingCreateFailure = (error: any): ListingsAction => ({
  type: ListingsActionTypes.LISTING_CREATE_FAILURE,
  payload: error
});

export const listingDeleteRequest = (): ListingsAction => ({
  type: ListingsActionTypes.LISTING_DELETE_REQUEST
});

export const listingDeleteSuccess = (listingId: string): ListingsAction => ({
  type: ListingsActionTypes.LISTING_DELETE_SUCCESS,
  payload: listingId
});

export const listingDeleteFailure = (error: any): ListingsAction => ({
  type: ListingsActionTypes.LISTING_DELETE_FAILURE,
  payload: error
});
