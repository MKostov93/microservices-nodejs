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
    getUserSession,
    deleteUserSession
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
router.delete("/sessions/:sessionId", deleteUserSession);

export default router;
