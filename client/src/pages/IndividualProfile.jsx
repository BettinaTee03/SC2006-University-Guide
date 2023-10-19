import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import UserParticulars from "../components/UserParticulars";
import { Box } from "@mui/material";

function IndividualProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
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
          setIsLoading(false);
          if (error.response && error.response.status === 401) {
            alert("You must be logged in to view this page.");
            navigate("/login");
          } else {
            alert("Failed to fetch user data. Please try again later.");
          }
        }
      }
    }

    getIndividualProfile();
  }, [id]);

  return (
    user && (
      <>
        <Box
          sx={{
            height: "68px",
            background:
              "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
          }}
        />
        <UserParticulars
          userParticulars={user.particulars}
          userName={user.username}
          userId={user._id}
        />
      </>
    )
  );
}

export default IndividualProfile;
