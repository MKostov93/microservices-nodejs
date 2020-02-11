/**
 * INTERNAL DEPENDENCIES.
 */
import ListingsService from "../../../../adapters/ListingsService";

const deleteListingResolver = async (obj, { listingId }, { res }) => {
    if (!res.locals.userSession) {
        throw new Error('Not logged in!');
    }

    try {
        await ListingsService.deleteListing({ listingId });

        return true;
    } catch (err) {
        throw err;
    }
};

export default deleteListingResolver;
