import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * @typedef CourseInfo
 * @type {object}
 * @property {string} course_name - The name of the course.
 * @property {string} description - A description of the course.
 * @property {string} school_name - The name of the school offering the course.
 * @property {string} college_name - The name of the college offering the course.
 * @property {string} course_type - The type of the course (e.g., "full-time", "part-time").
 * @property {string} course_duration - The duration of the course.
 */
const CourseInfo = new Schema({
  course_name: { type: String, required: true },
  description: { type: String, required: true },
  school_name: { type: String, required: true },
  college_name: { type: String, required: true },
  course_type: { type: String, required: true },
  course_duration: { type: String, required: true },
});

/**
 * Mongoose model for a Course.
 * @type {mongoose.Model}
 */
const CourseModel = mongoose.model("course", CourseInfo);

/**
 * Searches for courses with names matching the given query.
 * @function
 * @async
 * @param {string} query - The text to search for in course names.
 * @returns {Promise<Array>} A promise that resolves to an array of matching course names.
 */
async function searchCourses(query) {
  // Define the aggregation pipeline for autocomplete
  const agg = [
    {
      $search: {
        index: "courseIndex",
        autocomplete: {
          query: query,
          path: "course_name",
        },
      },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        _id: 0,
        course_name: 1,
      },
    },
  ];

  // Execute the aggregation pipeline
  const results = await CourseModel.aggregate(agg);
  return results;
}

export { CourseModel, searchCourses };
