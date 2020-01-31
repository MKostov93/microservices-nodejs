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
    try {
      return await got
        .post(`${USERS_SERVICE_URI}/users`, {
          json: { email, password }
        })
        .json();
    } catch (err) {
      console.log(err.response.body);
    }
  }

  static async fetchUser({ userId }) {
    try {
      return await got
        .get(`${USERS_SERVICE_URI}/users/${userId}`)
        .json();
    } catch (err) {
      console.log(err.response.body);
    }
  }

  static async createUserSession({ email, password }) {
    try {
      return await got
        .post(`${USERS_SERVICE_URI}/sessions`, {
          json: { email, password }
        })
        .json();
    } catch (err) {
      console.log(err.response.body);
    }
  }

  static async fetchUserSession({ sessionId }) {
    try {
      return await got
        .get(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
        .json();
    } catch (err) {
      console.log(err.response.body);
    }
  }

  static async deleteUserSession({ sessionId }) {
    try {
      return await got
        .delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
        .json();
    } catch (err) {
      console.log(err.response.body);
    }
  }
}
