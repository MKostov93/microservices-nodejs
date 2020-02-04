/**
 * EXTERNAL DEPENDENCIES.
 */
import got from "got";

/**
 * UTILS.
 */
import accessEnv from "../utils/accessEnv";

const LISTINGS_SERVICE_URI = accessEnv("LISTINGS_SERVICE_URI");

export default class ListingsService {
  static async fetchListings() {
    return await got
      .get(`${LISTINGS_SERVICE_URI}/listings`)
      .json();
  }

  static async createListing({ title, description }) {
    return await got
      .post(`${LISTINGS_SERVICE_URI}/listings`, {
        json: { title, description }
      })
      .json();
  }
}
