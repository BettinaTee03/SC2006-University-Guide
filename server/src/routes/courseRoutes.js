import express from 'express';
import courseController from '../controllers/courseController.js';
import ensureAuthenticated from '../middleware/authMiddleware.js';
const router = express.Router();
router.use(express.json());

// GET REQUESTS
router.get('/search', courseController.getSearch);

router.get('/:course', ensureAuthenticated, courseController.getCourse);

router.get('/:course/employment', courseController.getEmployment);

router.get('/:course/intake', courseController.getIntake);

// POST REQUESTS
router.post('/:course/submit', courseController.getAspiration);

export default router;


