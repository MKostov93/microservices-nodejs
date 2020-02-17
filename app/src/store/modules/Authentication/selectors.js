/**
 * EXTERNAL DEPENDENCIES.
 */
import { createSelector } from "reselect";

const selectAuthState = state => state?.auth;

export const getSession = createSelector(
    selectAuthState,
    auth => auth?.session
);

export const isSignedIn = createSelector(
    getSession,
    session => Boolean(session)
);

export const isSignedOut = createSelector(
    isSignedIn,
    isAuthenticated => !isAuthenticated
);