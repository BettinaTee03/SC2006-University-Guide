import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import AlertSnackbar from "./AlertSnackbar";
import {
  Box,
  Typography,
  Container,
  Button,
  MenuItem,
  TextField,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

export const UserParticulars = ({ userParticulars, userName, userId }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedParticulars, setEditedParticulars] = useState({
    firstName: userParticulars.firstName || "",
    lastName: userParticulars.lastName || "",
    email: userParticulars.email || "",
    gender: userParticulars.gender || "",
    currentLevel: userParticulars.currentLevel || "",
    age: userParticulars.age || "",
    matriculationYear: userParticulars.matriculationYear || "",
  });
  const initialUsernameRef = React.useRef(userName || "");
  const [username, setUsername] = useState(userName || "");
  const [errorName, setErrorName] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const alertMessage =
    errorSubmit && errorName
      ? "Username is already taken."
      : errorSubmit
      ? "An error occurred while saving changes. Please try again later."
      : "Changes saved successfully.";

  const severity = errorSubmit ? "error" : "success";

  const onEditClick = () => {
    setEditMode(true);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setEditedParticulars((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "username") {
      setUsername(value);
    }
  };

  const submitHandler = async () => {
    try {
      const response = await Axios.put(
        `${API_BASE_URL}/profile/${userId}/particulars/submit`,
        {
          editedParticulars,
          username,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setShowAlert(true);
      }
    } catch (error) {
      setEditedParticulars({ ...userParticulars });
      if (error.response.status === 400) {
        setShowAlert(true);
        setErrorName(true);
        setErrorSubmit(true);
      } else {
        setShowAlert(true);
        setErrorSubmit(true);
      }
    }
    setEditMode(false);
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    if (errorName) {
      setUsername("");
      setErrorName(false);
    }
    setErrorSubmit(false);
    setShowAlert(false);
    setEditMode(false);
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />
      {isSmallScreen && editMode ? (
        <Container component="main" maxWidth="lg" className="container">
          <Box
            sx={{
              height: "64px",
              background:
                "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
              My Particulars
            </Typography>
            <Box
              component="form"
              noValidate
              width="95%"
              height="65%"
              sx={{
                mt: 1,
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "space-between",
              }}
            >
              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Username</InputLabel>
                <TextField
                  error={errorName}
                  InputProps={{
                    readOnly: initialUsernameRef.current !== "",
                  }}
                  type="text"
                  name="username"
                  value={username}
                  label={errorName ? "Error" : ""}
                  id={errorName ? "outlined-error-helper-text" : ""}
                  helperText={errorName ? "Username is already taken." : ""}
                  onChange={onChangeHandler}
                  sx={{
                    mb: 1,
                    backgroundColor: "#F6F6F6",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#FFFFFF",
                      margin: 0,
                      paddingTop: "5px",
                      paddingLeft: "10px",
                    },
                    height: "56px",
                  }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>First Name</InputLabel>
                <TextField
                  type="text"
                  name="firstName"
                  value={editedParticulars.firstName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Last Name</InputLabel>
                <TextField
                  type="text"
                  name="lastName"
                  value={editedParticulars.lastName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Email</InputLabel>
                <TextField
                  type="email"
                  name="email"
                  value={editedParticulars.email}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>

              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Age</InputLabel>
                <TextField
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  name="age"
                  value={editedParticulars.age}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Gender</InputLabel>
                <FormControl fullWidth>
                  <Select
                    type="option"
                    name="gender"
                    value={editedParticulars.gender}
                    onChange={onChangeHandler}
                    sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Prefer Not to Say</MenuItem>
                  </Select>
                </FormControl>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Current Level</InputLabel>
                <FormControl fullWidth>
                  <Select
                    type="option"
                    name="currentLevel"
                    value={editedParticulars.currentLevel}
                    onChange={onChangeHandler}
                    sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                  >
                    <MenuItem value="Primary">Primary</MenuItem>
                    <MenuItem value="Secondary">Secondary</MenuItem>
                    <MenuItem value="Junior College">Junior College</MenuItem>

                    <MenuItem value="Polytechnic">Polytechnic</MenuItem>
                    <MenuItem value="Institute of Technical Education">
                      Institute of Technical Education
                    </MenuItem>
                    <MenuItem value="International Baccalaureate">
                      International Baccalaureate
                    </MenuItem>
                    <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                    <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                    <MenuItem value="Doctorate">Doctorate</MenuItem>
                  </Select>
                </FormControl>

                <InputLabel sx={{ mt: 2, mb: 1 }}>
                  Matriculation Year
                </InputLabel>
                <TextField
                  type="number"
                  min="1990"
                  max="2050"
                  step="1"
                  name="matriculationYear"
                  value={editedParticulars.matriculationYear}
                  onChange={onChangeHandler}
                  sx={{ mb: 2, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, mb: 1, width: "145px" }}
              onClick={submitHandler}
              color="secondary"
            >
              Update Changes
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 0, mb: 1, width: "145px" }}
              onClick={onCancelClick}
              color="secondary"
            >
              Discard Changes
            </Button>
          </Box>
        </Container>
      ) : isSmallScreen ? (
        <Container component="main" maxWidth="lg" className="container">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
              My Particulars
            </Typography>
            <Box
              component="form"
              noValidate
              width="95%"
              height="65%"
              sx={{
                mt: 1,
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "space-between",
              }}
            >
              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Username</InputLabel>
                <TextField
                  value={username}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>First Name</InputLabel>
                <TextField
                  value={editedParticulars.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Last Name</InputLabel>
                <TextField
                  value={editedParticulars.lastName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Email</InputLabel>
                <TextField
                  value={editedParticulars.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>

              <Container
                className="column2"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Age</InputLabel>
                <TextField
                  value={editedParticulars.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Gender</InputLabel>
                <TextField
                  value={editedParticulars.gender}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Current Level</InputLabel>
                <TextField
                  value={editedParticulars.currentLevel}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>
                  Matriculation Year
                </InputLabel>
                <TextField
                  value={editedParticulars.matriculationYear}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 2, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 1, width: "145px" }}
              onClick={onEditClick}
              color="secondary"
            >
              Edit Particulars
            </Button>
          </Box>
        </Container>
      ) : editMode ? (
        <Container component="main" maxWidth="lg" className="container">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
              My Particulars
            </Typography>
            <Box
              component="form"
              noValidate
              width="95%"
              height="65%"
              sx={{
                mt: 1,
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "space-between",
              }}
            >
              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Username</InputLabel>
                <TextField
                  error={errorName}
                  InputProps={{
                    readOnly: initialUsernameRef.current !== "",
                  }}
                  type="text"
                  name="username"
                  value={username}
                  label={errorName ? "Error" : ""}
                  id={errorName ? "outlined-error-helper-text" : ""}
                  helperText={errorName ? "Username is already taken." : ""}
                  onChange={onChangeHandler}
                  sx={{
                    mb: 1,
                    backgroundColor: "#F6F6F6",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#FFFFFF",
                      margin: 0,
                      paddingTop: "5px",
                      paddingLeft: "10px",
                    },
                    height: "56px",
                  }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>First Name</InputLabel>
                <TextField
                  type="text"
                  name="firstName"
                  value={editedParticulars.firstName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Gender</InputLabel>
                <FormControl fullWidth>
                  <Select
                    type="option"
                    name="gender"
                    value={editedParticulars.gender}
                    onChange={onChangeHandler}
                    sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Prefer Not to Say</MenuItem>
                  </Select>
                </FormControl>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Current Level</InputLabel>
                <FormControl fullWidth>
                  <Select
                    type="option"
                    name="currentLevel"
                    value={editedParticulars.currentLevel}
                    onChange={onChangeHandler}
                    sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                  >
                    <MenuItem value="Primary">Primary</MenuItem>
                    <MenuItem value="Secondary">Secondary</MenuItem>
                    <MenuItem value="Junior College">Junior College</MenuItem>

                    <MenuItem value="Polytechnic">Polytechnic</MenuItem>
                    <MenuItem value="Institute of Technical Education">
                      Institute of Technical Education
                    </MenuItem>
                    <MenuItem value="International Baccalaureate">
                      International Baccalaureate
                    </MenuItem>
                    <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                    <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                    <MenuItem value="Doctorate">Doctorate</MenuItem>
                  </Select>
                </FormControl>
              </Container>

              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Email</InputLabel>
                <TextField
                  type="email"
                  name="email"
                  value={editedParticulars.email}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Last Name</InputLabel>
                <TextField
                  type="text"
                  name="lastName"
                  value={editedParticulars.lastName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Age</InputLabel>
                <TextField
                  type="number"
                  min="10"
                  max="100"
                  step="1"
                  name="age"
                  value={editedParticulars.age}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>
                  Matriculation Year
                </InputLabel>
                <TextField
                  type="number"
                  min="1990"
                  max="2050"
                  step="1"
                  name="matriculationYear"
                  value={editedParticulars.matriculationYear}
                  onChange={onChangeHandler}
                  sx={{ mb: 2, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, mb: 1, width: "145px" }}
              onClick={submitHandler}
              color="secondary"
            >
              Update Changes
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 0, mb: 1, width: "145px" }}
              onClick={onCancelClick}
              color="secondary"
            >
              Discard Changes
            </Button>
          </Box>
        </Container>
      ) : (
        <Container component="main" maxWidth="lg" className="container">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
              My Particulars
            </Typography>
            <Box
              component="form"
              noValidate
              width="95%"
              height="65%"
              sx={{
                mt: 1,
                border: "1px solid black",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "space-between",
                borderRadius: "10px",
              }}
            >
              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Username</InputLabel>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  type="text"
                  name="username"
                  value={username}
                  sx={{
                    mb: 1,
                    backgroundColor: "#F6F6F6",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#FFFFFF",
                      margin: 0,
                      paddingTop: "5px",
                      paddingLeft: "10px",
                    },
                    height: "56px",
                  }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>First Name</InputLabel>
                <TextField
                  type="text"
                  name="firstName"
                  value={editedParticulars.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Gender</InputLabel>
                <TextField
                  value={editedParticulars.gender}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Current Level</InputLabel>
                <TextField
                  value={editedParticulars.currentLevel}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>

              <Container
                className="column1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <InputLabel sx={{ mt: 2, mb: 1 }}>Email</InputLabel>
                <TextField
                  type="email"
                  name="email"
                  value={editedParticulars.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Last Name</InputLabel>
                <TextField
                  type="text"
                  name="lastName"
                  value={editedParticulars.lastName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>Age</InputLabel>
                <TextField
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  name="age"
                  value={editedParticulars.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 2, mb: 1 }}>
                  Matriculation Year
                </InputLabel>
                <TextField
                  type="number"
                  min="1990"
                  max="2050"
                  step="1"
                  name="matriculationYear"
                  value={editedParticulars.matriculationYear}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 2, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 1, width: "145px" }}
              onClick={onEditClick}
              color="secondary"
            >
              Edit Particulars
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
};

export default UserParticulars;
