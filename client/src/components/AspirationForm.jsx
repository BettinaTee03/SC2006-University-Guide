import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function AspirationForm({ course }) {
  function restructureData(data) {
    const numberOfCareers = 3;
    const result = [];

    for (let i = 1; i <= numberOfCareers; i++) {
      const careerProspect = data[`careerProspect${i}`];
      const careerPath = data[`careerPath${i}`].split("->");
      const skills = [];

      for (let j = 1; j <= 3; j++) {
        const skill = data[`skill${i}_${j}`];
        if (skill) {
          skills.push(skill);
        }
      }

      result.push({
        careerProspect,
        careerPath,
        skills,
      });
    }

    return result;
  }

  const [aspiration, setAspiration] = useState("");
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAspiration(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios.post(
        "http://localhost:8000/courses/aspirations/submit",
        {
          aspiration,
          course,
        },
        {
          withCredentials: true,
        }
      );
      const structuredData = restructureData(response.data);
      setCareers(structuredData);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("You must be logged in to view this page.");
        navigate("/login");
      } else {
        alert("An error occurred while submitting your aspiration.");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{color: "#A2B29F"}}>Tell us more about you!</h1>
        <label htmlFor="aspiration" style={{marginRight: 4}}>Aspiration:</label>
        <input
          type="text"
          id="aspiration"
          name="aspiration"
          placeholder="Enter your aspiration"
          value={aspiration}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" style={{backgroundColor:"#DF8886", padding:3, border: "none", borderRadius:5, margin:4}}/>
      </form >
      {isLoading ? (
        "We are crafting and getting the best career prospects for you!"
      ) : careers.length > 0 ? ( // Check if the careers array has data
        <>
          <h1 style={{color: "#A2B29F"}}>Based on your answers...</h1>
          <p style={{color: "#A2B29F"}}>
            These are the top 3 career options based on your selected course and
            aspiration!
          </p>
          <h1 style={{color: "#A2B29F"}}>Career Prospects</h1>
          <p style={{color: "#A2B29F"}}>You can explore the following career options upon graduation:</p>
          {careers.map((career, index) => (
            <div key={index}>
              <h2>{career.careerProspect}</h2>
              <h3>Career Path:</h3>
              <ul>
                {career.careerPath.map((path, idx) => (
                  <li key={idx}>{path}</li>
                ))}
              </ul>
              <h3>Skills:</h3>
              <ul>
                {career.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}

export default AspirationForm;
