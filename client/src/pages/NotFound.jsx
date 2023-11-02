import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import error_404 from "../images/error_404.svg";
import "../css/NotFound.css";

function NotFound({ text }) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "8%", lg: "5%" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, fontSize: 32 }}
        >
          Page Not Found!
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            textAlign: "center",
            color: "rgb(99, 115, 129)",
            fontSize: "16px",
          }}
        >
          {text}
        </Typography>

        <img
          src={error_404}
          alt="404 illustration"
          style={{ marginBottom: "16px" }}
          className="responsiveImage"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "#FFFFFF",
            mt: "auto",
            fontSize: "15px",
            px: "16px",
            mb: "16px",
            height: "40px",
            alignSelf: { xs: "center" },
            "&:hover": {
              backgroundColor: "secondary.hover",
              boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
            },
          }}
          onClick={() => navigate("/home")}
        >
          Go To Home
        </Button>
      </Container>
    </>
  );
}

export default NotFound;
