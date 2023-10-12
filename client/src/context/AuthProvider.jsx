import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    JSON.parse(sessionStorage.getItem("isAuthenticated") || "false")
  );

  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
