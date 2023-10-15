import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import FilterCategories from "../components/FilterCategories";
import EmploymentChart from "../components/EmploymentChart";
import '../CourseCompareResults.css';

import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

function CourseCompareResult() {
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourses = location.state?.selectedCourses || [];

  const categories = [
    { id: '1', name: 'Description' },
    { id: '2', name: 'School' },
    { id: '3', name: 'College' },
    { id: '4', name: 'Course Type' },
    { id: '5', name: 'Course Duration' },
    { id: '6', name: 'Admission Requirements' },
    { id: '7', name: 'Employment Statistics' },
  ];
  const [selectedCategories, setSelectedCategories] = useState(categories.map((category) => category.id));

  useEffect(() => {
    const handleClick = async () => {
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
    handleClick();
  }, []);

  const handleFilterChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const getCategoryData = (categoryId) => {
    return courseData
      .map((course, index) => {
        if (categoryId === '1') {
          return (
            <Grid item xs={12} className="detailsColumn-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p key={course.id}>{course.description}</p>
            </Grid>
          );
        } else if (categoryId === '2') {
          return (
            <Grid item xs={12/courseData.length} className="detailsRow-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p key={course.id}>{course.school_name}</p>
            </Grid>
          );
        } else if (categoryId === '3') {
          return (
            <Grid item xs={12/courseData.length} className="detailsRow-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p key={course.id}>{course.college_name}</p>
            </Grid>
          );
        } else if (categoryId === '4') {
          return (
            <Grid item xs={12/courseData.length} className="detailsRow-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p key={course.id}>{course.course_type}</p>
            </Grid>
          );
        } else if (categoryId === '5') {
          return (
            <Grid item xs={12/courseData.length} className="detailsRow-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p key={course.id}>{course.course_duration}</p>
            </Grid>
          );
        } else if (categoryId === '6') {
          return (
            <Grid item xs={12/courseData.length} className="detailsRow-container">
              <h3 key={course.id}>{course.course_name}</h3>
              {course.rank_points && <p>Rank Points: {course.rank_points}</p>}
                {course.polytechnic_GPAs && <p>Polytechnic GPA: {course.polytechnic_GPAs}</p>}
                {course["3H2_1H1_10percentile"] && <p>3H2/1H1 10th percentile: {course["3H2_1H1_10percentile"]}</p>}
                {course.percentage_less_equal_70_UAS && <p>Less than 70%: {course.percentage_less_equal_70_UAS}</p>}
                {course["percentage_70.01_to_80_UAS"] && <p>70.01% to 80%: {course["percentage_70.01_to_80_UAS"]}</p>}
                {course["percentage_80.01_to_90_UAS"] && <p>80.01% to 90%: {course["percentage_80.01_to_90_UAS"]}</p>}
                {course["percentage_less_3.2_GPA"] && <p>Less than 3.2 GPA: {course["percentage_less_3.2_GPA"]}</p>}
                {course["percentage_3.2_3.6_GPA"] && <p>3.2 to 3.6 GPA: {course["percentage_3.2_3.6_GPA"]}</p>}
                {course["percentage_3.6_4.0_GPA"] && <p>3.6 to 4.0 GPA: {course["percentage_3.6_4.0_GPA"]}</p>}
                {course.remarks && <p>Remarks: {course.remarks}</p>}
            </Grid>
          );
        } else if (categoryId === '7') {
          return (
            <Grid item xs={12} className="detailsColumn-container">
              <h3 key={course.id}>{course.course_name}</h3>
              <p>Employment Statistics:</p>
              <EmploymentChart
                employmentData={course.employment_stats}
              />
            </Grid>
          );
        }
        return null;
      });
  };

  const handleClick = () => {
    navigate("/courses", { state: { selectedCourses } });
  };

  return (
    <Grid container spacing={2} sx={{ width: "auto", padding: 3 }}>

      <Grid item xs={12} sm={2} sx={{ order: { xs: 1 }}}>
        <FilterCategories categories={categories} onFilterChange={handleFilterChange} />

        <Button 
          item xs={12}
          sm={2}
          variant="contained"
          className="custom-button"
          onClick={handleClick}
        >
          Return to Courses Page
        </Button>

      </Grid>

      <Grid container xs={12} sm={10} sx={{ order: { xs: 2 }, width: "auto", padding: 1}}>
        {categories.map((category) => (
          selectedCategories.includes(category.id) && (
            <Grid item key={category.id} xs={12}>
              <h2 className="details-heading">{category.name}</h2>
              <Grid container xs={12}>
                {getCategoryData(category.id)}
              </Grid>
            </Grid>
          )
        ))}
      </Grid>
      
    </Grid>

  );
}

export default CourseCompareResult;
