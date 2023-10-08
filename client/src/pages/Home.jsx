import { Typography, Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import universitystudents from "../images/university_students.png";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {};

    fetchMessage();
  }, []);

  return (
    <Box bgcolor="#F8EDE3" sx={{ minHeight: "100vh" }}>
      <Box bgcolor="#A2B29F">
        <Container>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              paddingTop: { xs: "10%", md: "20%" },
              paddingBottom: { xs: "10px", md: "20px" },
              fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            University Course Finder
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              marginBottom: 1,
            }}
          >
            Welcome to Singapore's leading course discovery platform.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              marginBottom: 1,
            }}
          >
            Whether you're passionate about arts, sciences, technology, or
            business, we connect you with top-tier courses from renowned
            institutions across Singapore.
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxHeight: "50vh",
              objectFit: "cover",
            }}
            alt="University Students."
            src={universitystudents}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
