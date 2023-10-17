import React, { useState } from "react";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import "../css/Courses.css";
import CourseCompareList from "../components/CourseCompareList";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AlertSnackbar from "../components/AlertSnackbar";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const alertMessage =
    selectedCourses.length >= 3
      ? "A maximum of 3 courses have been selected!"
      : "Please select at least 2 courses to compare!";

  const handleOptionClick = (option) => {
    const courseAlreadySelected = selectedCourses.some(
      (course) => course.course_name === option.course_name
    );

    if (selectedCourses.length === 3) {
      setShowAlert(true);
    } else if (!courseAlreadySelected) {
      setSelectedCourses([...selectedCourses, option]);
    }
  };

  const handleDelete = (course) => {
    setSelectedCourses(
      selectedCourses.filter(
        (existingCourse) => existingCourse.course_name !== course.course_name
      )
    );
  };

  const handleClick = () => {
    if (selectedCourses.length < 2) {
      setShowAlert(true);
    } else {
      navigate("/courses/compare", { state: { selectedCourses } });
    }
  };

  const renderOptionContent = (option) => {
    return (
      <div onClick={() => handleOptionClick(option)}>{option.course_name} </div>
    );
  };

  return (
    <>
      <Box
        style={{
          height: "68px",
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "auto",
          ml: { xs: "13.5vw" },
          mr: { xs: "10.2vw" },
          padding: "10px",
        }}
      >
        <AlertSnackbar
          alertMessage={alertMessage}
          open={showAlert}
          setOpen={setShowAlert}
          severity={"error"}
        />
        <Grid item xs={12} md={5} lg={5} className="course-list">
          <Grid container>
            <Grid item xs={12}>
              <h1 className="course-header">My Course List</h1>
            </Grid>

            <Grid item xs={12} sm={12}>
              <CourseCompareList
                courses={selectedCourses}
                handleDelete={handleDelete}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%" },
                  maxWidth: { md: "450px" },
                  fontFamily: "Roboto Condensed, sans-serif",
                  backgroundColor: "secondary.main",
                  mt: 2,
                  color: "#FFFFFF",
                  height: "48px",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.hover",
                    boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
                  },
                }}
                onClick={handleClick}
              >
                Compare
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7} lg={7}>
          <Grid
            container
            sx={{ width: "auto", paddingRight: "16px" }}
            rowSpacing={2}
          >
            {
              <Search
                pageTitle="Course Comparison"
                renderOptionContent={renderOptionContent}
                selectedCourses={selectedCourses}
              />
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Courses;
