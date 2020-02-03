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
  error: null,
  loading: false,
};

const authReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      draft.error = null;
      draft.loading = true;
      break;
    case actionTypes.AUTH_SUCCESS:
      draft.session = action.payload;
      draft.error = null;
      draft.loading = false;
      break;
    case actionTypes.AUTH_FAIL:
      draft.error = action.payload;
      draft.loading = false;
      break;
    case actionTypes.AUTH_LOGOUT:
      draft.session = null;
      break;
    default:
      return draft;
  }
});

export default authReducer;
