/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

/**
 * TYPES.
 */
import * as actionTypes from './types'

const initialState = {
  session: null,
};

const authReducer = produce((draftState = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_SUCCESS:
      draftState.session = payload;
      break;
    case actionTypes.AUTH_LOGOUT_SUCCESS:
      draftState.session = null;
      break;
    default:
      return draftState;
  }
});

export default authReducer;
