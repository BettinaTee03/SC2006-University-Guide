/**
 * Middleware to ensure the request is authenticated.
 * If authenticated, proceeds to the next middleware or route handler.
 * If not authenticated, responds with a 401 status and a JSON error message.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ error: "Authentication required" });
  }
}

export default ensureAuthenticated;
