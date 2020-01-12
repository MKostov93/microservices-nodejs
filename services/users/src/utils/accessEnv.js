/**
 * UTILS.
 */
import { memoize } from "../utils";

// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialisation) so that the error is thrown as early as possible
// caching the values improves performance - accessing process.env many times is bad

const accessEnv = memoize((key, defaultValue) => {
  if (!(key in process.env)) {
    if (defaultValue) {
      return defaultValue;
    }

    throw new Error(`${key} not found in process.env!`);
  }

  return process.env[key];
});

export default accessEnv;
