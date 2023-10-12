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
          //alert("You must be logged in to view this page.");
          //navigate("/login");
        }
      }
    }
    getIndividualCourse();
    setCourse(testCourse);
  }, [courseName]);

  return (
    <div>
      {course ? (
        <div>
          <Container maxWidth="md">
            <Box sx={{ my: 10 }}>
              <Grid container sx={{ my: 6 }}>
                <Grid item xs={10}>
                  <Paper sx={{ p: 2, bgcolor: "#FFF8F2", borderRadius: 15 }}>
                    <Typography variant="h4" align="center" color="#A2B29F" sx={{fontWeight:'Bold'}}>
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
                      <FavoriteIcon sx={{ fontSize: 80 }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: 80 }} />
                    )}
                  </Button>
                </Grid>
              </Grid>
              <Paper sx={{ my: 6, p: 2 }}>
              <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Course Description:</Typography>
                <Typography variant="h7">{course.description}</Typography>
              </Paper>
              <Paper sx={{ my: 6, p: 2 }}>
                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>School:</Typography>
                <Typography variant="h7" paragraph>
                  {course.school_name}
                </Typography>

                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>College:</Typography>
                <Typography variant="h7" paragraph>
                  {course.college_name}
                </Typography>

                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Course Type:</Typography>
                <Typography variant="h7" paragraph>
                  {course.course_type}
                </Typography>

                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Course Type:</Typography>
                <Typography variant="h7" paragraph>
                  {course.course_type}
                </Typography>

                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Course Duration:</Typography>
                <Typography variant="h7" paragraph>
                  {course.course_duration}
                </Typography>

                {course.rank_points && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Rank Points:</Typography>
                    <Typography variant="h7" paragraph>
                      {course.rank_points}
                    </Typography>
                  </>
                )}

                {course.polytechnic_GPAs && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Polytechnic GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course.polytechnic_GPAs}{" "}
                    </Typography>
                  </>
                )}
                {course["3H2_1H1_10percentile"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>3H2_1H1_10percentile:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["3H2_1H1_10percentile"]}
                    </Typography>
                  </>
                )}
                {course.percentage_less_equal_70_UAS && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Less than 70%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course.percentage_less_equal_70_UAS}
                    </Typography>
                  </>
                )}
                {course["percentage_70.01_to_80_UAS"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>70.01% to 80%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_70.01_to_80_UAS"]}
                    </Typography>
                  </>
                )}
                {course["percentage_80.01_to_90_UAS"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>80.01% to 90%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_80.01_to_90_UAS"]}
                    </Typography>
                  </>
                )}
                {course["percentage_80.01_to_90_UAS"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>80.01% to 90%:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_80.01_to_90_UAS"]}
                    </Typography>
                  </>
                )}
                {course["percentage_less_3.2_GPA"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>Less than 3.2 GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_less_3.2_GPA"]}
                    </Typography>
                  </>
                )}
                {course["percentage_3.2_3.6_GPA"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>
                      3.2 to 3.6 GPA:
                    </Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_3.2_3.6_GPA"]}
                    </Typography>
                  </>
                )}
                {course["percentage_3.6_4.0_GPA"] && (
                  <>
                    <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>3.6 to 4.0 GPA:</Typography>
                    <Typography variant="h7" paragraph>
                      {course["percentage_3.6_4.0_GPA"]}
                    </Typography>
                  </>
                )}

                <Typography variant="h6" color="#A2B29F" sx={{fontWeight:'Bold'}}>
                  Remarks: 
                </Typography>
                <Typography variant="h7" paragraph>
                  {course.remarks || "NIL"}
                </Typography>

                <Typography variant="h6" paragraph color="#A2B29F" sx={{fontWeight:'Bold'}}>
                  Employment Stats:
                </Typography>
                <EmploymentChart
                  courseName={course.course_name}
                  employmentData={course.employment_stats}
                />
              </Paper>

              <Paper sx={{ my: 6, p: 2 }}>
                <AspirationForm course={course.course_name} />
              </Paper>
            </Box>
          </Container>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IndividualCourse;
