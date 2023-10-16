import React from "react";
import Chip from "@mui/material/Chip";
import { Grid, Box } from "@mui/material"; // Import Box
import SchoolIcon from "@mui/icons-material/School";
import "../css/CourseCompareList.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CourseCompareList({ courses, handleDelete }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: "300px", lg: "300px" },
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
            <Grid item xs={12} sm={6} md={12} lg={12} key={course.course_name}>
              <Chip
                className="course-chip"
                label={course.course_name}
                onDelete={() => handleDelete(course)}
                sx={{
                  height: { xs: "60px", sm: "100px", md: "100px", lg: "100px" },
                  pt: "1rem",
                  pb: "1rem",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                    width: "70%",
                    textAlign: "center",
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "20px",
                      lg: "20px",
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
