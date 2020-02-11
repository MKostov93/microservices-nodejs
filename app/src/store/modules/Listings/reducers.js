/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

/**
 * TYPES.
 */
import * as actionTypes from './types'

const initialState = [];

const listingsReducer = produce((draftState = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LISTINGS_SUCCESS:
            return [...payload];
        case actionTypes.LISTING_CREATE_SUCCESS:
            draftState.push(payload);
            break;
        case actionTypes.LISTING_DELETE_SUCCESS:
            return draftState.filter(({ id }) => id !== payload);
        default:
            return draftState;
    }
});

export default listingsReducer;
