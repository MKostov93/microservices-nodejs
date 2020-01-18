/**
 * INTERNAL DEPENDENCIES.
 */
import ListingsService from "../../../../adapters/ListingsService";

const listingsResolver = async () => {
  return await ListingsService.fetchListings();
};

export default listingsResolver;
