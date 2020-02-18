/**
 * TYPES.
 */
import { ListingsActionTypes } from "./action-types";

/**
 * INTERFACES.
 */
import { IListing } from "models/Listing";

interface ListingsRequestAction {
  type: typeof ListingsActionTypes.LISTINGS_REQUEST;
}

interface ListingsSuccessAction {
  type: typeof ListingsActionTypes.LISTINGS_SUCCESS;
  payload: [IListing];
}

interface ListingsFailureAction {
  type: typeof ListingsActionTypes.LISTINGS_FAILURE;
  payload: any;
}

interface ListingCreateRequestAction {
  type: typeof ListingsActionTypes.LISTING_CREATE_REQUEST;
}

interface ListingCreateSuccessAction {
  type: typeof ListingsActionTypes.LISTING_CREATE_SUCCESS;
  payload: IListing;
}

interface ListingCreateFailureAction {
  type: typeof ListingsActionTypes.LISTING_CREATE_FAILURE;
  payload: any;
}

interface ListingDeleteRequestAction {
  type: typeof ListingsActionTypes.LISTING_DELETE_REQUEST;
}

interface ListingDeleteSuccessAction {
  type: typeof ListingsActionTypes.LISTING_DELETE_SUCCESS;
  payload: string;
}

interface ListingDeleteFailureAction {
  type: typeof ListingsActionTypes.LISTING_DELETE_FAILURE;
  payload: any;
}

export type ListingsAction =
  | ListingsRequestAction
  | ListingsSuccessAction
  | ListingsFailureAction
  | ListingCreateRequestAction
  | ListingCreateSuccessAction
  | ListingCreateFailureAction
  | ListingDeleteRequestAction
  | ListingDeleteSuccessAction
  | ListingDeleteFailureAction;
