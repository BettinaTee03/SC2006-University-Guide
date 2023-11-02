import { CourseModel, searchCourses } from "../models/courseModel.js";
import llm from "../config/openAI.js";
import openAIController from "../controllers/openAIController.js";
import UserModel from "../models/userModel.js";

/**
 * Handles GET request for course search.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getSearch(req, res) {
  try {
    const query = req.query.q;
    const results = await searchCourses(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "An error occurred during the search." });
  }
}

/**
 * Handles GET request for all courses.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getAllCourses(req, res) {
  try {
    const courses = await CourseModel.find({}, { course_name: 1, _id: 0 }).sort(
      { course_name: 1 }
    );
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * Handles GET request for user aspiration processing.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getAspiration(req, res) {
  try {
    const userAspiration = req.body.aspiration;
    const userCourse = req.body.course;

    const input = await openAIController.prompt.format({
      aspiration: userAspiration,
      course: userCourse,
    });

    const response = await llm.call(input);
    const structuredResponse = await openAIController.parser.parse(response);
    res.json(structuredResponse);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

/**
 * Handles GET request for specific course information and whether this is favourited by the user.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getCourse(req, res) {
  try {
    const course = await CourseModel.findOne({
      course_name: decodeURIComponent(req.params.course),
    });
    if (!course) {
      return res.status(400).send("Course does not exist.");
    }

    // Check if course is favourited by user
    const user = await UserModel.findOne({
      _id: decodeURIComponent(req.user._id),
    });

    const isLiked = user.favourites.includes(course._id);

    res.status(200).json({
      isLiked: isLiked,
      course: course,
    });
  } catch (error) {
    res.status(500).send("Error retrieving course.");
  }
}

/**
 * Handles POST request for course comparison.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function postCompareCourses(req, res) {
  try {
    const courses = req.body.courses;
    const selectedResults = [];
    await Promise.all(
      courses.map(async (course) => {
        const decodedCourse = decodeURIComponent(course.course_name);
        const result = await CourseModel.findOne({
          course_name: decodedCourse,
        });
        if (result) {
          selectedResults.push({ course_name: decodedCourse, ...result._doc });
        }
      })
    );
    res.json(selectedResults);
  } catch (error) {
    res.status(500).json({ message: "An error occurred during the search." });
  }
}

/**
 * Handles POST request for adding a course to user favourites.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function addToFavourites(req, res) {
  try {
    const user = await UserModel.findOne({
      _id: decodeURIComponent(req.user._id),
    });
    if (!user) {
      return res.status(400).send("User does not exist.");
    }

    const course = await CourseModel.findOne({
      course_name: decodeURIComponent(req.params.course),
    });

    if (!course) {
      return res.status(400).send("Course does not exist.");
    }

    user.favourites.push(course._id);
    const updatedUser = await user.save();
    res.status(200).json({
      message: "Add to favourites successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).send("Error adding course to favourites.");
  }
}

/**
 * Handles DELETE request for removing a course from user favourites.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function removeFromFavourites(req, res) {
  try {
    const user = await UserModel.findOne({
      _id: decodeURIComponent(req.user._id),
    });
    if (!user) {
      return res.status(400).send("User does not exist.");
    }

    const course = await CourseModel.findOne({
      course_name: decodeURIComponent(req.params.course),
    });

    if (!course) {
      return res.status(400).send("Course does not exist.");
    }

    user.favourites.pull(course._id);
    const updatedUser = await user.save();
    res.status(200).json({
      message: "Removed from favourites successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).send("Error removing course from favourites.");
  }
}

export default {
  getSearch,
  getAllCourses,
  getAspiration,
  getCourse,
  postCompareCourses,
  addToFavourites,
  removeFromFavourites,
};
