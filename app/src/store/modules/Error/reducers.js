/**
 * EXTERNAL DEPENDENCIES.
 */
import produce from 'immer';

const initialState = {
    message: null,
};

const errorReducer = produce((draftState = initialState, action) => {
    const { type, payload } = action;
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

    if (!matches) {
        return draftState;
    }

    const [, , requestState] = matches;

    draftState.message = requestState === 'FAILURE' ? payload.message : null;
});

export default errorReducer;