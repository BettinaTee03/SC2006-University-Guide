import { Typography, Box, Grid } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import universitystudents from "../images/university_students.png";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate, useLocation } from "react-router-dom";
import AlertSnackbar from "../components/AlertSnackbar";
import Container from "@mui/material/Container";
import AuthContext from "../contexts/AuthContext";
import CourseCard from "../components/CourseCard";
import ntu_img from "../images/ntu.jpg";
import smu_img from "../images/smu.jpg";
import nus_img from "../images/nus.jpg";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const [severity, setSeverity] = useState("success");

  const featuredCourse1 = {
    imageUrl: ntu_img,
    school: "Nanyang Technological University",
    title: "Accountancy",
    description:
      "We have the most established and well-regarded accountancy programmes in Singapore and the region, with a long tradition of training professional accountants for leadership roles as in accounting firms, public and private companies.",
    faculty: "Nanyang Business School",
  };

  const featuredCourse2 = {
    imageUrl: nus_img,
    school: "National University of Singapore",
    title: "Accountancy",
    description:
      "A full-fledged rigorous and versatile accountancy programme, complemented with a strong business management foundation that grooms students for the profession. Diploma holders may be eligible for up to 20 MCs of exemption that would count towards the Unrestricted Electives.",
    faculty: "NUS Business School",
  };

  const featuredCourse3 = {
    imageUrl: smu_img,
    school: "Singapore Management University",
    title: "Accountancy",
    description:
      "The programme provides a holistic education that is broad-based with a strong accounting core, covering business, technology, entrepreneurship, leadership skills, communications and social responsibility. All students are guaranteed a Second Major, which they can choose from any School across SMU.",
    faculty: "School of Accountancy",
  };

  useEffect(() => {
    if (location.state && location.state.showAlert) {
      setAlertMessage(location.state.message);
      setSeverity(location.state.severity);
      setShowAlert(true);
    }
  }, [location]);

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
              textDecoration: "none",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              paddingTop: { xs: "15%", lg: "7%" },
              fontSize: { xs: "2rem", md: "2.5rem", lg: "4rem" },
              marginBottom: { xs: 5, lg: 1 },
            }}
          >
            University Course <span style={{ color: "secondary" }}>Finder</span>
          </Typography>
          <Typography
            component="h2"
            sx={{
              textDecoration: "none",
              color: "primary",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              ml: { xs: "4vw" },
              mr: { xs: "4vw" },
              marginBottom: { xs: 2, lg: 2 },
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Welcome to Singapore's leading course discovery platform.
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              fontFamily: "'Roboto Condensed', sans-serif",
              textDecoration: "none",
              color: "primary",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "10.7vw" },
              ml: { xs: "4vw" },
              mr: { xs: "4vw" },
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
              height: "48px",
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
          <Container
            sx={{
              display: {
                xs: "none", // hidden for xs
                md: "flex", // hidden for md
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
              src={universitystudents}
            />
          </Container>
        </Box>
        <Box sx={{ marginLeft: { lg: "10.7vw" } }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              textDecoration: "none",
              textAlign: { xs: "center", lg: "left" },
              paddingTop: { xs: "10%", lg: "5%" },
              paddingBottom: { lg: "2%" },
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3.5rem" },
              marginBottom: { xs: 5, lg: 1 },
              color: "main",
            }}
          >
            Compare Courses
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
          <Grid item xs={12} lg={4}>
            <CourseCard course={featuredCourse1} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CourseCard course={featuredCourse2} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CourseCard course={featuredCourse3} />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: { xs: "center", lg: "flex-start" },
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
              paddingLeft: "16px",
              paddingRight: "16px",
              height: "48px",
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
            Compare
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Home;
