/**
 * Determines if value is set.
 *
 * @param  {*}  value
 * @return {boolean}  True if is not set, False otherwise.
 */
export const isNil = (value: any) =>
  Boolean(typeof value === "undefined" || value === null);

/**
 * Determines if Symbol.
 *
 * @param   {*} value
 * @returns {Boolean} True if Symbol, False otherwise.
 */
export const isSymbol = (value: any) => Boolean(typeof value === "symbol");

/**
 * Gets Symbol value.
 *
 * @param   {Symbol} symbol
 * @returns {String} Returns the description of the Symbol.
 */
export const getSymbolValue = (symbol: symbol) => symbol.description;

/**
 * Determines if value is empty.
 *
 * @param  {*}  value
 * @return {boolean}  True if is empty, False otherwise.
 */
export const isEmpty = (value: any) => Boolean(!(value && value.length > 0));

/**
 * Checks if the given value is valid string.
 *
 * @param  {*}  value;
 * @return {Boolean} True if a valid string, False otherwise.
 */
export const isValidString = (value: any) =>
  Boolean(!isNil(value) && typeof value === "string" && !isEmpty(value.trim()));
