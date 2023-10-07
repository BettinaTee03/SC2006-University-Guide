import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

const UserAccount = new Schema({
  username: String,
  password: String,
  googleId: String,
});

UserAccount.plugin(findOrCreate);
UserAccount.plugin(passportLocalMongoose);
const UserModel = mongoose.model("user", UserAccount);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default UserModel;
