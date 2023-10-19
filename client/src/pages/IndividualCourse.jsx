import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AspirationForm from "../components/AspirationForm";
import FavouriteCourseButton from "../components/FavouriteCourseButton";
import CourseDetails from "../components/CourseDetails";
import { Container, Typography, Paper, Grid } from "@mui/material";

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
                <FavouriteCourseButton isIconClicked={isIconClicked} onClick={handleClick} />
              </Grid>
            </Grid>
            <Paper sx={{ my: 4, p: 2 }}>
              <Typography color="#A2B29F">Course Description:</Typography>
              <Typography variant="h7">{course.description}</Typography>
            </Paper>
            <Paper sx={{ my: 4, p: 2 }}>
              <CourseDetails course={course}/>
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
