/**
 * EXTERNAL DEPENDENCIES.
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

/**
 * REDUCERS.
 */
import * as reducers from "./modules";

/**
 * INITIALIZATION.
 */
const configureStore = initialState => {
  const rootReducer = combineReducers(reducers);
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : null;
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  };
};

export default configureStore;
