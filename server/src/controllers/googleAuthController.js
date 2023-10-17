import passport from "passport";

/**
 * Initiates the Google OAuth2 authentication process.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
function getLogin(req, res, next) {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
}

/**
 * Handles the redirect from Google OAuth2 authentication,
 * redirecting the user to the dashboard on success or
 * the login page on failure.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
function getRedirect(req, res, next) {
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login", // React app's login page
    successRedirect: "http://localhost:5173/auth-success", // React app's dashboard or home page
  })(req, res, next);
}

/**
 * Checks if the user is authenticated.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
function getSession(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true });
  } else {
    res.status(200).json({ isAuthenticated: false });
  }
}

export default { getLogin, getRedirect, getSession };
