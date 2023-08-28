import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import UserModel from './models/User';
import cors from 'cors';

const PORT = 8000;

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json()); // allow for json post requests

app.post("/login", async (req: Request , res: Response) => {
    const newUser = new UserModel({
        username: req.body.username,
        password: req.body.password,
    });
    const createdUser = await newUser.save();
    res.json(createdUser);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Connected to database on port ${PORT}`);
    app.listen(PORT);
});