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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

function Login() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [showPassword, setShowPassword] = React.useState(false);

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.showAlert) {
      setAlertMessage(location.state.message);
      setSeverity(location.state.severity);
      setShowAlert(true);
    }
  }, [location]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        setUser({ username: response.data.user.username });
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
      </Container>
    </>
  );
}

export default Login;
