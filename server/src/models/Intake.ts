import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IntakeEnrolment = new Schema({
    year: { type: Number, required: true },
    sex: { type: String, required: true },
    course: { type: String, required: true },
    intake: { type: Number, required: true },
    enrolment: { type: Number, required: true },
    graduates: { type: Number, required: true },
});

const IntakeModel = mongoose.model("universityintakeenrolments", IntakeEnrolment);
export default IntakeModel;