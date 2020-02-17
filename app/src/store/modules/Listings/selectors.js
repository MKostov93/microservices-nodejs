/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

const selectListingsState = state => state?.listings;

export const getListings = createSelector(
    selectListingsState,
    listings => listings
);