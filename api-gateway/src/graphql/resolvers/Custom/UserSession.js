/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../../adapters/UsersService";

const UserSession = {
    user: async ({ userId }) => {
        try {
            return await UsersService.fetchUser({ userId: userId });
        } catch (err) {
            throw err;
        }
    }
}

export default UserSession;