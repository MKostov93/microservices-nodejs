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
