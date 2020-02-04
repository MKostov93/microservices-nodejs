/**
 * INTERNAL DEPENDENCIES.
 */
import ListingsService from "../../../../adapters/ListingsService";

const createListingResolver = async (obj, { title, description }, { res }) => {
    if (!res.locals.userSession) {
        throw new Error('Not logged in!');
    }

    try {
        return await ListingsService.createListing({ title, description });
    } catch (err) {
        throw err;
    }
};

export default createListingResolver;
