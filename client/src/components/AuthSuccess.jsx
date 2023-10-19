import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthSuccess() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/auth/check-session`, {
          withCredentials: true,
        });

        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
          setUser({ username: response.data.username });
          navigate("/home", {
            state: {
              showAlert: true,
              message: "Login successful!",
              severity: "success",
            },
          });
        } else {
          navigate("/login", {
            state: {
              showAlert: true,
              message: "Google Authentication failed. Please try again.",
              severity: "error",
            },
          });
        }
      } catch (error) {
        navigate("/login", {
          state: {
            showAlert: true,
            message: "Something went wrong. Please try again.",
            severity: "error",
          },
        });
      }
    };

    checkSession();
  }, []);
}

export default AuthSuccess;
