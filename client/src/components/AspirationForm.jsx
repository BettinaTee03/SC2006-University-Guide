import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../AspirationForm.css";
import {
  Typography,
  TextField,
  Button,
  Skeleton,
  Grid,
  Container,
} from "@mui/material";
import CareerCard from "./CareerCard";
import Carousel from "react-material-ui-carousel";

function AspirationForm({ course }) {
  function restructureData(data) {
    const numberOfCareers = 3;
    const result = [];

    for (let i = 1; i <= numberOfCareers; i++) {
      const careerProspect = data[`careerProspect${i}`];
      const careerPath = data[`careerPath${i}`].split("->");
      console.log(data[`careerPath${i}`]);
      const skills = [];

      for (let j = 1; j <= 3; j++) {
        const skill = data[`skill${i}_${j}`];
        if (skill) {
          skills.push(skill);
        }
      }

      result.push({
        careerProspect,
        careerPath,
        skills,
      });
    }

    return result;
  }

  const [aspiration, setAspiration] = useState("");
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = careers.map((career, index) => (
    <CareerCard key={index} career={career} />
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios.post(
        "http://localhost:8000/courses/aspirations/submit",
        {
          aspiration,
          course,
        },
        {
          withCredentials: true,
        }
      );
      const structuredData = restructureData(response.data);
      setCareers(structuredData);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("You must be logged in to view this page.");
        navigate("/login");
      } else {
        alert("An error occurred while submitting your aspiration.");
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          color="#A2B29F"
          marginLeft="1rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          <Typography variant="h5" fontWeight="Bold">
            Tell us more about you!
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-helperText"
            label="Enter your aspiration"
            helperText="Example: I want to be a software engineer"
            value={aspiration}
            onChange={(e) => setAspiration(e.target.value)}
            sx={{ marginLeft: "1rem", width: "97%" }}
          />
        </Grid>
        <Grid item justifySelf="end" className="align-right">
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#DF8886",
              padding: 2,
              paddingLeft: 4,
              paddingRight: 4,
              margin: "1rem",
              marginTop: "1rem",
              border: "none",
              borderRadius: 4,
              "&:hover": { backgroundColor: "#DF8886" },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <>
          <Typography
            sx={{ marginLeft: "1rem", marginBottom: "2rem", color: "#A2B29F" }}
          >
            We are crafting and getting the best career prospects for you ...
          </Typography>
          <Grid container direction="column" alignItems="center">
            <Grid
              item
              sx={{
                marginTop: 1,
                marginBottom: 3,
                width: { xs: "90%", md: "90%" },
              }}
            >
              <Skeleton variant="rectangular" height={250} />
            </Grid>
            <Grid item sx={{ width: { xs: "10%", md: "6%" } }}>
              <Skeleton variant="rectangular" height={25} />
            </Grid>
          </Grid>
        </>
      ) : careers.length > 0 ? ( // Check if the careers array has data
        <>
          <Grid container>
            <Grid
              item
              color="#A2B29F"
              marginLeft={2}
              marginTop={2}
              marginBottom={2}
            >
              <Typography variant="h5" fontWeight="Bold">
                Career prospects based on your selected course and aspiration!
              </Typography>
            </Grid>
            <Grid item marginLeft="1rem" marginBottom="1rem">
              <Typography>
                You can explore the following 3 career options upon graduation:
              </Typography>
            </Grid>
          </Grid>
          <Container sx={{ my: 5 }}>
            <Carousel
              animation="slide"
              index={currentSlide}
              onChange={(newIndex) => setCurrentSlide(newIndex)}
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              cycleNavigation={false}
              indicators={true}
            >
              {slides}
            </Carousel>
          </Container>
        </>
      ) : null}
    </>
  );
}

export default AspirationForm;
