import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import UserModel from '../models/userModel.js';
import { config } from 'dotenv';
config();

passport.use(new GoogleStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: "http://localhost:8000/auth/google/secrets",
	},
	function(accessToken, refreshToken, profile, cb) {
		UserModel.findOrCreate({ googleId: profile.id }, function (err, user) {
			return cb(err, user);
		});
	}
));

passport.use(new LocalStrategy(UserModel.authenticate()));

export default passport;
