/**
 * EXTERNAL DEPENDENCIES.
 */
const bcrypt = require("bcryptjs");

/**
 * Compare encrypted strings.
 *
 * @param  {String}  string
 * @param  {String}  encryptedString
 * @return {Boolean}
 */
const compareEncryptedString = (string, encryptedString) =>
  bcrypt.compareSync(string, encryptedString);

export default compareEncryptedString;
