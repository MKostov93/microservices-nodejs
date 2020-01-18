/**
 * EXTERNAL DEPENDENCIES.
 */
import bcrypt from "bcryptjs";

/**
 * Encrypt string.
 *
 * @param  {String}  string
 * @param  {Number}  salt
 * @return {Encrypted String}
 */
const encryptString = (string, salt = bcrypt.genSaltSync(12)) =>
  bcrypt.hashSync(string, salt);

module.exports = encryptString;
