// Importing necessary modules and configurations
import { config } from "dotenv"; // Importing dotenv for environment variable configuration
config(); // Configuring dotenv

import express from "express"; // Importing Express.js
import mongoose from "mongoose"; // Importing Mongoose for MongoDB interaction
import cookieParser from "cookie-parser"; // Importing cookie-parser for parsing cookies
import cors from "cors"; // Importing CORS for handling Cross-Origin Resource Sharing
import authRoutes from "./routes/authRoutes.js"; // Importing authentication routes
import courseRoutes from "./routes/courseRoutes.js"; // Importing course-related routes
import intakeRoutes from "./routes/intakeRoutes.js"; // Importing intake-related routes
import passport from "./config/passport.js"; // Importing Passport.js configuration
import sessionConfig from "./config/session.js"; // Importing session configuration

const PORT = 8000; // Defining the port number
const app = express(); // Creating an Express.js application instance

// Configuring middleware and routes
app.use(
  cors({
    origin: "http://localhost:5173", // Specifying the allowed origin
    credentials: true, // Allowing credentials
  })
);

app.use(sessionConfig); // Using the session configuration
app.use(passport.initialize()); // Initializing Passport.js
app.use(passport.session()); // Using Passport.js sessions
app.use(express.json()); // Allowing JSON POST requests
app.use(cookieParser()); // Allowing cookie parsing

// Defining route handlers
app.use("/auth", authRoutes); // Using authentication routes
app.use("/courses", courseRoutes); // Using course-related routes
app.use("/intake", intakeRoutes); // Using intake-related routes

// Defining a root route handler
app.get("/", (req, res) => {
  return res.json({ message: "Hello, world!" }); // Sending a JSON response
});

// Connecting to the database and starting the server
mongoose.connect(process.env.MONGO_URL).then(() => {
  // Connecting to MongoDB
  console.log(`Connected to database on port ${PORT}`); // Logging successful database connection
  app.listen(PORT); // Starting the server on the specified port
});
