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
        default:
            return draftState;
    }
});

export default listingsReducer;
