/**
 * TYPES.
 */
import * as actionTypes from './types';

/**
 * ACTIONS.
 */
export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (session) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: session
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  payload: error
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT
});
