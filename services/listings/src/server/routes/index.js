/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * ROUTES.
 */
import ListingRoutes from "./listings";

/**
 * INITIALIZE.
 */
const router = express.Router();

router.use(ListingRoutes);

export default router;
