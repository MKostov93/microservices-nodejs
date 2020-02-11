/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import {
    getListings,
    createListing,
    deleteListing,
} from "../../controllers/listings";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Example routes.
 */
router.get("/listings", getListings);
router.post("/listings", createListing);
router.delete("/listings/:listingId", deleteListing);

export default router;
