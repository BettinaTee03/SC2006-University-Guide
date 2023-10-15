import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SchoolIcon from "@mui/icons-material/School";
import "../CourseCompareList.css";

function CourseCompareList({ courses, handleDelete }) {
  return (
    <Stack spacing={2} direction="column" className="course-stack">
      {courses.length <= 0 ? (
        <p className="empty-list">
          Your list is currently empty! <br />
          Add courses to your list!
        </p>
      ) : (
        courses.map((course) => (
          <Chip
            className="course-chip"
            key={course.course_name}
            label={course.course_name}
            onDelete={() => handleDelete(course)}
            sx={{
              height: "auto",
              padding: "1rem",
              "& .MuiChip-label": {
                display: "block",
                whiteSpace: "normal",
                width: "60%",
                textAlign: "center",
              },
              fontSize: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
            icon={<SchoolIcon />}
          />
        ))
      )}
    </Stack>
  );
}

export default CourseCompareList;
