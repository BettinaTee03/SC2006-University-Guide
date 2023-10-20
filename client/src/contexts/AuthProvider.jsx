import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    JSON.parse(localStorage.getItem("isAuthenticated") || "false")
  );

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "null")
  );

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const response = await Axios.get(`${API_BASE_URL}/profile`, {
          withCredentials: true,
        });
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    fetchLoginStatus();

    const intervalId = setInterval(fetchLoginStatus, 300000); // Check every 5 minute

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
