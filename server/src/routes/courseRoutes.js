import express from "express";
import courseController from "../controllers/courseController.js";
import ensureAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(express.json());

/**
 * @route GET /courses/search
 * @desc Search for courses
 * @access Public
 */
router.get("/search", courseController.getSearch);

/**
 * @route GET /courses/:course
 * @desc Get specific course details
 * @access Private
 * @middleware ensureAuthenticated
 */
router.get("/:course", ensureAuthenticated, courseController.getCourse);

/**
 * @route POST /courses/:course/submit
 * @desc Submit aspirations related to a specific course
 * @access Public
 */
router.post("/:course/submit", courseController.getAspiration);

export default router;
