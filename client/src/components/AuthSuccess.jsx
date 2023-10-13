import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthSuccess() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/auth/check-session",
          { withCredentials: true }
        );

        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        navigate("/home");
      } catch (error) {
        alert("Failed to check session");
      }
    };

    checkSession();
  }, []);
}

export default AuthSuccess;
