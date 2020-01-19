/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import { createUser, createSession } from "../../controllers/authentication";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Authentication routes.
 */
router.post("/users", createUser);
router.post("/sessions", createSession);

export default router;
