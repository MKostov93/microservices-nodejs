/**
 * EXTERNAL DEPENDENCIES.
 */
const express = require("express");

/**
 * ROUTES.
 */
import AuthenticationRoutes from "./authentication";

/**
 * INITIALIZE.
 */
const router = express.Router();

router.use(AuthenticationRoutes);

module.exports = router;
