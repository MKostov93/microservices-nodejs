/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

/**
 * TYPES.
 */
import { AppState } from "store/modules/types";

const selectListingsState = (state: AppState) => state?.listings;

export const getListings = createSelector(
  selectListingsState,
  listings => listings
);
