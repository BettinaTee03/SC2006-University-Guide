import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AlertSnackbar from "./AlertSnackbar";

function AuthSuccess() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
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
            state: {
              showAlert: true,
              message: "Login successful!",
              severity: severity,
            },
          });
        } else {
          navigate("/login", {
            state: {
              showAlert: true,
              message: "Google Authentication failed. Please try again.",
              severity: severity,
            },
          });
        }
      } catch (error) {
        navigate("/login", {
          state: {
            showAlert: true,
            message: "Something went wrong. Please try again.",
            severity: severity,
          },
        });
      }
    };

    checkSession();
  }, []);
}

export default AuthSuccess;
