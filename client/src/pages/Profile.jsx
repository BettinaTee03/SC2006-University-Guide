import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await Axios.get("http://localhost:8000/profile", {
          withCredentials: true,
        });

        if (!response.data.isLoggedIn) {
          directToLogin();
        } else {
          navigate("/profile/" + response.data.id, { replace: true });
          // Using 'replace' to avoid pushing multiple entries to history
        }
      } catch (error) {
        directToLogin();
      }
    };

    fetchProfileData();
  }, []);

  const directToLogin = () => {
    alert("You must be logged in to view this page.");
    navigate("/login");
  };

  return null;
}

export default Profile;
