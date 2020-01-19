/**
 * EXTERNAL DEPENDENCIES.
 */
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

/**
 * INTERNAL DEPENDENCIES.
 */
import resolvers from "../graphql/resolvers";
import typeDefs from "../graphql/typeDefs";

/**
 * UTILS.
 */
import accessEnv from "../../src/utils/accessEnv";

/**
 * Get service PORT.
 */
const PORT = accessEnv("PORT", 7000);

/**
 * Create Apollo server.
 */
const apolloServer = new ApolloServer({
  context: a => a,
  resolvers,
  typeDefs,
  formatError(err) {
    if (!err?.originalError?.response?.body) {
      return err;
    }

    const errorDetails = JSON.parse(err.originalError.response.body);

    const data = errorDetails.data;
    const message = errorDetails.message || "An error occurred.";
    const statusCode = errorDetails.statusCode || 500;

    return { message, statusCode, data };
  }
});

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.use(cookieParser());
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
 * Apply Apollo middlewares.
 */
apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

/**
 * Start Express server.
 */
app.listen(PORT, "0.0.0.0", () =>
  console.info(`API gateway listening on ${PORT}!`)
);
