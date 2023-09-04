import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseInfo = new Schema({
    course_name: { type: String, required: true },
    description: { type: String, required: true },
    school_name: { type: String, required: true },
    college_name: { type: String, required: true },
    course_type: { type: String, required: true },
    course_duration: { type: String, required: true },
});

const CourseModel = mongoose.model("courses", CourseInfo);

// Function to perform autocomplete search
async function searchCourses(query: string) {
    // Define the aggregation pipeline for autocomplete
    const agg = [
            {
                $search: 
                {
                    index: "courseIndex", 
                    autocomplete: {
                        query: query, 
                        path: "course_name"
                    }
                }
            },
            {
                $limit: 10
            },
            {
                $project: 
                {
                    _id: 0,
                    course_name: 1
                }
            }
    ];

    // Execute the aggregation pipeline
    const results = await CourseModel.aggregate(agg);
    return results;
}

export { CourseModel, searchCourses };
