/**
 * EXTERNAL DEPENDENCIES.
 */
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { wrapStore } from 'redux-in-worker';

/**
 * INITIALIZATION.
 */
const configureStore = initialState => {
  const remoteStore = new Worker('./worker.js', { type: 'module' });

  return wrapStore(
    remoteStore,
    initialState,
    devToolsEnhancer(),
  );
};

export default configureStore;
