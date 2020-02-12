/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../adapters/UsersService";

const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        try {
            res.locals.userSession = await UsersService.fetchUserSession({
                sessionId: req.cookies.userSessionId
            });
        } catch (err) {
            return next(err);
        }
    }

    return next();
};

export default injectSession;