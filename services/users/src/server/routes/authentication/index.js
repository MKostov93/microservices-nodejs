/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import { createUser, createSession, getUser } from "../../controllers/authentication";

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Authentication routes.
 */
router.post("/users", createUser);
router.get("/users/:userId", getUser);

router.post("/sessions", createSession);

export default router;
