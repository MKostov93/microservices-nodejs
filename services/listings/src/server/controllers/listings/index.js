/**
 * MODELS.
 */
import { Listing } from "../../../database/models/listing";

export const getListings = async (req, res, next) => {
  try {
    const listings = await Listing.findAll();
    return res.status(200).json(listings);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};
