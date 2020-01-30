/**
 * EXTERNAL DEPENDENCIES.
 */
import got from "got";

/**
 * UTILS.
 */
import accessEnv from "../utils/accessEnv";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async createUser({ email, password }) {
    return await got
      .post(`${USERS_SERVICE_URI}/users`, {
        json: { email, password }
      })
      .json();
  }

  static async fetchUser({ userId }) {
    return await got
      .get(`${USERS_SERVICE_URI}/users/${userId}`)
      .json();
  }

  static async createUserSession({ email, password }) {
    return await got
      .post(`${USERS_SERVICE_URI}/sessions`, {
        json: { email, password }
      })
      .json();
  }
}
