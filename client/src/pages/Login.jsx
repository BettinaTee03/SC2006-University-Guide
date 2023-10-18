import React, { useState, useContext, useEffect } from "react";
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
import GoogleIcon from "@mui/icons-material/Google";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

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

function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.showAlert) {
      setAlertMessage(location.state.message);
      setSeverity(location.state.severity);
      setShowAlert(true);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        { username, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/home", {
          state: { showAlert: true, message: "Login successful!" },
        });
      }
    } catch (error) {
      if (error.response) {
        setAlertMessage(error.response.data.error);
        setSeverity("error");
        setShowAlert(true);
      } else {
        setAlertMessage("Something went wrong. Please try again.");
        setSeverity("error");
        setShowAlert(true);
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location = `${API_BASE_URL}/auth/google`;
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />
      <Box
        style={{
          height: "68px",
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="current-username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                paddingLeft: "16px",
                paddingRight: "16px",
                height: "36px",
                marginTop: 3,
                width: "100%",
                "&:hover": {
                  backgroundColor: "#0e53b3",
                  boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
                },
              }}
            >
              Sign In
            </Button>

            <Button
              type="button"
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
              onClick={handleGoogleLogin}
            >
              <GoogleIcon sx={{ mr: 2 }} />
              Sign In with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}

export default Login;
