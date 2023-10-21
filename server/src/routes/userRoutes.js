import express from "express";
import accountController from "../controllers/accountController.js";
import ensureAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(express.json()); // Middleware to parse JSON request bodies

/**
 * @route GET /profile/favourites
 * @desc Retrieve user favourites
 * @access Private
 * @middleware ensureAuthenticated
 

router.get(
  "/:username/favourites",
  ensureAuthenticated,
  accountController.getUserFavourites
);*/

/**
 * @route GET /profile
 * @desc Retrieve user's login status
 * @access Private
 * @middleware ensureAuthenticated
 */
router.get("/", ensureAuthenticated, accountController.checkLogin);

/**
 * @route GET /profile/:id
 * @desc Retrieve user profile page
 * @access Private
 * @middleware ensureAuthenticated
 */
router.get("/:id", ensureAuthenticated, accountController.getUserProfile);

/**
 * @route PUT /profile/:username/particulars/submit
 * @desc Update user particulars
 * @access Private
 * @middleware ensureAuthenticated
 */
router.put(
  "/:id/particulars/submit",
  ensureAuthenticated,
  accountController.updateUserParticulars
);

/**
 * @route PUT /profile/:username/favourites/submit
 * @desc Update user favourites
 * @access Private
 * @middleware ensureAuthenticated
 */

router.put(
  "/:id/favourites/submit",
  ensureAuthenticated,
  accountController.updateUserFavourites
);

export default router;
