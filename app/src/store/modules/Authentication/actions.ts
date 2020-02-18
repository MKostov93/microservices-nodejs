/**
 * TYPES.
 */
import { AuthAction } from "./types";
import { AuthActionTypes } from "./action-types";

/**
 * INTERFACES.
 */
import { IUserSession } from "models/User";

/**
 * ACTIONS.
 */
export const authRequest = (): AuthAction => ({
  type: AuthActionTypes.AUTH_REQUEST
});

export const authSuccess = (session: IUserSession): AuthAction => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: session
});

export const authFailure = (error: any): AuthAction => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: error
});

export const authLogoutRequest = (): AuthAction => ({
  type: AuthActionTypes.AUTH_LOGOUT_REQUEST
});

export const authLogoutSuccess = (): AuthAction => ({
  type: AuthActionTypes.AUTH_LOGOUT_SUCCESS
});
