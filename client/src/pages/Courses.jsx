import React, { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../Courses.css";
import CourseCompareList from "../components/CourseCompareList";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);

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
      alert("You must select at least two courses to compare.");
    } else {
      navigate("/courses/compare", { state: { selectedCourses } });
    }
  };

  const renderOptionContent = (option) => {
    return (
      <div className="all-link" onClick={() => handleOptionClick(option)}>
        {option.course_name}{" "}
      </div>
    );
  };

  return (
    <Grid container spacing={2} sx={{ width: "auto", margin: 2 }}>
      <Grid item xs={6}>
        <Typography
          variant="h4"
          align="left"
          className="custom-header"
          sx={{ marginBottom: "2rem" }}
        >
          Course List
        </Typography>
        <CourseCompareList
          courses={selectedCourses}
          handleDelete={handleDelete}
        />
        <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={handleClick}
        >
          Compare
        </Button>
        <Typography
          variant="h4"
          align="left"
          className="custom-header"
          sx={{ marginBottom: "2rem" }}
        >
          Course Comparison Results
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Grid container sx={{ width: "auto" }} rowSpacing={2}>
          {
            <Search
              pageTitle="Course Comparison"
              renderOptionContent={renderOptionContent}
            />
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Courses;
