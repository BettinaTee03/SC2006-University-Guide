import express from 'express';
import intakeController from '../controllers/intakeController.js';
import ensureAuthenticated from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(express.json());

// GET REQUESTS
router.get('/:course', ensureAuthenticated, intakeController.getIntake);

export default router;