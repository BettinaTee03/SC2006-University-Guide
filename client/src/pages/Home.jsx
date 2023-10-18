import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import universitystudents from "../images/university_students.png";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate, useLocation } from "react-router-dom";
import AlertSnackbar from "../components/AlertSnackbar";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("success");

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
        style={{
          height: "68px",
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
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
              paddingTop: { xs: "15%", lg: "7%" },
              marginLeft: { lg: "15%" },
              fontSize: { xs: "2.5rem", lg: "4rem" },
              marginBottom: { xs: 5, lg: 1 },
            }}
          >
            University Course <span style={{ color: "secondary" }}>Finder</span>
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Roboto Condensed', sans-serif",
              textDecoration: "none",
              color: "primary",
              marginLeft: { lg: "15%" },
              marginBottom: { xs: 2, lg: 2 },
              fontWeight: 700,
              fontSize: { xs: "1.2rem" },
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
              marginLeft: { lg: "15%" },
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
              marginLeft: { lg: "15%" },
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
              navigate("/register");
            }}
          >
            Get Started.
          </Button>
          <Box
            component="img"
            sx={{
              width: { xs: "100%", lg: "80%" },
              marginLeft: { lg: "10%" },
              maxHeight: "50vh",
              objectFit: "cover",
            }}
            alt="University Students."
            src={universitystudents}
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;
