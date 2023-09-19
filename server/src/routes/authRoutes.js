import express from 'express';
const router = express.Router();
import UserModel from '../models/User.js';
import passport from 'passport';

router.use(passport.initialize());
router.use(passport.session());

// GET REQUESTS
router.get('/', (req, res) => {
	res.json({ message: 'Welcome to the home page' });
  });
  
router.get('/login', (req, res) => {
	res.json({ message: 'Login page' });
});

router.get('/register', (req, res) => {
	res.json({ message: 'Register page' });
});

router.get('/google/secrets', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
	res.json({ message: 'Google authentication successful' });
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

 // POST REQUESTS
router.post("/register", async function (req, res) {
	try {
			const newUser = await UserModel.register({ username: req.body.username }, req.body.password);
			res.json({ success: true, user: newUser });
	} catch (error) {
			res.json({ success: false, error: error.message });
	}
});
  
router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return res.json({ success: false, error: err.message });
		}
		if (!user) {
			return res.json({ success: false, error: info.message });
		}
		req.logIn(user, (err) => {
			if (err) {
				return res.json({ success: false, error: err.message });
			}
			return res.json({ success: true, user });
		});
	})(req, res, next);
});

export default router;