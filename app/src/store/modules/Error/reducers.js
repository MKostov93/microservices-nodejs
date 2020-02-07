/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

const initialState = null;

const errorReducer = produce((draftState = initialState, { type, payload }) => {
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

    if (!matches) {
        return draftState;
    }

    const [, , requestState] = matches;

    return requestState === 'FAILURE' ? payload : null;
});

export default errorReducer;