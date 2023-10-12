import EditParticulars, {
  UserParticulars,
} from "../components/UserParticulars";
import { useState, useEffect } from "react";

function Profile() {
  const [message, setMessage] = useState("");

  /* Need to fetch userParticulars from database and pass into Components as Props*/
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
      <UserParticulars />
    </div>
  );
}

export default Profile;
