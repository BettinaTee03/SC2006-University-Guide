import express from "express";
import authController from "../controllers/authController.js";
import googleAuthController from "../controllers/googleAuthController.js";
import brevoController from "../controllers/brevoController.js";

const router = express.Router();

/**
 * @route GET /auth/logout
 * @desc Handle user logout
 * @access Public
 */
router.get("/logout", authController.logOut);

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
 * @route GET /auth/check-session
 * @desc Check if user is authenticated
 * @access Public
 */
router.get("/check-session", googleAuthController.getSession);

/**
 * @route POST /auth/verify-reset-token/:token
 * @desc Handle reset password
 * @access Public
 */
router.get("/verify-reset-token/:token", brevoController.verifyResetToken);

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

/**
 * @route POST /auth/forget-password
 * @desc Handle forget password
 * @access Public
 */
router.post("/forget-password", brevoController.sendForgetPassword);

/**
 * @route POST /auth/reset-password
 * @desc Handle reset password
 * @access Public
 */
router.post("/reset-password", brevoController.resetPassword);

export default router;
