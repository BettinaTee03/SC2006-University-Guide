import session from "express-session";
import { config } from "dotenv";
import MongoStore from "connect-mongo";
config();

/**
 * Express session configuration.
 * @constant {Object} sessionConfig
 */
const sessionConfig = session({
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1000000,
  },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
});

export default sessionConfig;
