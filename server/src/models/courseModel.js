import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * @typedef Course
 * @property {mongoose.Types.ObjectId} _id - The unique identifier of the course.
 * @property {number} year - The year of the course intake. Describes the academic year when the course was available.
 * @property {string} university - The institution or university offering the course.
 * @property {string} school - The specific school or faculty within the university that offers the course.
 * @property {string} course_name - The official name or title of the course.
 * @property {string} description - A brief, detailed description or summary about the course, its scope, and its objectives.
 * @property {string} course_duration - The total duration of the course usually represented in years or semesters.
 * @property {string} 3H2_1H1_10percentile - Entry grade profile for the course at the 10th percentile for 'A' level students.
 * @property {number} rank_points - The cut-off rank points needed for course entry for 'A' level students.
 * @property {number} polytechnic_GPAs - The cut-off GPA needed for course entry for polytechnic diploma holders.
 * @property {number} employment_rate_overall - Represents the overall percentage of recent graduates that gained employment after completing the course.
 * @property {number} employment_rate_ft_perm - Represents the percentage of recent graduates that gained full-time permanent employment after completing the course.
 * @property {number} basic_monthly_mean - The average basic monthly salary earned by graduates from this course.
 * @property {number} basic_monthly_median - The median basic monthly salary earned by graduates from this course.
 * @property {number} gross_monthly_mean - The average gross monthly salary, including additional earnings, earned by graduates from this course.
 * @property {number} gross_monthly_median - The median gross monthly salary earned by graduates from this course.
 * @property {number} gross_mthly_25_percentile - The 25th percentile gross monthly salary earned by graduates from this course.
 * @property {number} gross_mthly_75_percentile - The 75th percentile gross monthly salary earned by graduates from this course.
 * @property {Array<number|null>} percentage_* - Various percentage values indicating different grade or GPA distributions.
 * @property {string} remarks - Any additional or noteworthy information or comments about the course.
 */
const CourseInfo = new Schema({
  course_name: { type: String, required: true },
  description: { type: String },
  school_name: { type: String, required: true },
  college_name: { type: String, required: true },
  course_type: { type: String },
  course_duration: { type: String },
  "3H2_1H1_10percentile": { type: String },
  rank_points: { type: Number },
  polytechnic_GPAs: { type: Number },
  percentage_less_equal_70_UAS: { type: Number },
  "percentage_70.01_to_80_UAS": { type: Number },
  "percentage_80.01_to_90_UAS": { type: Number },
  "percentage_less_3.2_GPA": { type: Number },
  "percentage_3.2_3.6_GPA": { type: Number },
  "percentage_3.6_4.0_GPA": { type: Number },
  employment_stats: [
    {
      year: { type: Number },
      employment_rate_overall: { type: Number },
      employment_rate_ft_perm: { type: Number },
      basic_monthly_mean: { type: Number },
      basic_monthly_median: { type: Number },
      gross_monthly_mean: { type: Number },
      gross_monthly_median: { type: Number },
      gross_mthly_25_percentile: { type: Number },
      gross_mthly_75_percentile: { type: Number },
    },
  ],
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
