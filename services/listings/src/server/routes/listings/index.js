/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import { getListings } from "../../controllers/listings";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Example routes.
 */
router.get("/listings", getListings);

export default router;
