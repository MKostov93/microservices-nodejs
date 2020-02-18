/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

/**
 * TYPES.
 */
import { AppState } from "store/modules/types";

const selectErrorState = (state: AppState) => state?.error;

export const getError = createSelector(selectErrorState, error => error);
