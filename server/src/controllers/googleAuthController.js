import passport from "passport";

/**
 * Initiates the Google OAuth2 authentication process.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
function getLogin(req, res, next) {
  passport.authenticate("google", { scope: ["profile"] })(req, res, next);
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
    successRedirect: "http://localhost:5173/courses", // React app's dashboard or home page
  })(req, res, next);
}

export default { getLogin, getRedirect };
