import express from "express";
import authController from "../controllers/authController.js";
import googleAuthController from "../controllers/googleAuthController.js";

const router = express.Router();

/**
 * @route GET /auth/login
 * @desc Render the login page
 * @access Public
 */
router.get("/login", authController.getLogin);

/**
 * @route GET /auth/register
 * @desc Render the registration page
 * @access Public
 */
router.get("/register", authController.getRegister);

/**
 * @route GET /auth/google/callback
 * @desc Handle Google OAuth 2.0 login callback
 * @access Public
 */
router.get("/google/callback", googleAuthController.getRedirect);

/**
 * @route GET /auth/google
 * @desc Initiate Google OAuth 2.0 login process
 * @access Public
 */
router.get("/google", googleAuthController.getLogin);

/**
 * @route POST /auth/register
 * @desc Handle user registration
 * @access Public
 */
router.post("/register", authController.postRegister);

/**
 * @route POST /auth/login
 * @desc Handle user login
 * @access Public
 */
router.post("/login", authController.postLogin);

export default router;
