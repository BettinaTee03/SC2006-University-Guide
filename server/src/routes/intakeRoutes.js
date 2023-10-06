import express from 'express';
import intakeController from '../controllers/intakeController.js';
const router = express.Router();
router.use(express.json());

// GET REQUESTS
router.get('/:course', intakeController.getIntake);

export default router;