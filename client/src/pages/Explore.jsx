import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import { Container } from "@mui/material";

function Explore() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      // implement /explore page
      try {
        const response = await axios.get("http://localhost:8000/");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching explore page", error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {<Search />}
    </div>
  );
}

export default Explore;
