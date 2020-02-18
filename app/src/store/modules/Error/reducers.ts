/**
 * EXTERNAL DEPENDENCIES.
 */
import { Reducer, Action } from "redux";
import produce from "immer";

const initialState: any | null = null;

const errorReducer: Reducer<any | null, Action> = produce(
  (draftState = initialState, { type, payload }) => {
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

    if (!matches) {
      return draftState;
    }

    const [, , requestState] = matches;

    return requestState === "FAILURE" ? payload : null;
  }
);

export default errorReducer;
