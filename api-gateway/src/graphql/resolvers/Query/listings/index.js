/**
 * INTERNAL DEPENDENCIES.
 */
import ListingsService from "../../../../adapters/ListingsService";

const listingsResolver = async () => {
  try {
    return await ListingsService.fetchListings();
  } catch (err) {
    throw err;
  }
};

export default listingsResolver;
