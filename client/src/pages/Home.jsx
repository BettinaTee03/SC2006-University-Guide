import { Typography, Box, Grid, Avatar } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import universitystudents from "../images/university_students.png";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate, useLocation } from "react-router-dom";
import AlertSnackbar from "../components/AlertSnackbar";
import Container from "@mui/material/Container";
import AuthContext from "../contexts/AuthContext";
import CourseCard from "../components/CourseCard";
import ntu_logo from "../images/ntu_logo.svg.png";
import smu_logo from "../images/smu_logo.svg.png";
import nus_logo from "../images/nus_logo.svg.png";
import sit_logo from "../images/sit_logo.svg.png";
import sutd_logo from "../images/sutd_logo.svg.png";
import suss_logo from "../images/suss_logo.svg.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import featuredCourses from "../components/featuredCourses";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const [severity, setSeverity] = useState("success");
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only("xs"));

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
            {[ntu_logo, nus_logo, sit_logo, smu_logo, sutd_logo, suss_logo].map(
              (logo, idx) => (
                <Grid
                  item
                  lg={0.5}
                  xs={4}
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt="School Logo"
                    style={{ height: matchesXS ? "25px" : "35px" }}
                  />
                </Grid>
              )
            )}
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
              src={universitystudents}
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
          {featuredCourses.map((course, idx) => (
            <Grid item xs={12} lg={4}>
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
