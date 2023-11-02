import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import AlertSnackbar from "./AlertSnackbar";

import {
  Box,
  Typography,
  Container,
  Button,
  CssBaseline,
  Checkbox,
  Grid,
} from "@mui/material";

import courseimage1 from "../courseImages/courseImage1.jpg";
import courseimage2 from "../courseImages/courseImage2.jpg";
import courseimage3 from "../courseImages/courseImage3.jpg";
import courseimage4 from "../courseImages/courseImage4.jpg";
import courseimage5 from "../courseImages/courseImage5.jpg";
import courseimage6 from "../courseImages/courseImage6.jpg";
import courseimage7 from "../courseImages/courseImage7.jpg";
import courseimage8 from "../courseImages/courseImage8.jpg";
import courseimage9 from "../courseImages/courseImage9.jpg";
import courseimage10 from "../courseImages/courseImage10.jpg";
import courseimage11 from "../courseImages/courseImage11.jpg";
import courseimage12 from "../courseImages/courseImage12.jpg";
import courseimage13 from "../courseImages/courseImage13.jpg";
import courseimage14 from "../courseImages/courseImage14.jpg";
import courseimage15 from "../courseImages/courseImage15.jpg";
import courseimage16 from "../courseImages/courseImage16.jpg";
import courseimage17 from "../courseImages/courseImage17.jpg";
import courseimage18 from "../courseImages/courseImage18.jpg";
import courseimage19 from "../courseImages/courseImage19.jpg";
import courseimage20 from "../courseImages/courseImage20.jpg";

export const Favourites = ({ userFavourites, userId }) => {
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const images = [
    courseimage1,
    courseimage2,
    courseimage3,
    courseimage4,
    courseimage5,
    courseimage6,
    courseimage7,
    courseimage8,
    courseimage9,
    courseimage10,
    courseimage11,
    courseimage12,
    courseimage13,
    courseimage14,
    courseimage15,
    courseimage16,
    courseimage17,
    courseimage18,
    courseimage19,
    courseimage20,
  ];

  // Fetch user favourites
  useEffect(() => {
    async function getFavouriteCourses() {
      try {
        const response = await Axios.get(
          `${API_BASE_URL}/profile/${userId}/favourites`,
          {
            params: userFavourites, // Pass query parameters here
            withCredentials: true, // Set withCredentials here
          }
        );

        if (response.status === 200) {
          setFavouriteCourses(response.data);
        }
      } catch (error) {
        console.log(error);
        alert("Failed to fetch user favourites. Please try again later.");
      }
    }
    getFavouriteCourses();
  }, []);

  const alertMessage = errorSubmit
    ? "An error occurred while saving changes. Please try again later."
    : "Changes saved successfully!";

  const severity = errorSubmit ? "error" : "success";

  //on edit click
  const onEditClick = () => {
    setEditMode(true);
  };

  // on select checkbox
  const onCheckboxChange = (courseName) => {
    setSelectedCourse((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(courseName)) {
        return prevSelectedCourses.filter(
          (coursename) => coursename !== courseName
        );
      } else {
        return [...prevSelectedCourses, courseName];
      }
    });
  };
  // //on submit click
  const onSubmitClick = async () => {
    const filteredCourses = favouriteCourses.filter(
      (courseName) => !selectedCourse.includes(courseName)
    );

    setEditMode(false);
    setSelectedCourse([]);
    try {
      const response = await Axios.put(
        `${API_BASE_URL}/profile/${userId}/favourites/submit`,
        {
          filteredCourses,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setFavouriteCourses(filteredCourses);
        setShowAlert(true);
      }
    } catch (error) {
      setErrorSubmit(true);
      setShowAlert(true);
    }
  };

  // on cancel click
  const onCancelClick = (e) => {
    e.preventDefault();
    setEditMode(false);
    setErrorSubmit(false);
    setShowAlert(false);
    setSelectedCourse([]);
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
            My Favourites
          </Typography>

          <Grid
            container
            spacing={2}
            width="95%"
            height="65%"
            sx={{
              mt: 1,
              border: "1px solid black",
              borderRadius: "10px",
              paddingBottom: "10px",
              display: "flex",
              alignItems: "space-between",
              flexWrap: "wrap",
              backgroundColor: "white",
              overflowY: "auto",
              paddingRight: "15px",
            }}
          >
            {Array.isArray(favouriteCourses) &&
              favouriteCourses.map((courseName, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  key={courseName}
                  sx={{
                    height: "400px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      objectFit: "cover",
                      backgroundColor: "#f6f6f6",
                      borderRadius: "10px",
                      height: "370px",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#f6f6f6",
                        mt: 2,

                        height: "65px",

                        "@media (max-width: 535px)": {
                          height: "80px",
                          width: "95%",
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        href={`/courses/${courseName}`}
                        sx={{
                          backgroundColor: "#f6f6f6",
                          maxWidth: "100%",
                          maxHeight: "100%",

                          width: "auto",
                          height: "auto",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "primary.main",
                          border: "none",
                          boxShadow: "none",
                          lineHeight: "1.3",

                          "&:hover": {
                            backgroundColor: "#ebebeb",
                          },
                        }}
                      >
                        {courseName}
                        {editMode && (
                          <Checkbox
                            onClick={() => onCheckboxChange(courseName)}
                          ></Checkbox>
                        )}
                      </Button>
                    </Typography>

                    <img
                      src={images[index % images.length]}
                      alt="Course Image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "430px",
                        height: "270px",
                        marginTop: "12px",
                        padding: "10px",
                        marginBottom: "15px",
                      }}
                    />
                  </div>
                </Grid>
              ))}
          </Grid>

          {editMode ? (
            <>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmitClick}
                color="secondary"
              >
                Delete Selected
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 0, mb: 2 }}
                onClick={onCancelClick}
                color="secondary"
              >
                Cancel Selection
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "white",
              }}
              onClick={onEditClick}
              color="secondary"
            >
              Edit Favourites
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Favourites;
