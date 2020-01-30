/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";

/**
 * CONTROLLERS.
 */
import {
    getUser,
    createUser,
    createSession,
    getUserSession
} from "../../controllers/authentication";

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
router.get("/sessions/:sessionId", getUserSession);

export default router;
