import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SchoolIcon from "@mui/icons-material/School";
import "../CourseCompareList.css";

function CourseCompareList({ courses, handleDelete }) {
  return (
    <Stack spacing={{ xs: 1, sm: 2 }} direction="column" sx={{ maxWidth: 400 }}>
      {courses.map((course) => (
        <Chip
          key={course.course_name}
          label={course.course_name}
          onDelete={() => handleDelete(course)}
          sx={{
            height: "auto",
            padding: "1rem",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
              paddingLeft: "2rem",
            },
            fontSize: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
          icon={<SchoolIcon />}
          className="course-chip"
        />
      ))}
    </Stack>
  );
}

export default CourseCompareList;
