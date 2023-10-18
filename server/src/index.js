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
import userRoutes from "./routes/userRoutes.js"; // Importing user-related routes
import path from "path"; // Importing path for serving static files

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
const app = express(); // Creating an Express.js application instance

// Configuring middleware and routes
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://university-guide-app-staging-d62da9232739.herokuapp.com",
    ], // Specifying the allowed origins in an array
    credentials: true, // Allowing credentials
  })
);

app.use(sessionConfig); // Using the session configuration
app.use(passport.initialize()); // Initializing Passport.js
app.use(passport.session()); // Using Passport.js sessions
app.use(express.json()); // Allowing JSON POST requests
app.use(cookieParser()); // Allowing cookie parsing

// Defining route handlers
app.use("/api/auth", authRoutes); // Using authentication routes
app.use("/api/courses", courseRoutes); // Using course-related routes
app.use("/api/intake", intakeRoutes); // Using intake-related routes
app.use("/api/profile", userRoutes); // Using user-related routes

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client", "dist"))); // Serving the static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
}); // Serving the index.html file

// Connecting to the database and starting the server
mongoose.connect(process.env.MONGO_URL).then(() => {
  // Connecting to MongoDB
  console.log(`Connected to database on port ${port}`); // Logging successful database connection
  app.listen(port); // Starting the server on the specified port
});
