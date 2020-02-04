/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

const initialState = null;

const errorReducer = produce((draftState = initialState, action) => {
    const { type, payload } = action;
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

    if (!matches) {
        return draftState;
    }

    const [, , requestState] = matches;

    return requestState === 'FAILURE' ? payload : null;
});

export default errorReducer;