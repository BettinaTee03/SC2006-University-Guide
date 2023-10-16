import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AspirationForm from "../components/AspirationForm";
import EmploymentChart from "../components/EmploymentChart";
import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const { courseName } = useParams();
  const [isIconClicked, setIsIconClicked] = React.useState();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  useEffect(() => {
    async function getIndividualCourse() {
      try {
        const response = await Axios.get(
          `http://localhost:8000/courses/${courseName}`,
          { withCredentials: true }
        );
        setCourse(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("You must be logged in to view this page.");
          navigate("/login");
        }
      }
    }
    getIndividualCourse();
  }, [courseName]);

  return (
    <div>
      {course ? (
        <Container>
          <Grid>
            <Grid container sx={{ my: 4 }}>
              <Grid item xs={10}>
                <Paper sx={{ p: 1, bgcolor: "#FFF8F2", borderRadius: 8 }}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="#A2B29F"
                    fontWeight="Bold"
                  >
                    {course.course_name}
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button onClick={handleClick}>
                  {isIconClicked ? (
                    <FavoriteIcon sx={{ fontSize: 40 }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                  )}
                </Button>
              </Grid>
            </Grid>
            <Paper sx={{ my: 4, p: 2 }}>
              <Typography color="#A2B29F">Course Description:</Typography>
              <Typography variant="h7">{course.description}</Typography>
            </Paper>
            <Paper sx={{ my: 4, p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="#A2B29F">School:</Typography>
                  <Typography variant="h7" paragraph>
                    {course.school_name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="#A2B29F">College:</Typography>
                  <Typography variant="h7" paragraph>
                    {course.college_name}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="#A2B29F">Course Type:</Typography>
                  <Typography variant="h7" paragraph>
                    {course.course_type}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="#A2B29F">Course Duration:</Typography>
                  <Typography variant="h7" paragraph>
                    {course.course_duration}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {course.rank_points && (
                    <>
                      <Typography color="#A2B29F">Rank Points:</Typography>
                      <Typography variant="h7" paragraph>
                        {course.rank_points}
                      </Typography>
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  {course.polytechnic_GPAs && (
                    <>
                      <Typography color="#A2B29F">Polytechnic GPA:</Typography>
                      <Typography variant="h7" paragraph>
                        {course.polytechnic_GPAs}
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                {course["3H2_1H1_10percentile"] && (
                  <Grid item xs={3} marginBottom="1%">
                    <Typography color="#A2B29F">
                      3H2_1H1_10percentile:
                    </Typography>
                    <Typography variant="h7" paragraph>
                      {course["3H2_1H1_10percentile"]}
                    </Typography>
                  </Grid>
                )}
                {course.percentage_less_equal_70_UAS && (
                  <Grid item xs={3} marginBottom="1%">
                    <Typography color="#A2B29F">Less than 70%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course.percentage_less_equal_70_UAS}
                    </Typography>
                  </Grid>
                )}
                {course["percentage_70.01_to_80_UAS"] && (
                  <Grid item xs={3} marginBottom="1%">
                    <Typography color="#A2B29F">70.01% to 80%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_70.01_to_80_UAS"]}
                    </Typography>
                  </Grid>
                )}
                {course["percentage_80.01_to_90_UAS"] && (
                  <Grid item xs={3} marginBottom="1%">
                    <Typography color="#A2B29F">80.01% to 90%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_80.01_to_90_UAS"]}
                    </Typography>
                  </Grid>
                )}
              </Grid>

              <Grid container spacing={2}>
                {course["percentage_less_3.2_GPA"] && (
                  <Grid item xs={3}>
                    <Typography color="#A2B29F">Less than 3.2 GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_less_3.2_GPA"]}
                    </Typography>
                  </Grid>
                )}
                {course["percentage_3.2_3.6_GPA"] && (
                  <Grid item xs={3}>
                    <Typography color="#A2B29F">3.2 to 3.6 GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_3.2_3.6_GPA"]}
                    </Typography>
                  </Grid>
                )}
                {course["percentage_3.6_4.0_GPA"] && (
                  <Grid item xs={3}>
                    <Typography color="#A2B29F">3.6 to 4.0 GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_3.6_4.0_GPA"]}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="#A2B29F">Remarks:</Typography>
                  <Typography variant="h7" paragraph>
                    {course.remarks || "NIL"}
                  </Typography>
                </Grid>
              </Grid>

              <Typography color="#A2B29F">Employment Stats:</Typography>
              <Grid alignItems="center" justifyContent="center">
                <EmploymentChart
                  courseName={course.course_name}
                  employmentData={course.employment_stats}
                />
              </Grid>
            </Paper>

            <Paper sx={{ my: 6, p: 2 }}>
              <AspirationForm course={course.course_name} />
            </Paper>
          </Grid>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IndividualCourse;
