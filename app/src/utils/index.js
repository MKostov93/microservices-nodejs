/**
 * Determines if Symbol.
 *
 * @param   {*} value
 * @returns {Boolean} True if Symbol, False otherwise.
 */
export const isSymbol = value => typeof value === 'symbol';

/**
 * Gets Symbol value.
 *
 * @param   {Symbol} symbol
 * @returns {String} Returns the description of the Symbol.
 */
export const getSymbolValue = symbol => symbol.description;