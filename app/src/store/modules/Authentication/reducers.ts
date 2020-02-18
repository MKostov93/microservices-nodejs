/**
 * EXTERNAL DEPENDENCIES.
 */
import { Reducer } from "redux";
import produce from "immer";

/**
 * TYPES.
 */
import { AuthActionTypes } from "./action-types";
import { AuthState, AuthAction } from "./types";

const initialState: AuthState = {
  session: null
};

const authReducer: Reducer<AuthState, AuthAction> = produce(
  (draftState = initialState, action: AuthAction) => {
    switch (action.type) {
      case AuthActionTypes.AUTH_SUCCESS:
        draftState.session = action.payload;
        break;
      case AuthActionTypes.AUTH_LOGOUT_SUCCESS:
        draftState.session = null;
        break;
      default:
        return draftState;
    }
  }
);

export default authReducer;
