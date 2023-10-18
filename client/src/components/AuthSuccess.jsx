import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AlertSnackbar from "./AlertSnackbar";

function AuthSuccess() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const severity = isAuthenticated ? "success" : "error";
  const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/auth/check-session`, {
          withCredentials: true,
        });

        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
          navigate("/home", {
            state: { showAlert: true, message: "Login successful!" },
          });
        } else {
          setAlertMessage("Google Authentication failed. Please try again.");
          setShowAlert(true);
          setIsAuthenticated(false);
        }
      } catch (error) {
        setAlertMessage("Something went wrong. Please try again.");
        setShowAlert(true);
      }
    };

    checkSession();
  }, []);

  return (
    <AlertSnackbar
      alertMessage={alertMessage}
      open={showAlert}
      setOpen={setShowAlert}
      severity={severity}
    />
  );
}

export default AuthSuccess;
