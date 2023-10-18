import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import LoginAlert from "../components/LoginAlert";

function Profile() {
  const navigate = useNavigate();
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await Axios.get(`${API_BASE_URL}/profile`, {
          withCredentials: true,
        });

        if (!response.data.isLoggedIn) {
          setIsLoginAlertOpen(true);
        } else {
          navigate("/profile/" + response.data.id, { replace: true });
          // Using 'replace' to avoid pushing multiple entries to history
        }
      } catch (error) {
        setIsLoginAlertOpen(true);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Profile;
