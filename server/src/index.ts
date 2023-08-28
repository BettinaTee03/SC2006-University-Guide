import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import UserModel from './models/User';
import cors from 'cors';
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from './utils/jwtHelper';

const PORT = 8000;

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json()); // allow for json post requests
app.use(cookieParser()); // allow for cookie parsing

// Registration endpoint
app.post("/register", async (req: Request, res: Response) => {
    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send("Username already exists.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new UserModel({
            username: req.body.username,
            password: hashedPassword,
        });

        const createdUser = await newUser.save();
        res.status(201).json({ message: "User created successfully." });
    } catch (error) {
        res.status(500).send("Error registering user.");
    }
});

// Login endpoint
app.post("/login", async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send("Invalid username or password.");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send("Invalid username or password.");
        }

        const token = generateToken(user._id.toString());
        res.cookie("token", token, { httpOnly: true }).send("Logged in successfully.");
    } catch (error) {
        res.status(500).send("Error logging in.");
    }
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Connected to database on port ${PORT}`);
    app.listen(PORT);
});