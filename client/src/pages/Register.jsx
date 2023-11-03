import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AlertSnackbar from "../components/AlertSnackbar";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import AuthContext from "../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        University Guide
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/#,\.])[A-Za-z\d@$!%*?&/#,\.]{8,}$/;
  const hasEightCharacters = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialCharacter = /[@$!%*?&/#,\.]/.test(password);

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setAlertMessage("Email is required.");
      setShowAlert(true);
      return;
    }

    if (!validator.isEmail(email)) {
      setAlertMessage("Invalid email format.");
      setShowAlert(true);
      return;
    }
    console.log(passwordPattern.test("DemoUser#1!"));
    if (!passwordPattern.test(password)) {
      setAlertMessage(
        "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        { username, email, password },
        { withCredentials: true }
      );
      if (response.status === 201) {
        navigate("/login", {
          state: { showAlert: true, message: "Sign up successful!" },
        });
      }
    } catch (error) {
      if (error.response) {
        setAlertMessage(error.response.data.error);
        setShowAlert(true);
      } else {
        setAlertMessage("Something went wrong. Please try again.");
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity="error"
      />
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="p"
                  sx={{
                    color: hasEightCharacters ? "green" : "main",
                    fontSize: "14px",
                    opacity: hasEightCharacters ? 1 : 0.85,
                  }}
                >
                  • At least 8 characters
                  <br />
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: hasUpperCase && hasLowerCase ? "green" : "main",
                    fontSize: "14px",
                    opacity: hasUpperCase && hasLowerCase ? 1 : 0.85,
                  }}
                >
                  • At least 1 uppercase and 1 lowercase letter
                  <br />
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: hasDigit && hasSpecialCharacter ? "green" : "main",
                    fontSize: "14px",
                    opacity: hasDigit && hasSpecialCharacter ? 1 : 0.85,
                  }}
                >
                  • At least 1 numeric digit and 1 special character
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                paddingLeft: "16px",
                paddingRight: "16px",
                height: "36px",
                marginTop: 3,
                marginBottom: 2,
                width: "100%",
                "&:hover": {
                  backgroundColor: "secondary.hover",
                  boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}

export default Register;
