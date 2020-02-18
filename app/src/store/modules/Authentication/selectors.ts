/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

/**
 * TYPES.
 */
import { AppState } from "store/modules/types";

const selectAuthState = (state: AppState) => state?.auth;

export const getSession = createSelector(
  selectAuthState,
  auth => auth?.session
);

export const isSignedIn = createSelector(getSession, session =>
  Boolean(session)
);

export const isSignedOut = createSelector(
  isSignedIn,
  isAuthenticated => !isAuthenticated
);
