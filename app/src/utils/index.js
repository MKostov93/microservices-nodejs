/**
 * Determines if value is set.
 *
 * @param  {*}  value
 * @return {boolean}  True if is not set, False otherwise.
 */
export const isNil = value => Boolean(typeof value === 'undefined' || value === null);

/**
 * Gets the prototype in string of any given value.
 *
 * @param  {*}  value
 * @return {String} Returns a string of the value prototype.
 */
export const getPrototypeToString = value => Object.prototype.toString.call(value);

/**
 * Determines if object.
 *
 * @param  {*}  value
 * @return {boolean} True if object, False otherwise.
 */
export const isObject = value => Boolean(!isNil(value) && typeof value === 'object' && getPrototypeToString(value) === '[object Object]');

/**
 * Determines if array.
 *
 * @param  {*}  value
 * @return {boolean} True if array, False otherwise.
 */
export const isArray = value => Boolean(!isNil(value) && getPrototypeToString(value) === '[object Array]' && Array.isArray(value));
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @param  {Object/Array}  target
 * @param  {Object/Array}  source
 * @return {Object/Array}
 */
export const mergeDeep = (target, source) => {
    if (target === source) {
        return;
    }

    // Returns the source if neither of target and source are objects.
    if (!isObject(target) || !isObject(source)) {
        return source;
    }

    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (isArray(targetValue) && isArray(sourceValue)) {
            target[key] = [...targetValue, ...sourceValue];
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        } else {
            target[key] = sourceValue;
        }
    });

    return target;
};

/**
 * Update object properties.
 *
 * @param {Object}  oldObject
 * @param {Object}  updatedValues
 */
export const updateObject = (oldObject, updatedValues) => mergeDeep(oldObject, updatedValues);