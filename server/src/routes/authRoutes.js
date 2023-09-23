import express from 'express';
import authController from '../controllers/authController.js';
import googleAuthController from '../controllers/googleAuthController.js';
const router = express.Router();

// GET REQUESTS
router.get('/login', authController.getLogin);

router.get('/register', authController.getRegister);

router.get('/google/callback', googleAuthController.getRedirect);

router.get('/google', googleAuthController.getLogin);

// POST REQUESTS
router.post("/register", authController.postRegister);

router.post("/login", authController.postLogin);

export default router;