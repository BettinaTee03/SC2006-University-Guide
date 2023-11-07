import { Typography, Box, Grid } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate, useLocation } from "react-router-dom";
import AlertSnackbar from "../components/AlertSnackbar";
import Container from "@mui/material/Container";
import AuthContext from "../contexts/AuthContext";
import CourseCard from "../components/CourseCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FeaturedCourses from "../components/FeaturedCourses.jsx";
import CareerCard from "../components/CareerCard";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const [severity, setSeverity] = useState("success");
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only("xs"));

  const cloudinaryBaseUrl = "https://res.cloudinary.com/dm9pja9iv/image/upload";
  const transformations = `q_auto,h_${matchesXS ? "50" : "70"}`;
  const logos = [
    { id: "cbxhvqwypjpnej0ocvwq", alt: "NTU Logo" },
    { id: "c5bfbis8iy1ri5uxpjaa", alt: "NUS Logo" },
    { id: "xmnjdkey2tnvirwcrnxc", alt: "SIT Logo" },
    { id: "jpcugxt8diwgc6q4bdgy", alt: "SMU Logo" },
    { id: "akxlzlil5m8while5qfg", alt: "SUTD Logo" },
    { id: "qsrozw7pioghhckvdt62", alt: "SUSS Logo" },
  ];

  useEffect(() => {
    if (location.state && location.state.showAlert) {
      setAlertMessage(location.state.message);
      setSeverity(location.state.severity);
      setShowAlert(true);
    }
  }, [location]);

  const demo_career = {
    careerProspect: "Data Science Developer",
    careerPath: [
      "Data Analyst",
      "Data Science Engineer",
      "Data Science Architect",
    ],
    skills: [
      "Proficiency with programming languages like Python or R for data analysis and machine learning",
      "Experience with working with data processing and ETL tools such as Apache Spark and Hadoop",
      "Expertise in developing and deploying data-driven models and applications",
    ],
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              paddingTop: { xs: "15%", lg: "5%" },
              fontSize: { xs: "2.2rem", md: "3.5rem", lg: "4rem" },
              marginBottom: { xs: 5, lg: 1 },
            }}
          >
            University Course <span style={{ color: "secondary" }}>Finder</span>
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "primary",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              ml: { xs: "4vw" },
              mr: { xs: "4vw" },
              marginBottom: { xs: 2, lg: 2 },
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "1.3rem" },
            }}
          >
            Welcome to Singapore's leading course discovery platform.
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "primary",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              mx: { xs: "4vw" },
              marginBottom: { xs: 5 },
              width: { xs: "90%", lg: "30%" },
            }}
          >
            Whether you're passionate about arts, sciences, technology, or
            business, we connect you with top-tier courses from renowned
            institutions across Singapore.
          </Typography>
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            sx={{
              marginLeft: { lg: "10.7vw" },
              backgroundColor: "secondary.main",
              color: "#FFFFFF",
              fontSize: "15px",
              paddingLeft: "16px",
              paddingRight: "16px",
              height: "40px",
              "&:hover": {
                backgroundColor: "secondary.hover",
                boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
              },
            }}
            onClick={() => {
              {
                isAuthenticated ? navigate("/explore") : navigate("/register");
              }
            }}
          >
            Get Started.
          </Button>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "main",
              fontSize: { xs: "16px", lg: "14px" },
              opacity: 0.7,
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              mx: { xs: "4vw" },
              mt: { xs: 8 },
              width: { xs: "90%", lg: "30%" },
            }}
          >
            AVAILABLE FOR
          </Typography>
          <Grid
            container
            justifyContent={{ xs: "center", lg: "flex-start" }}
            columnGap={{ xs: 0, lg: 4 }}
            rowGap={{ xs: 4 }}
            sx={{ mt: 2, mb: { xs: 2, lg: 6 }, ml: { lg: "11.3vw" } }}
          >
            {logos.map((logo) => (
              <Grid
                item
                lg={0.5}
                xs={4}
                key={logo.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`${cloudinaryBaseUrl}/${transformations}/v1/sguniguide/${logo.id}`}
                  alt={logo.alt}
                  loading="lazy"
                  height={matchesXS ? "25" : "35"}
                />
              </Grid>
            ))}
          </Grid>

          <Container
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "91.2vw", md: "77.8vw" },
                objectFit: "cover",
              }}
              alt="University Students."
              src={
                "https://res.cloudinary.com/dm9pja9iv/image/upload/f_auto,q_auto/v1/sguniguide/ank6ajecjzyhydbpckhc"
              }
            />
          </Container>
        </Box>
        <Box sx={{ marginLeft: { lg: "10.7vw" } }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              textAlign: { xs: "center", lg: "left" },
              paddingTop: { xs: "10%", lg: "8%" },
              paddingBottom: { lg: "2%" },
              fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
              marginBottom: { xs: 5, lg: 1 },
              color: "main",
            }}
          >
            Compare Courses Across Universities
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={{ xs: 0, lg: 5 }}
          sx={{
            justifyContent: { xs: "center" },
            pl: { xs: "0", lg: "10.7vw" },
            pr: { xs: "0", lg: "11vw" },
            pb: 5,
          }}
        >
          {FeaturedCourses.map((course, idx) => (
            <Grid item xs={12} lg={4} key={idx}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: { xs: "center", lg: "flex-start" },
            paddingBottom: { xs: 5, lg: 10 },
          }}
        >
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            sx={{
              marginLeft: { lg: "10.7vw" },
              backgroundColor: "secondary.main",
              color: "#FFFFFF",
              fontSize: "15px",
              pl: "16px",
              pr: "16px",
              height: "40px",
              "&:hover": {
                backgroundColor: "secondary.hover",
                boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
              },
            }}
            onClick={() => {
              {
                isAuthenticated ? navigate("/courses") : navigate("/register");
              }
            }}
          >
            Compare
          </Button>
        </Box>

        <Grid container sx={{ ml: { lg: "10.7vw" }, my: "4%" }}>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", lg: "left" },
                fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
                marginBottom: 1,
                color: "main",
              }}
            >
              Unique Career Insights
            </Typography>
            <Typography
              component="p"
              sx={{
                opacity: 0.7,
                textAlign: { xs: "center", lg: "left" },
                fontSize: { xs: "14px", md: "14px", lg: "16px" },
                marginBottom: { xs: 5, lg: 1 },
                pl: { xs: "8vw", lg: 0 },
                pr: { xs: "8vw", lg: 0 },
                color: "main",
              }}
            >
              Unlock Your Potential with Tailored Insights! Dive deep into a
              world of opportunities tailored uniquely to your chosen course and
              aspirations. No tedious surveys, no long questionnaires – just
              clear, actionable insights to propel you forward in your career
              journey.
            </Typography>

            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              sx={{
                backgroundColor: "secondary.main",
                color: "#FFFFFF",
                mt: "auto",
                fontSize: "15px",
                px: "16px",
                mb: { xs: "7%", lg: 0 },
                height: "40px",
                alignSelf: { xs: "center", lg: "flex-start" },
                "&:hover": {
                  backgroundColor: "secondary.hover",
                  boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
                },
              }}
              onClick={() => {
                {
                  isAuthenticated
                    ? navigate("/explore")
                    : navigate("/register");
                }
              }}
            >
              Try it now
            </Button>
          </Grid>
          <Grid item xs={0} lg={1.4}></Grid>
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              pl: { xs: "8vw", lg: 0 },
              pr: { xs: "8vw", lg: 0 },
            }}
          >
            <CareerCard career={demo_career} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
