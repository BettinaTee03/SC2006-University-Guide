import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

const EmploymentModel = mongoose.model("graduateemploymentsurvey", GraduateEmployment);
export default EmploymentModel;