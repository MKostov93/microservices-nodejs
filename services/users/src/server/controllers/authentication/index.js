/**
 * MODELS.
 */
import User from "../../../database/models/user";
import UserSession from "../../../database/models/userSession";

/**
 * UTILS.
 */
import generateUUID from "../../../utils/generateUUID";
import encryptString from "../../../utils/encryptString";
import compareEncryptedString from "../../../utils/compareEncryptedString";
import setExpirationTime from "../../../utils/setExpirationTime";

/**
 * CONSTANTS.
 */
import { USER_SESSION_EXPIRY_HOURS } from "../../constants/";

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Invalid body!"));
  }

  try {
    const newUser = await User.create({
      email,
      id: generateUUID(),
      password: encryptString(password)
    });

    return res.status(201).json(newUser);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);

    if (!user) {
      return next(new Error('Invalid user!'));
    }

    return res.json(user);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

export const createSession = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Invalid body!"));
  }

  try {
    const user = await User.findOne({ attributes: {}, where: { email } });

    if (!user) {
      return next(new Error("Invalid email!"));
    }

    if (!compareEncryptedString(password, user.password)) {
      return next(new Error("Incorrect password!"));
    }

    const userSession = await UserSession.create({
      id: generateUUID(),
      userId: user.id,
      expiresAt: setExpirationTime(USER_SESSION_EXPIRY_HOURS)
    });

    return res.status(201).json(userSession);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

export const getUserSession = async (req, res, next) => {
  try {
    const userSession = await UserSession.findByPk(req.params.sessionId);

    if (!userSession) {
      return next(new Error('Invalid session!'));
    }

    return res.json(userSession);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};