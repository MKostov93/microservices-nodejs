/**
 * Parse JSON to string.
 *
 * @param  {Object}  data
 * @return {JSON}
 */
export const parseJSONToString = data => JSON.stringify(data);

/**
 * Creates a function that memoizes the result of the given 'method'.
 *
 * @param  {Function}  method  The method
 * @return {Function}
 */
export const memoize = method => {
  // Throws an error, if the method is not provided or if it's not a valid one.
  if (!method || typeof method !== "function") {
    throw new Error("No valid method function was provided");
  }

  // Creates a cache.
  const cache = new Map();

  return (...args) => {
    // Assigns the parsed arguments into string.
    const key = parseJSONToString(args);

    // Returns the current key from cache,
    // if the cache contains the current key.
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Assigns the method call result
    // and set it in the cache.
    const result = method.call(null, ...args);
    cache.set(key, result);

    return result;
  };
};
