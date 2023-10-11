import EditParticulars from "../components/EditParticulars";
import { useState, useEffect } from "react";

function Profile() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching profile message", error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <EditParticulars />
    </div>
  );
}
