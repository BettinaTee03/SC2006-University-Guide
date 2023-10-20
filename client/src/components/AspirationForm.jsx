import React, { useState } from "react";
import Axios from "axios";
import AlertSnackbar from "../components/AlertSnackbar";
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

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

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = careers.map((career, index) => (
    <CareerCard key={index} career={career} />
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios.post(
        `${API_BASE_URL}/courses/aspirations/submit`,
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
      setAlertMessage(
        "OpenAI API is under maintenance. Please try again later."
      );
      setShowAlert(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={"error"}
      />
      <Grid container direction="column">
        <Grid
          item
          color="main"
          paddingLeft="1rem"
          paddingTop="1rem"
          paddingBottom="1rem"
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Tell us more about you!
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ paddingLeft: "1rem", paddingRight: "1rem", width: "100%" }}
        >
          <TextField
            id="outlined-helperText"
            label="Enter your aspirations"
            helperText="Example: I want to be a software engineer in Silicon Valley."
            value={aspiration}
            onChange={(e) => setAspiration(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item sx={{ paddingLeft: "1rem", marginTop: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              color: "#FFFFFF",
              fontSize: "15px",
              paddingLeft: "16px",
              paddingRight: "16px",
              height: "48px",
              "&:hover": {
                backgroundColor: "secondary.hover",
                boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
              },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <>
          <Typography
            sx={{
              marginLeft: "1rem",
              marginBottom: "2rem",
              paddingTop: "2rem",
            }}
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
              <Skeleton
                variant="rectangular"
                sx={{ height: { xs: 500, sm: 250 } }}
              />
            </Grid>
            <Grid item sx={{ width: { xs: "10%", md: "6%" } }}>
              <Skeleton variant="rectangular" height={25} />
            </Grid>
          </Grid>
        </>
      ) : careers.length > 0 ? ( // Check if the careers array has data
        <>
          <Grid container>
            <Grid item xs={12} marginLeft={2} marginTop={6} marginBottom={2}>
              <Typography variant="h5" fontWeight="Bold">
                Career prospects based on your selected course and aspiration!
              </Typography>
            </Grid>
            <Grid item xs={12} marginLeft="1rem">
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
              indicatorIconButtonProps={{
                style: {
                  width: "8px",
                  height: "8px",
                  color: "transparent",
                  backgroundColor: "rgba(250, 84, 28, 0.4)",
                  borderRadius: "4px",
                  margin: "0 4px",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  width: "16px",
                  height: "8px",
                  borderTopLeftRadius: "6px",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  borderBottomLeftRadius: "6px",
                  backgroundColor: "rgb(250, 84, 28)",
                  margin: "0 4px",
                },
              }}
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
