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

export const createListing = async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next(new Error('Invalid body!'));
  }

  try {
    const listing = await Listing.create({ title, description });

    return res.json(listing);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};
