/**
 * TYPES.
 */
import { AuthActionTypes } from "./action-types";

/**
 * INTERFACES.
 */
import { IUserSession } from "models/User";

interface AuthRequestAction {
  type: typeof AuthActionTypes.AUTH_REQUEST;
}

interface AuthSuccessAction {
  type: typeof AuthActionTypes.AUTH_SUCCESS;
  payload: IUserSession;
}

interface AuthFailureAction {
  type: typeof AuthActionTypes.AUTH_FAILURE;
  payload: any;
}

interface AuthLogoutRequestAction {
  type: typeof AuthActionTypes.AUTH_LOGOUT_REQUEST;
}

interface AuthLogoutSuccessAction {
  type: typeof AuthActionTypes.AUTH_LOGOUT_SUCCESS;
}

export interface AuthState {
  session: IUserSession | null;
}

export type AuthAction =
  | AuthRequestAction
  | AuthSuccessAction
  | AuthFailureAction
  | AuthLogoutRequestAction
  | AuthLogoutSuccessAction;
