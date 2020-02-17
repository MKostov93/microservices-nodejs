/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

const selectErrorState = state => state?.error;

export const getError = createSelector(
    selectErrorState,
    error => error
);