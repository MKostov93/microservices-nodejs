/**
 * EXTERNAL DEPENDENCIES.
 */
import { Reducer } from "redux";
import produce from "immer";

/**
 * TYPES.
 */
import { ListingsAction } from "./types";
import { ListingsActionTypes } from "./action-types";

/**
 * INTERFACES.
 */
import { IListing } from "models/Listing";

const initialState: [IListing] | [] = [];

const listingsReducer: Reducer<[IListing] | [], ListingsAction> = produce(
  (draftState = initialState, action: ListingsAction) => {
    switch (action.type) {
      case ListingsActionTypes.LISTINGS_SUCCESS:
        return [...action.payload];
      case ListingsActionTypes.LISTING_CREATE_SUCCESS:
        draftState.push(action.payload);
        break;
      case ListingsActionTypes.LISTING_DELETE_SUCCESS:
        return draftState.filter(({ id }: IListing) => id !== action.payload);
      default:
        return draftState;
    }
  }
);

export default listingsReducer;
