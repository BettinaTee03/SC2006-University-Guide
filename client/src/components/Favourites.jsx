import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
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

export const Favourites = ({ userFavourites, userId }) => {
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const cloudinaryBaseUrl = "https://res.cloudinary.com/dm9pja9iv/image/upload";
  const transformations = `f_auto,q_auto/h_270`;

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const images_url = [
    "mymt9db8e27v04ssrzas",
    "vkdlad7t7owob2dmqffo",
    "b3xyykkrxxz07qq7sbgu",
    "wf9akjqihv5ihfi97sow",
    "wwhqg30nlx6bp2qar95b",
    "idsepyxntjfrfudxtz7a",
    "qavzs3xmovhzvwym8fzm",
    "fnvunm6byiarwvdpeoar",
    "liudpy3zvvzrmfhj9ffs",
    "a8bzn29m9rh2bfzv96xz",
    "potodngpcwgww58sdtb6",
    "m226abwygwbdxexlnwvk",
    "avnvtngniuhxemhbseju",
    "ndpaf7fqzzrz4ubnydgd",
    "xh3wjru6gx81gkcn7yec",
    "ss5ekhnpnnsqynhjhnzp",
    "wc8kmjhy4seg5tozddtn",
    "gzcnnem7dfbl8bakbwge",
    "id9lejzqhr001dkzglnw",
    "xdgeewqdfbnwurfkveke",
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
                      src={`${cloudinaryBaseUrl}/${transformations}/v1/sguniguide/${
                        images_url[index % images_url.length]
                      }`}
                      alt="Course Image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "430px",
                        height: "270px",
                        marginTop: "12px",
                        padding: "10px",
                        marginBottom: "15px",
                        loading: "lazy",
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