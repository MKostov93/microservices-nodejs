/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../../../adapters/UsersService";

const createUserResolver = async (obj, { email, password }) => {
  try {
    return await UsersService.createUser({ email, password });
  } catch (err) {
    throw err;
  }
};

export default createUserResolver;
