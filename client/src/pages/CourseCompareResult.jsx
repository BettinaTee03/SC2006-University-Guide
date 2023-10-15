import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function CourseCompareResult() {
  const [courseData, setCourseData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const selectedCourses = location.state?.selectedCourses || [];

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

  return (
    <div>
      {courseData.map((course) => (
        <h1>{course.course_name}</h1>
      ))}
    </div>
  );
}

export default CourseCompareResult;
