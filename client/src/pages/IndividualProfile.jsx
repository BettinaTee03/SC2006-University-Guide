import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import UserParticulars from "../components/UserParticulars";

function IndividualProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getIndividualProfile() {
      if (id) {
        try {
          const response = await Axios.get(
            `http://localhost:8000/profile/${id}`,
            { withCredentials: true }
          );

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
      <UserParticulars
        userParticulars={user.particulars}
        userName={user.username}
        userId={user._id}
      />
    )
  );
}

export default IndividualProfile;
