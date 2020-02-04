/**
 * TYPES.
 */
import * as actionTypes from './types';

/**
 * ACTIONS.
 */
export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST
});

export const authSuccess = (session) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: session
});

export const authFailure = (error) => ({
  type: actionTypes.AUTH_FAILURE,
  payload: error
});

export const authLogoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT_SUCCESS
});
