import UserModel from "../models/userModel.js";
import passport from "passport";

/**
 * Handles GET request for the login page.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
function getLogin(req, res) {
  res.json({ message: "Login page" });
}

/**
 * Handles GET request for the registration page.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
function getRegister(req, res) {
  res.json({ message: "Register page" });
}

/**
 * Handles POST request for user registration.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function postRegister(req, res) {
  try {
    const newUser = await UserModel.register(
      { username: req.body.username },
      req.body.password
    );
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

/**
 * Handles POST request for user login.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
function postLogin(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    if (!user) {
      return res.status(401).json({ success: false, error: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, error: err.message });
      }

      return res.status(200).json({ success: true, user });
    });
  })(req, res, next);
}

export default { getLogin, getRegister, postRegister, postLogin };
