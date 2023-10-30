import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AlertSnackbar from "../components/AlertSnackbar";
import { useNavigate, useLocation } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import NotFound from "./NotFound";
import CircularProgress from "@mui/material/CircularProgress";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setLoading] = useState(true);

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/,\.])[A-Za-z\d@$!%*?&/,\.]{8,}$/;

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokenValidation = async () => {
      const token = location.pathname.split("/").pop();

      try {
        const response = await axios.get(
          `${API_BASE_URL}/auth/verify-reset-token/${token}`
        );

        if (response.data.isValid) {
          setIsValidToken(true);
        } else {
          setAlertMessage(response.data.message);
          setSeverity("error");
          setShowAlert(true);
        }
      } catch (error) {
        setAlertMessage("Server error. Please try again later.");
        setSeverity("error");
        setShowAlert(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenValidation();
  }, [location]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setSeverity("error");
      setShowAlert(true);
      return;
    }

    if (!passwordPattern.test(password)) {
      setAlertMessage(
        "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      setShowAlert(true);
      return;
    }

    const token = location.pathname.split("/").pop();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/reset-password`,
        { token, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/login", {
          state: {
            showAlert: true,
            message:
              "Password reset successful! Please log in with your new password.",
            severity: "success",
          },
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

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />

      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : isValidToken ? (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              height: "68px",
              background:
                "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
            }}
          />
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
              Reset Password
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
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                Reset
              </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <NotFound
          text={
            "Sorry, we couldn't find the page you're looking for. The password reset link is probably expired."
          }
        />
      )}
    </>
  );
}

export default ResetPassword;
