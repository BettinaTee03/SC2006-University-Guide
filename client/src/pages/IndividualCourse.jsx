import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import AspirationForm from "../components/AspirationForm";
import LoginAlert from "../components/LoginAlert";
import FavouriteCourseButton from "../components/FavouriteCourseButton";
import "../css/IndividualCourse.css";
import EmploymentChart from "../components/EmploymentChart";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { Typography, Paper, Grid } from "@mui/material";

function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const { courseName } = useParams();
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = React.useState();
  const navigate = useNavigate();
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleClick = () => {
    setIsIconClicked(!isIconClicked);
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
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
      {course ? (
        <Grid
          container
          justifyContent="space-between"
          sx={{
            width: "auto",
            mt: 2,
            ml: { xs: "7vw", sm: "5vw", md: "11vw" },
            mr: { xs: "5vw", sm: "4vw", md: "11vw" },
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="course_name-container"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  textAlign: "center",
                }}
              >
                {course.course_name}
              </h2>
              <FavouriteCourseButton
                isIconClicked={isIconClicked}
                onClick={handleClick}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <h2 className="heading">Description</h2>
            <p>{course.description}</p>
          </Grid>

          <Grid item xs={12} sm={5.5}>
            <h2 className="heading">School</h2>
            <p>{course.school_name}</p>
          </Grid>

          <Grid item xs={12} sm={5.5}>
            <h2 className="heading">College</h2>
            <p>{course.college_name}</p>
          </Grid>

          <Grid item xs={12} sm={5.5} md={5.5}>
            <h2 className="heading">Course Type</h2>
            <p>{course.course_type}</p>
          </Grid>

          <Grid item xs={12} sm={5.5}>
            <h2 className="heading">Course Duration</h2>
            <p>{course.course_duration}</p>
          </Grid>

          <Grid item xs={12}>
            <h2 className="heading">Admission Requirements</h2>
            {course["3H2_1H1_10percentile"] && (
              <p>3H2/1H1 10th percentile: {course["3H2_1H1_10percentile"]}</p>
            )}
            {course["rank_points"] && <p>Rank Points: {course.rank_points}</p>}
            {course["polytechnic_GPAs"] && (
              <p>Polytechnic GPA: {course.polytechnic_GPAs}</p>
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
            {course.remarks && <p>Remarks: {course.remarks}</p>}
          </Grid>

          <Grid item xs={12}>
            <h2 className="heading">Employment Statistics</h2>
            <Grid
              item
              xs={12}
              container
              direction="column"
              alignItems="center"
              sx={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <EmploymentChart employmentData={course.employment_stats} />
            </Grid>
          </Grid>

          <Grid item xs={12} className="aspiration-container">
            <AspirationForm course={course.course_name} />
          </Grid>
        </Grid>
      ) : (
        <Stack
          spacing={2}
          sx={{
            ml: { xs: "7vw", sm: "5vw", md: "11vw" },
            mr: { xs: "5vw", sm: "5vw", md: "11vw" },
            my: 4,
          }}
        >
          <Skeleton variant="rounded" animation="wave" height={48} />
          <Skeleton variant="rounded" animation="wave" height={100} />
          <Skeleton variant="rounded" animation="wave" height={1300} />
          <Skeleton variant="rounded" animation="wave" height={206} />
        </Stack>
      )}
    </>
  );
}

export default IndividualCourse;
