/**
* EXTERNAL DEPENDENCIES.
*/
import { createStore, combineReducers } from "redux";
import { exposeStore } from "redux-in-worker";

/**
* REDUCERS.
*/
import * as reducers from "./modules";

/**
* INITIALIZATION.
*/
const store = createStore(combineReducers(reducers));

exposeStore(store);
