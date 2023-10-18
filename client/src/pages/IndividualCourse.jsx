import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AspirationForm from "../components/AspirationForm";
import EmploymentChart from "../components/EmploymentChart";
import LoginAlert from "../components/LoginAlert";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const { courseName } = useParams();
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    async function getIndividualCourse() {
      try {
        const response = await Axios.get(
          `${API_BASE_URL}/courses/${courseName}`,
          { withCredentials: true }
        );
        setCourse(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setIsLoginAlertOpen(true);
        }
      }
    }
    getIndividualCourse();
  }, [courseName]);

  return (
    <>
      <Box
        style={{
          height: "68px",
          background:
            "linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
      {course ? (
        <div>
          <h1>{course.course_name}</h1>
          <p>School: {course.school_name}</p>
          <p>College: {course.college_name}</p>
          <p>Course Type: {course.course_type}</p>
          <p>Course Duration: {course.course_duration}</p>
          <p>Course Description: {course.description}</p>
          {course.rank_points && <p>Rank Points: {course.rank_points}</p>}
          {course.polytechnic_GPAs && (
            <p>Polytechnic GPA: {course.polytechnic_GPAs} </p>
          )}
          {course["3H2_1H1_10percentile"] && (
            <p>3H2_1H1_10percentile: {course["3H2_1H1_10percentile"]}</p>
          )}
          {course.percentage_less_equal_70_UAS && (
            <p>Less than 70%: {course.percentage_less_equal_70_UAS}</p>
          )}
          {course["percentage_70.01_to_80_UAS"] && (
            <p>70.01% to 80%: {course["percentage_70.01_to_80_UAS"]}</p>
          )}
          {course["percentage_80.01_to_90_UAS"] && (
            <p>80.01% to 90%: {course["percentage_80.01_to_90_UAS"]}</p>
          )}
          {course["percentage_less_3.2_GPA"] && (
            <p>Less than 3.2 GPA: {course["percentage_less_3.2_GPA"]}</p>
          )}
          {course["percentage_3.2_3.6_GPA"] && (
            <p>3.2 to 3.6 GPA: {course["percentage_3.2_3.6_GPA"]}</p>
          )}
          {course["percentage_3.6_4.0_GPA"] && (
            <p>3.6 to 4.0 GPA: {course["percentage_3.6_4.0_GPA"]}</p>
          )}
          <p>Remarks: {course.remarks || "NIL"}</p>
          <p>Employment Stats:</p>
          <EmploymentChart
            courseName={course.course_name}
            employmentData={course.employment_stats}
          />
          <AspirationForm course={course.course_name} />
        </div>
      ) : (
        <Stack spacing={2} sx={{ m: "1rem" }}>
          <Skeleton variant="rounded" height={60} />
          <Skeleton variant="rounded" height={120} />
          <Skeleton variant="rounded" height={600} />
        </Stack>
      )}
    </>
  );
}

export default IndividualCourse;
