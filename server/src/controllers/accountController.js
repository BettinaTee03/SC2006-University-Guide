import UserModel from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";

/**
 * Handles GET request to check if user is logged in and return user username
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function checkLogin(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).json({
      isLoggedIn: true,
      id: req.user._id.toString(),
    });
  } else {
    res.status(401).json({ isLoggedIn: false });
  }
}

/**
 * Handles GET request to retrieve user profile page
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getUserProfile(req, res) {
  try {
    const userId = decodeURIComponent(req.params.id);
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(400).send("User does not exist.");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Error retrieving user profile.");
  }
}

/**
 * Handles PUT request to update user particulars
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function updateUserParticulars(req, res) {
  try {
    const userParticulars = req.body.editedParticulars;
    const userName = decodeURIComponent(req.body.username);
    const userId = decodeURIComponent(req.params.id);
    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(400).send("User does not exist.");
    }

    if (userName.trim() !== "") {
      // Check if the new username is already taken by another user
      const existingUser = await UserModel.findOne({
        username: userName,
        _id: { $ne: userId }, // exclude the current user from the query
      });

      if (existingUser) {
        return res.status(400).send("Username is already taken.");
      } else {
        user.username = userName;
      }
    }

    user.particulars = userParticulars;
    const updatedUser = await user.save();

    res.status(200).json({
      message: "User particulars updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).send("Error updating user particulars.");
  }
}

/**
 * Handles GET request to retrieve user favourites
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getUserFavourites(req, res) {
  try {
    const courseIds = Object.values(req.query);
    const favouriteCourses = [];

    await Promise.all(
      courseIds.map(async (courseId) => {
        const course = await CourseModel.findOne({ _id: courseId });
        favouriteCourses.push(course.course_name);
      })
    );

    res.status(200).json(favouriteCourses);
  } catch (error) {
    res.status(500).send("Error retrieving user favourites.");
  }
}

/**
 * Handles PUT request to update user favourites
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function updateUserFavourites(req, res) {
  try {
    const courseNames = req.body.filteredCourses;
    console.log(courseNames);
    // Convert course names to course IDs
    const courseIds = await Promise.all(
      courseNames.map(async (courseName) => {
        const course = await CourseModel.findOne({ course_name: courseName });
        if (course) {
          return course._id;
        } else {
          return null; // Handle cases where a course with the given name is not found
        }
      })
    );
    // Retrieve the user
    const userId = decodeURIComponent(req.params.id);
    const user = await UserModel.findOne({ _id: userId });

    // Update the user's favorite courses
    user.favourites = courseIds.filter((id) => id !== null); // Filter out null values

    // Save the user's changes to the database
    const updatedUser = await user.save();

    res.status(200).json({
      message: "User favourites updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).send("Error updating user favourites.");
  }
}

export default {
  checkLogin,
  getUserProfile,
  updateUserParticulars,
  getUserFavourites,
  updateUserFavourites,
};
