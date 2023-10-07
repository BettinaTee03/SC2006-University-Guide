import express from "express";
import intakeController from "../controllers/intakeController.js";
import ensureAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(express.json()); // Middleware to parse JSON request bodies

/**
 * @route GET /intake/:course
 * @desc Get intake information for a specific course
 * @access Private
 * @middleware ensureAuthenticated
 */
router.get("/:course", ensureAuthenticated, intakeController.getIntake);

export default router;
