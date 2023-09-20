import session from 'express-session';
import { config } from 'dotenv';
config();

const sessionConfig = session({
	secret: process.env.SECRET,
	cookie: { maxAge: 1000000 },
	resave: false,
	saveUninitialized: false
});

export default sessionConfig;

