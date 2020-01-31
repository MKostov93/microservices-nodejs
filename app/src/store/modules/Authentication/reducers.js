/**
 * TYPES.
 */
import * as actionTypes from './types'

/**
 * UTILS.
 */
import { updateObject } from 'utils';

const initialState = {
  session: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, {
        error: null,
        loading: true
      });
    case actionTypes.AUTH_SUCCESS:
      return updateObject(state, {
        session: action.payload,
        error: null,
        loading: false
      });
    case actionTypes.AUTH_FAIL:
      return updateObject(state, {
        error: action.payload,
        loading: false
      });
    case actionTypes.AUTH_LOGOUT:
      return updateObject(state, { session: null });
    default:
      return state;
  }
}

export default authReducer;
