/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

const initialState = false;

const loadingReducer = produce((draftState = initialState, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) {
        return draftState;
    }

    const [, , requestState] = matches;

    return requestState === 'REQUEST';
});

export default loadingReducer;