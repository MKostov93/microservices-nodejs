/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../adapters/UsersService";

const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        res.locals.userSession = await UsersService.fetchUserSession({
            sessionId: req.cookies.userSessionId
        });
    }

    return next();
};

export default injectSession;