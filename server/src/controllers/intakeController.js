import IntakeModel from "../models/intakeModel.js";

/**
 * Handles GET request to retrieve intake data for a specified course.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getIntake(req, res) {
  try {
    const intakes = await IntakeModel.find({
      course: decodeURIComponent(req.params.course),
      sex: "MF",
    });
    if (!intakes || intakes.length === 0) {
      return res
        .status(400)
        .send("Intake data does not exist for the selected course.");
    }
    res.status(200).json(intakes);
  } catch (error) {
    res.status(500).send("Error retrieving intake data.");
  }
}

export default { getIntake };
