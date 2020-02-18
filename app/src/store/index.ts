/**
 * EXTERNAL DEPENDENCIES.
 */
import { composeWithDevTools } from 'redux-devtools-extension';
import { wrapStore } from 'redux-in-worker';

/**
 * UTILS.
 */
import { isSymbol, getSymbolValue } from 'utils';

/**
 * INITIALIZATION.
 */
const configureStore = (initialState = {}) => {
  const remoteStore = new Worker('./worker', { type: 'module' });
  const composeEnhancers = composeWithDevTools({
    actionSanitizer: action => ({
      ...action,
      type: isSymbol(action.type) ? getSymbolValue(action.type) : action.type
    })
  });

  return wrapStore(
    remoteStore,
    initialState,
    composeEnhancers()
  );
};

export default configureStore;
