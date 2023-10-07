import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

/**
 * @typedef UserAccount
 * @type {object}
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {string} googleId - The Google ID of the user, if authenticated via Google OAuth.
 */
const UserAccount = new Schema({
  username: String,
  password: String,
  googleId: String,
});

// Plugin to add findOrCreate method to the model
UserAccount.plugin(findOrCreate);
// Plugin to add Passport-Local Mongoose methods to the model
UserAccount.plugin(passportLocalMongoose);

/**
 * Mongoose model for a User Account.
 * @type {mongoose.Model}
 */
const UserModel = mongoose.model("user", UserAccount);

/**
 * Serializes user instance to the session.
 */
passport.serializeUser(function (user, done) {
  done(null, user);
});

/**
 * Deserializes user instance from the session.
 * @async
 * @param {string} id - The id of the user.
 * @param {function} done - Callback function.
 */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default UserModel;
