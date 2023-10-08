import { Typography, Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import universitystudents from '../images/university_students.png';

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {};

    fetchMessage();
  }, []);

  return (
    <Box bgcolor="#F8EDE3" sx={{height: "100vh"}}>
      <Box bgcolor="#A2B29F">
        <Container>
            <Typography 
              variant="h2" 
              noWrap 
              align="center"
              sx={{
                fontFamily: 'Segoe UI',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                paddingTop:"20%",
                paddingBottom: "20px",
              }}>
                University Course Finder
            </Typography>
            <Typography 
              variant="h5" 
              noWrap 
              align="center"
              sx={{
                fontFamily: 'Segoe UI Emoji',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                Welcome to Singapore's leading course discovery platform.
            </Typography>
            <Typography 
              variant="h5" 
              noWrap 
              align="center"
              sx={{
                fontFamily: 'Segoe UI Emoji',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                Whether you're passionate about arts, sciences, technology, or business,
            </Typography>
            <Typography 
              variant="h5" 
              noWrap 
              align="center"
              sx={{
                fontFamily: 'Segoe UI Emoji',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                we connect you with top-tier courses from renowned instituitions across Singapore.
            </Typography>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
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
