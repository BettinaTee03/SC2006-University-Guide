import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  MenuItem,
  CssBaseline,
  TextField,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

export const UserParticulars = (particulars) => {
  const [particularsData, setParticulars] = useState(particulars);
  const [editMode, setEditMode] = useState(false);
  const [editedParticulars, setEditedParticulars] = useState({
    ...particularsData,
  });

  const onEditClick = () => {
    setEditMode(true);
  };

  //onchange handler
  const onChangeHandler = (event) => {
    console.log(event);
    setEditedParticulars({
      ...editedParticulars,
      [event.target.name]: event.target.value,
    });
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setParticulars(editedParticulars); /* Need to write back to database */
    setEditMode(false);
  };

  // on cancel click
  const onCancelClick = (e) => {
    e.preventDefault();
    setEditedParticulars({ ...UserParticulars });
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
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
            <Typography component="h1" variant="h5" sx={{}}>
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
                borderRadius: "20px",
                borderShadow: "10px 10px 10px 10px",
                backgroundColor: "white",

                "@media (min-width: 600px)": {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "space-between",
                },
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
                <InputLabel sx={{ mt: 1.5 }}>Username</InputLabel>
                <TextField
                  defaultValue={particularsData.username}
                  type="text"
                  name="username"
                  value={particularsData.username}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>First Name</InputLabel>
                <TextField
                  defaultValue={particularsData.firstName}
                  type="text"
                  name="firstName"
                  value={particularsData.firstName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Gender</InputLabel>
                <FormControl fullWidth>
                  <Select
                    defaultValue={particularsData.gender}
                    type="option"
                    name="gender"
                    value={particularsData.gender}
                    onChange={onChangeHandler}
                    sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Prefer Not to Say</MenuItem>
                  </Select>
                </FormControl>

                <InputLabel sx={{ mt: 3 }}>Current Level</InputLabel>
                <FormControl fullWidth>
                  <Select
                    defaultValue={particularsData.currentLevel}
                    type="option"
                    name="currentLevel"
                    value={particularsData.currentLevel}
                    onChange={onChangeHandler}
                    sx={{ mb: 3, backgroundColor: "#F6F6F6" }}
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
                <InputLabel sx={{ mt: 1.5 }}>Email</InputLabel>
                <TextField
                  defaultValue={particularsData.email}
                  type="email"
                  name="email"
                  value={particularsData.email}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Last Name</InputLabel>
                <TextField
                  defaultValue={particularsData.lastName}
                  type="text"
                  name="lastName"
                  value={particularsData.lastName}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Age</InputLabel>
                <TextField
                  defaultValue={particularsData.age}
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  name="age"
                  value={particularsData.age}
                  onChange={onChangeHandler}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Matriculation Year</InputLabel>
                <TextField
                  defaultValue={particularsData.matriculationYear}
                  type="number"
                  min="1990"
                  max="2050"
                  step="1"
                  name="matriculationYear"
                  value={particularsData.matriculationYear}
                  onChange={onChangeHandler}
                  sx={{ mb: 3, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
              color="secondary"
              borderRadius="50px"
            >
              Update Changes
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 0, mb: 2 }}
              onClick={onCancelClick}
              color="secondary"
              borderRadius="50px"
            >
              Discard Changes
            </Button>
          </Box>
        </Container>
      ) : (
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
            <Typography component="h1" variant="h5" sx={{}}>
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
                borderRadius: "20px",
                borderShadow: "10px 10px 10px 10px",
                backgroundColor: "white",

                "@media (min-width: 600px)": {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "space-between",
                },
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
                <InputLabel sx={{ mt: 1.5 }}>Username</InputLabel>
                <TextField
                  defaultValue={particularsData.username}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>First Name</InputLabel>
                <TextField
                  defaultValue={particularsData.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Gender</InputLabel>
                <TextField
                  defaultValue={particularsData.gender}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Current Level</InputLabel>
                <TextField
                  defaultValue={particularsData.currentLevel}
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
                <InputLabel sx={{ mt: 1.5 }}>Email</InputLabel>
                <TextField
                  defaultValue={particularsData.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Last Name</InputLabel>
                <TextField
                  defaultValue={particularsData.lastName}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Age</InputLabel>
                <TextField
                  defaultValue={particularsData.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 1, backgroundColor: "#F6F6F6" }}
                ></TextField>

                <InputLabel sx={{ mt: 3 }}>Matriculation Year</InputLabel>
                <TextField
                  defaultValue={particularsData.matriculationYear}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mb: 3, backgroundColor: "#F6F6F6" }}
                ></TextField>
              </Container>
            </Box>

            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onEditClick}
              color="secondary"
              borderRadius="50px"
            >
              Edit Particulars
            </Button>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default UserParticulars;
