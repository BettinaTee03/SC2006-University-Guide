import UserModel from "../models/userModel.js";
import passport from "passport";

/**
 * Handles GET request for user logout.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function logOut(req, res) {
  if (req.isAuthenticated()) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to destroy session" });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out successfully" });
    });
  } else {
    // If the user is not authenticated, respond accordingly
    res.status(400).json({ error: "No active session found" });
  }
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
      {
        username: req.body.username,
        particulars: {
          email: req.body.email,
        },
      },
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

export default { logOut, postRegister, postLogin };
