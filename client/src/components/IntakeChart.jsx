import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import "../css/IntakeChart.css";
import "../IntakeChart.css";
import { Autocomplete, TextField } from "@mui/material"; // Import Autocomplete and TextField
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
// import { createTheme } from '@mui/material/styles';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#212B36", //Font 
//     },
//     secondary: {
//       main: "#FA541C", //buttons 
//       hover: "#B3200E", //hover on button
//     },
//   },
//   typography: {
//     fontFamily: `"Roboto Condensed", "Helvetica", "Arial", sans-serif`,
//   },
// });

function IntakeChart() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("intake");
  const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const navigate = useNavigate();

  const handleButtonClick = (mode) => {
    setSelectedButton(mode);
  };

  useEffect(() => {
    const fetchDataForCourse = async (course) => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/intake/${encodeURIComponent(course)}`,
          {
            withCredentials: true,
          }
        );
        return {
          name: course,
          intake: response.data.map((item) => item.intake),
          years: response.data.map((item) => item.year),
          enrolment: response.data.map((item) => item.enrolment),
        };
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("You must be logged in to view this page.");
          navigate("/login");
        }
      }
    };

    const fetchData = async () => {
      const allData = await Promise.all(
        selectedCourses.map(fetchDataForCourse)
      );
      setChartData(allData);
    };

    fetchData();
  }, [selectedCourses]);

  const handleCourseChange_2 = (event, newValue) => {
    if (newValue.length > 5) {
      newValue.pop();
      alert("You can select a maximum of 5 courses at a time.");
      return;
    }
    else {
      setSelectedCourses(newValue.map((course) => course.value));
    };
  };

  const options_intake = {
    title: {
      text: "Intake Data",
      style: {
        fontFamily: "Roboto Condensed, sans-serif",
      },
    },
    xaxis: {
      categories: chartData[0]?.years?.sort((a, b) => a - b) || [],
      labels: {
        style: {
          fontFamily: "Roboto Condensed, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Roboto Condensed, sans-serif",
        },
      },
    },
    tooltip: {
      style: {
        fontFamily: "Roboto Condensed, sans-serif",
      },
    },
  };

  const options_enrol = {
    title: {
      text: "Enrolment Data",
      style: {
        fontFamily: "Roboto Condensed, sans-serif",
      },
    },
    xaxis: {
      categories: chartData[0]?.years?.sort((a, b) => a - b) || [],
      labels: {
        style: {
          fontFamily: "Roboto Condensed, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Roboto Condensed, sans-serif",
        },
      },
    },
    tooltip: {
      style: {
        fontFamily: "Roboto Condensed, sans-serif",
      },
    },
  };

  const series = selectedCourses.map((course) => {
    const courseData = chartData.find((data) => data.name === course);
    return {
      name: course,
      data:
        selectedButton === "intake"
          ? courseData?.intake || []
          : courseData?.enrolment || [],
    };
  });

  const courseListWithDicts = [
    { label: "Accountancy", value: "Accountancy" },
    { label: "Architecture, Building & Real Estate", value: "Architecture, Building & Real Estate" },
    { label: "Business & Administration", value: "Business & Administration" },
    { label: "Dentistry", value: "Dentistry" },
    { label: "Education", value: "Education" },
    { label: "Engineering Sciences", value: "Engineering Sciences" },
    { label: "Fine & Applied Arts", value: "Fine & Applied Arts" },
    { label: "Health Sciences", value: "Health Sciences" },
    { label: "Humanities & Social Sciences", value: "Humanities & Social Sciences" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Law", value: "Law" },
    { label: "Mass Communication", value: "Mass Communication" },
    { label: "Medicine", value: "Medicine" },
    { label: "Natural, Physical & Mathematical Sciences", value: "Natural, Physical & Mathematical Sciences" },
    { label: "Services", value: "Services" }
  ];


  return (
    <div style={{ backgroundColor: '#f8ede3' }}>
      <Container maxWidth="lg" >
        {/*Page title grid*/}
        <Grid item xs={12} md={11} lg={12} style={{ paddingTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            background: '#FFF8F2',
            borderRadius: '40px', // Adjust the value to control the roundness of the edges
            padding: '1px',
            width: '1278px',
            textAlign: 'center',
            color: '#A2B29F',
          }}>
            <h1 style={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#A2B29F' }}>Statistics of Intake and Enrolment</h1>
          </div>
        </Grid>

        <Grid item xs={12} md={11} lg={12}>
          {/* First row for the header */}
          <Grid>
            <h4 style={{ fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', color: '#A2B29F' }}>
              Filter
            </h4>
          </Grid>

          {/* Second row for the buttons */}
          <Grid>
            <button
              style={{
                backgroundColor: selectedButton === "intake" ? '#DF8886' : '#FFF8F2',
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px',
                color: selectedButton === "intake" ? '#FFF' : '#A2B29F',
                width: '120px',
                textAlign: 'center',
                border: '1px solid #000',
              }}
              id='forIntake'
              variant='outlined'
              className={`button ${selectedButton === "intake" ? "button-selected" : ""}`}
              onClick={() => handleButtonClick("intake")}
            >
              Intake
            </button>
            <button
              style={{
                backgroundColor: selectedButton === "enrolment" ? '#DF8886' : '#FFF8F2',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px',
                color: selectedButton === "enrolment" ? '#FFF' : '#A2B29F',
                width: '120px',
                textAlign: 'center',
                border: '1px solid #000',
              }}
              id='forEnrolment'
              className={`button ${selectedButton === "enrolment" ? "button-selected" : ""}`}
              onClick={() => handleButtonClick("enrolment")}
            >
              Enrolment
            </button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={11} lg={12} paddingTop={4}>
          {selectedButton && (
            <div
              className="compare-text"
              style={{ color: '#A2B29F' }}>
              <h4>
                Compare {selectedButton === "intake" ? "Intake" : "Enrolment"} between sectors
              </h4>
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={11} lg={12} style={{ padding: '2vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="select-container"
            style={{
              background: '#FFF8F2',
              borderRadius: '20px', // Adjust the value to control the roundness of the edges
              padding: '10px',
              color: '#A2B29F',
              width: '100vw'
            }}>

            <Autocomplete
              multiple
              id="courses-select-checkbox"
              disableCloseOnSelect
              onChange={(event, newValue) => handleCourseChange_2(event, newValue)}
              options={courseListWithDicts} // Use the list of dictionaries
              getOptionLabel={(option) => (option.label)} // Display the label in the dropdown
              isOptionEqualToValue={(option, value) => option.value === value.value}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <span style={{ color: '#A2B29F' }}>
                      Select Sector
                    </span>
                  }
                  placeholder="e.g Accountancy"
                  fontFamily="Roboto Condensed, sans-serif"
                />
              )}
            >
            </Autocomplete>
          </div>
        </Grid>

        <Grid container spacing={3} backgroundColor='#FFF'>
          {/*Grid with chart*/}
          <Grid item xs={12} md={11} lg={12} >
            <ReactApexChart
              options={selectedButton === "intake" ? options_intake : options_enrol}
              series={series}
              type="line" />
          </Grid>
        </Grid>

      </Container >
    </div >
  );
}

export default IntakeChart;
