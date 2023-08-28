import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const PORT = 8000;

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json()); // allow for json post requests
app.use(cookieParser()); // allow for cookie parsing
app.use("/auth", authRoutes); // use auth routes

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Connected to database on port ${PORT}`);
    app.listen(PORT);
});