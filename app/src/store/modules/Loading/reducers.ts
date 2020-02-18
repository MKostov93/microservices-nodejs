/**
 * EXTERNAL DEPENDENCIES.
 */
import { Reducer, Action } from "redux";
import produce from "immer";

const initialState: boolean = false;

const loadingReducer: Reducer<boolean, Action> = produce(
  (draftState = initialState, { type }: Action) => {
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) {
      return draftState;
    }

    const [, , requestState] = matches;

    return requestState === "REQUEST";
  }
);

export default loadingReducer;
