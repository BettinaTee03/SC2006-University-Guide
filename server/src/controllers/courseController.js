import { CourseModel, searchCourses } from "../models/courseModel.js";
import llm from "../config/openAI.js";
import openAIController from "../controllers/openAIController.js";

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
    res.status(200).json(results);
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
    res.status(200).json(courses);
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
    res.status(200).json(structuredResponse);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

/**
 * Handles GET request for specific course information.
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
    res.json(course);
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
    res.status(200).json(selectedResults);
  } catch (error) {
    res.status(500).json({ message: "An error occurred during the search." });
  }
}

export default {
  getSearch,
  getAllCourses,
  getAspiration,
  getCourse,
  postCompareCourses,
};
