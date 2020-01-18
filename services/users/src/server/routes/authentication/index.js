/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import { createUser } from "../../controllers/authentication";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Example routes.
 */
router.post("/users", createUser);

export default router;
