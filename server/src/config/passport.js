import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../models/userModel.js";
import { config } from "dotenv";

config();

/**
 * Initializes Passport.js with Google OAuth 2.0 authentication strategy.
 * @function
 * @param {Object} options - Passport.js authentication options.
 * @param {string} options.clientID - The Google OAuth client ID.
 * @param {string} options.clientSecret - The Google OAuth client secret.
 * @param {string} options.callbackURL - The callback URL for Google OAuth.
 * @param {function} verifyCallback - The callback function to verify and create the user.
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      UserModel.findOrCreate({ googleId: profile.id }, function (err, user) {
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
