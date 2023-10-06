import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import '../IntakeChart.css';

function IntakeChart() {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [selectedButton, setSelectedButton] = useState("intake");

    const handleButtonClick = (mode) => {
        setSelectedButton(mode);
    };

    useEffect(() => {
        const fetchDataForCourse = async (course) => {
            try {
                const response = await axios.get(`http://localhost:8000/intake/${encodeURIComponent(course)}`);
                return {
                    name: course,
                    intake: response.data.map(item => item.intake),
                    years: response.data.map(item => item.year),
                    enrolment: response.data.map(item => item.enrolment),
                };
            } catch (error) {
                console.error(`Error fetching intake data for ${course}:`, error);
            }
        };

        const fetchData = async () => {
            const allData = await Promise.all(selectedCourses.map(fetchDataForCourse));
            setChartData(allData);
        };

        fetchData();
    }, [selectedCourses]);

    const handleCourseChange = (e) => {
        const course = e.target.value;
    
        if (selectedCourses.includes(course)) {
            setSelectedCourses(prevCourses => prevCourses.filter(c => c !== course));
        } else {
            if (selectedCourses.length >= 5) {
                alert("You can select a maximum of 5 courses at a time.");
                return;
            }
            setSelectedCourses(prevCourses => [...prevCourses, course]);
        }
    };
  
    const options = {
        title: {
            text: 'Intake/Enrolment Data'
        },
        xaxis: {
            categories: chartData[0]?.years?.sort((a, b) => a - b) || []
        }
    };

    const series = selectedCourses.map(course => {
        const courseData = chartData.find(data => data.name === course);
        return {
            name: course,
            data: selectedButton === "intake" ? courseData?.intake : courseData?.enrolment
        };
    });

    const handleDeselectCourse = (course) => {
        setSelectedCourses(prevCourses => prevCourses.filter(c => c !== course));
    };

    return (
        <>
          <Container maxWidth="lg">
              <Grid container spacing={3}>
                  <Grid item xs={12} md={11} lg={12}>
                      <ReactApexChart 
                          options={options} 
                          series={series} 
                          type="line" 
                      />
                  </Grid>
              </Grid>

              <Grid item xs={12}>
                  <div className="selected-courses">
                      {selectedCourses.map(course => (
                          <div key={course} className="selected-course">
                              {course}
                              <button onClick={() => handleDeselectCourse(course)}>x</button>
                          </div>
                      ))}
                  </div>
              </Grid>

              <Grid item container xs={12} spacing={1}>
                  <Grid item xs={12} sm={6}>
                      <button  
                          className={`button ${selectedButton === "intake" ? "button-selected" : ""}`}
                          onClick={() => handleButtonClick("intake")}>Show Intake
                      </button>
                      <button 
                          className={`button ${selectedButton === "enrolment" ? "button-selected" : ""}`}
                          onClick={() => handleButtonClick("enrolment")}>Show Enrolment
                      </button>
                  </Grid>
              </Grid>

              <Grid item xs={12}>
                  <div className="select-container">
                      <select multiple value={selectedCourses} onChange={handleCourseChange}>
                          <option value="Accountancy">Accountacy</option>
                          <option value="Architecture, Building & Real Estate">Architecture, Building & Real Estate</option>
                          <option value="Business & Administration">Business & Administration</option>
                          <option value="Dentistry">Dentistry</option>
                          <option value="Education">Education</option>
                          <option value="Engineering Sciences">Engineering Sciences</option>
                          <option value="Fine & Applied Arts">Fine & Applied Arts</option>
                          <option value="Health Sciences">Health Sciences</option>
                          <option value="Humanities & Social Sciences">Humanities & Social Sciences</option>
                          <option value="Information Technology">Information Technology</option>
                          <option value="Law">Law</option>
                          <option value="Mass Communication">Mass Communication</option>
                          <option value="Medicine">Medicine</option>
                          <option value="Natural, Physical & Mathematical Sciences">Natural, Physical & Mathematical Sciences</option>
                          <option value="Services">Services</option>
                      </select>
                  </div>
              </Grid>
          </Container>
          
      </>
    );
}

export default IntakeChart;