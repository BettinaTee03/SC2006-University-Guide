import React, { useState } from "react";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import "../Courses.css";
import CourseCompareList from "../components/CourseCompareList";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AlertButton from "../components/AlertButton";
import AlertSnackbar from "../components/Snackbar";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    const courseAlreadySelected = selectedCourses.some(
      (course) => course.course_name === option.course_name
    );

    if (!courseAlreadySelected) {
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
    <Grid
      container
      spacing={2}
      sx={{ width: "auto", margin: 2, padding: "10px" }}
    >
      <AlertSnackbar
        alertMessage="Please select at least 2 courses to compare!"
        open={showAlert}
        setOpen={setShowAlert}
      />
      <Grid item xs={5} className="course-list">
        <Grid container>
          <Grid item xs={12}>
            <h1 className="course-header">My Course List</h1>
          </Grid>

          <Grid item xs={12}>
            <CourseCompareList
              courses={selectedCourses}
              handleDelete={handleDelete}
            />
          </Grid>

          <Grid item xs={12} sx={{ width: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: { xs: "220px", lg: "40%" },
                fontFamily: "Roboto Condensed, sans-serif",
              }}
              onClick={handleClick}
            >
              Compare
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={7}>
        <Grid container sx={{ width: "auto" }} rowSpacing={2}>
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
  );
}

export default Courses;
