import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../models/userModel.js";
import { config } from "dotenv";

config();

/**
 * Initializes Passport.js with Google OAuth 2.0 authentication strategy.
 * This function sets up Passport to use the Google OAuth 2.0 strategy,
 * pulling configuration from environment variables. When a user authenticates,
 * it extracts key profile details and either finds or creates a user
 * in the `UserModel` database based on the Google profile ID.
 *
 * @function
 * @param {Object} options - The Google OAuth 2.0 authentication options.
 * @param {string} options.clientID - The Google OAuth client ID (from environment variable).
 * @param {string} options.clientSecret - The Google OAuth client secret (from environment variable).
 * @param {string} options.callbackURL - The callback URL for Google OAuth.
 * @param {function} verifyCallback - The callback function that verifies the OAuth response,
 * extracts user profile information, and either finds or creates a user in the database.
 * @param {string} verifyCallback.accessToken - The access token returned from Google.
 * @param {string} verifyCallback.refreshToken - The refresh token returned from Google.
 * @param {Object} verifyCallback.profile - The user's Google profile.
 * @param {function} verifyCallback.cb - The callback to pass to Passport once processing is done.
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      const userData = {
        googleId: profile.id,
        "particulars.firstName": profile.name.givenName || "",
        "particulars.lastName": profile.name.familyName || "",
        "particulars.email":
          (profile.emails && profile.emails[0] && profile.emails[0].value) ||
          "",
      };

      UserModel.findOrCreate(userData, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

/**
 * Initializes Passport.js with Local strategy for username and password authentication.
 * @function
 * @param {function} authenticateCallback - The callback function for authenticating a user.
 */
passport.use(new LocalStrategy(UserModel.authenticate()));

export default passport;
