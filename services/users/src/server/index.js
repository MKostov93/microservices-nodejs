/**
 * EXTERNAL DEPENDENCIES.
 */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

/**
 * UTILS.
 */
import accessEnv from "../../src/utils/accessEnv";

/**
 * ROUTES.
 */
import routes from "./routes";

/**
 * MIDDLEWARE.
 */
import errorHandler from "./middleware/errorHandler";

/**
 * Get service PORT.
 */
const PORT = accessEnv("PORT", 7101);

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
);

/**
 * API routes.
 */
app.use("/", routes);

/**
 * Error Handler.
 */
app.use(errorHandler);

/**
 * Start Express server.
 */
app.listen(PORT, "0.0.0.0", () =>
  console.info(`Users service listening on ${PORT}!`)
);
