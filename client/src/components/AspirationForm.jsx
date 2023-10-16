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
  Box,
  Breadcrumbs,
  Stack,
  Link,
  Tooltip,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

  const handleInputChange = (e) => {
    setAspiration(e.target.value);
  };

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
        <Grid container direction="column">
          <Grid
            item
            color="#A2B29F"
            sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
          >
            <Typography>
              We are crafting and getting the best career prospects for you ...
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ marginLeft: "1rem", marginBottom: "1rem", width: "97%" }}
          >
            <Skeleton variant="rectangular" height={70} />
          </Grid>
          <Grid
            item
            sx={{ marginLeft: "1rem", marginBottom: "1rem", width: "97%" }}
          >
            <Skeleton variant="rectangular" height={50} />
          </Grid>
          <Grid container>
            <Grid
              item
              sx={{ marginLeft: "1rem", marginBottom: "1rem", width: "47.8%" }}
            >
              <Skeleton variant="rectangular" height={200} />
            </Grid>
            <Grid
              item
              sx={{ marginLeft: "1rem", marginBottom: "1rem", width: "47.8%" }}
            >
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sx={{ marginLeft: "1rem", width: "47.8%" }}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          </Grid>
        </Grid>
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
          <Grid container justifyContent="center">
            {careers.map((career, index) => (
              <Grid item key={index} padding={1} xs={12} sm={12} md={6}>
                <Box backgroundColor="#FFF8F2" height="100%" padding={2}>
                  <Container sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      color="#A2B29F"
                      fontSize="1.1rem"
                      fontWeight="Bold"
                    >
                      {career.careerProspect} Career Path
                    </Typography>
                  </Container>
                  <Container>
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      my={5}
                    >
                      <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                      >
                        {career.careerPath.map((path, idx) => (
                          <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            key={idx}
                          >
                            <Tooltip
                              title={
                                <div>
                                  Skill required for {path}:
                                  <br />
                                  {career.skills[idx]}
                                </div>
                              }
                            >
                              <Typography
                                sx={{
                                  width: { xs: 80, md: 120 },
                                  fontSize: { xs: 13, md: 16 },
                                  textAlign: "center",
                                  variant: "body1",
                                  ":hover": {
                                    color: "black",
                                  },
                                }}
                              >
                                {path}
                              </Typography>
                            </Tooltip>
                          </Link>
                        ))}
                      </Breadcrumbs>
                    </Stack>
                  </Container>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </>
  );
}

export default AspirationForm;
