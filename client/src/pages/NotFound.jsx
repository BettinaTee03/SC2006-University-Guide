import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import error_404 from "../images/error_404.svg";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <Typography variant="h4" gutterBottom>
        Page Not Found!
      </Typography>
      <Typography variant="body1" paragraph>
        Sorry, we couldn't find the page you're looking for. Perhaps you've
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <img
        src={error_404}
        alt="404 illustration"
        style={{ marginBottom: "16px" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/home")}
      >
        Go To Home
      </Button>
    </Container>
  );
}

export default NotFound;
