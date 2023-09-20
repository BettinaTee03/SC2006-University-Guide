import UserModel from "../models/userModel.js";
import passport from 'passport';

function getLogin(req, res) {
	res.json({ message: 'Login page' });
};

function getRegister(req, res) {
    res.json({ message: 'Register page' });
};

async function postRegister(req, res) {
	try {
		const newUser = await UserModel.register({ username: req.body.username }, req.body.password);
		res.status(201).json({ success: true, user: newUser });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

async function postLogin(req, res) {
    try {
      const user = await new Promise((resolve, reject) => {
        passport.authenticate("local", (err, user, info) => {
          if (err) {
            reject({ type: 'server', message: err.message });
          }
          if (!user) {
            reject({ type: 'auth', message: info.message });
          }
          req.logIn(user, (err) => {
            if (err) {
              reject({ type: 'server', message: err.message });
            }
            resolve(user);
          });
        })(req, res);
      });
  
      res.status(200).json({ success: true, user });
    } catch (error) {
      const statusCode = error.type === 'auth' ? 401 : 500;
      res.status(statusCode).json({ success: false, error: error.message });
    }
  };

export default { getLogin, getRegister, postRegister, postLogin };
