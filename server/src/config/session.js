import session from "express-session";
import { config } from "dotenv";
import MongoStore from "connect-mongo";
config();

/**
 * Express session configuration.
 * @constant {Object} sessionConfig
 */
const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60000,
    secure: process.env.NODE_ENV === "production", // Set secure flag only in production
    httpOnly: true, // Makes the cookie inaccessible from JavaScript on the frontend
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
});

export default sessionConfig;
