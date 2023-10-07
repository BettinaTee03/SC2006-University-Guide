import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * @typedef IntakeEnrolment
 * @type {object}
 * @property {number} year - The year of data collection.
 * @property {string} sex - The gender of the individuals in the data (e.g., "Male", "Female", "Other", "Total").
 * @property {string} course - The name of the course.
 * @property {number} intake - The number of individuals admitted to the course in the specified year.
 * @property {number} enrolment - The total number of individuals enrolled in the course in the specified year.
 * @property {number} graduates - The number of individuals who graduated from the course in the specified year.
 */
const IntakeEnrolment = new Schema({
  year: { type: Number, required: true },
  sex: { type: String, required: true },
  course: { type: String, required: true },
  intake: { type: Number, required: true },
  enrolment: { type: Number, required: true },
  graduates: { type: Number, required: true },
});

/**
 * Mongoose model for the University Intake and Enrolment data.
 * @type {mongoose.Model}
 */
const IntakeModel = mongoose.model(
  "universityintakeenrolment",
  IntakeEnrolment
);

export default IntakeModel;
