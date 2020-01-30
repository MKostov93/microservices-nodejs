/**
 * INTERNAL DEPENDENCIES.
 */
import UsersService from "../../../adapters/UsersService";

const UserSession = {
    user: async ({ userId }) => {
        return await UsersService.fetchUser({ userId: userId });
    }
}

export default UserSession;