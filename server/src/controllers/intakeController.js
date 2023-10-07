import IntakeModel from "../models/intakeModel.js";

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
    res.json(intakes);
  } catch (error) {
    res.status(500).send("Error retrieving intake data.");
  }
}

export default { getIntake };
