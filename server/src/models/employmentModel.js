import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * @typedef GraduateEmployment
 * @type {object}
 * @property {number} year - The year of the graduate employment survey.
 * @property {string} university - The name of the university.
 * @property {string} school - The name of the school within the university.
 * @property {string} degree - The name of the degree.
 * @property {number} employment_rate_overall - The overall employment rate of graduates.
 * @property {number} employment_rate_ft_perm - The employment rate for full-time permanent positions.
 * @property {number} basic_monthly_mean - The mean basic monthly salary.
 * @property {number} basic_monthly_median - The median basic monthly salary.
 * @property {number} gross_monthly_mean - The mean gross monthly salary.
 * @property {number} gross_monthly_median - The median gross monthly salary.
 * @property {number} gross_mthly_25_percentile - The 25th percentile gross monthly salary.
 * @property {number} gross_mthly_75_percentile - The 75th percentile gross monthly salary.
 */
const GraduateEmployment = new Schema({
  year: { type: Number, required: true },
  university: { type: String, required: true },
  school: { type: String, required: true },
  degree: { type: String, required: true },
  employment_rate_overall: { type: Number, required: true },
  employment_rate_ft_perm: { type: Number, required: true },
  basic_monthly_mean: { type: Number, required: true },
  basic_monthly_median: { type: Number, required: true },
  gross_monthly_mean: { type: Number, required: true },
  gross_monthly_median: { type: Number, required: true },
  gross_mthly_25_percentile: { type: Number, required: true },
  gross_mthly_75_percentile: { type: Number, required: true },
});

/**
 * Mongoose model for the Graduate Employment Survey data.
 * @type {mongoose.Model}
 */
const EmploymentModel = mongoose.model(
  "graduateemploymentsurvey",
  GraduateEmployment
);

export default EmploymentModel;
