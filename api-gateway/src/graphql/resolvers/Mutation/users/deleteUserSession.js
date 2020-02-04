/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../../../adapters/UsersService";

const deleteUserSessionResolver = async (obj, { sessionId }, { res }) => {
    try {
        await UsersService.deleteUserSession({ sessionId });

        res.clearCookie("userSessionId");

        return true;
    } catch (err) {
        throw err;
    }
};

export default deleteUserSessionResolver;
