import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseInfo = new Schema({
    course_name: { type: String, required: true },
    description: { type: String, required: true},
    school_name: { type: String, required: true },
    college_name: { type: String, required: true },
    course_type: { type: String, required: true },
    course_duration: { type: String, required: true }
});

const CourseModel = mongoose.model("courses", CourseInfo);
export default CourseModel;
