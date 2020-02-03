/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../../../adapters/UsersService";

const createUserSessionResolver = async (obj, { email, password }, { res }) => {
  try {
    const userSession = await UsersService.createUserSession({ email, password });

    res.cookie("userSessionId", userSession.id, { httpOnly: true });

    return userSession;
  } catch (err) {
    throw err;
  }
};

export default createUserSessionResolver;
