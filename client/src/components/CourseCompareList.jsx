import React from "react";
import Chip from "@mui/material/Chip";
import { Grid, Box } from "@mui/material"; // Import Box
import SchoolIcon from "@mui/icons-material/School";
import "../CourseCompareList.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CourseCompareList({ courses, handleDelete }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: "500px", lg: "500px" },
      }}
      className="course-stack"
    >
      <Grid container spacing={1}>
        {courses.length <= 0 ? (
          <Grid item xs={12} className="empty-list">
            Your list is currently empty! <br />
            Add courses to your list!
          </Grid>
        ) : (
          courses.map((course) => (
            <Grid item xs={6} sm={4} md={12} lg={12} key={course.course_name}>
              <Chip
                className="course-chip"
                label={course.course_name}
                onDelete={() => handleDelete(course)}
                sx={{
                  height: { xs: "50px", sm: "100px", md: "auto", lg: "auto" },
                  pt: "1rem",
                  pb: "1rem",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                    width: "55%",
                    textAlign: "center",
                    fontSize: {
                      xs: "8px",
                      sm: "12px",
                      md: "1rem",
                      lg: "1rem",
                    },
                  },
                  display: "flex",
                  justifyContent: "space-around",
                }}
                deleteIcon={<DeleteIcon />}
                icon={<SchoolIcon />}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default CourseCompareList;
