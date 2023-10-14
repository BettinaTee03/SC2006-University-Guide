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

  const handleClick = async () => {
    if (selectedCourses.length < 2) {
      alert("You must select at least two courses to compare.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/courses/compare",
        { courses: selectedCourses },
        { withCredentials: true }
      );
      setCourseData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("You must be logged in to view this page.");
        navigate("/login");
      }
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
        {courseData.length > 0 &&
          courseData.map((course) => (
            <div>
              <p>{course.course_name}</p>
              <p>{course.description}</p>
            </div>
          ))}
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
