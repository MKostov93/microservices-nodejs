/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import { getListings, createListing } from "../../controllers/listings";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Example routes.
 */
router.get("/listings", getListings);
router.post("/listings", createListing);

export default router;
