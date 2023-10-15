import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LoginAlert from "../components/LoginAlert";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function CourseCompareResult() {
  const [courseData, setCourseData] = useState([]);
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

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
          setIsLoginAlertOpen(true);
        }
      }
    };
    handleClick();
  }, []);

  return (
    <div>
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
      {courseData.length > 0 ? (
        courseData.map((course) => <h1>{course.course_name}</h1>)
      ) : (
        <Stack spacing={2} sx={{ m: "1rem" }}>
          <Skeleton variant="rounded" height={60} />
          <Skeleton variant="rounded" height={120} />
          <Skeleton variant="rounded" height={600} />
        </Stack>
      )}
    </div>
  );
}

export default CourseCompareResult;
