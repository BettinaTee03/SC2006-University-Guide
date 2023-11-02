import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import LoginAlert from "../components/LoginAlert";
import UserParticulars from "../components/UserParticulars";
import Favourites from "../components/Favourites";
import { Box } from "@mui/material";

function IndividualProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  useEffect(() => {
    async function getIndividualProfile() {
      if (id) {
        try {
          const response = await Axios.get(`${API_BASE_URL}/profile/${id}`, {
            withCredentials: true,
          });

          if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          setIsLoginAlertOpen(true);
        }
      }
    }

    getIndividualProfile();
  }, [id]);

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
      {user && (
        <UserParticulars
          userParticulars={user.particulars}
          userName={user.username}
          userId={user._id}
        />
      )}
      {user && (
        <Favourites userFavourites={user.favourites} userId={user._id} />
      )}
    </>
  );
}

export default IndividualProfile;
