import { config } from 'dotenv';
config();
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import courses from './routes/courses.js';
import passport from './config/passport.js';
import sessionConfig from './config/session.js';

const PORT = 8000;

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(sessionConfig); // use session config
app.use(passport.initialize()); // initialize passport
app.use(express.json()); // allow for json post requests
app.use(cookieParser()); // allow for cookie parsing
app.use("/auth", authRoutes); // use auth routes
app.use("/courses", courses); // use courses routes

app.get('/', (req, res) => {
    return res.json({ message: 'Hello, world!' });
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Connected to database on port ${PORT}`);
    app.listen(PORT);
});
