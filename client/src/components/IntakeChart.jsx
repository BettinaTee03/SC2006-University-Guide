import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { Grid } from "@mui/material";
import "../css/IntakeChart.css";
import { Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import LoginAlert from "./LoginAlert";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import courseListWithDicts from "./IntakeLabels.jsx";
import Typography from "@mui/material/Typography";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function IntakeChart() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("intake");
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";
  const navigate = useNavigate();

  const commonButtonStyles = {
    width: { xs: "120px" },
    maxWidth: { md: "450px" },
    fontFamily: "Roboto Condensed, sans-serif",
    height: "36px",
    fontSize: "0.8rem",
  };

  const activeButtonStyles = {
    backgroundColor: "secondary.main",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "secondary.hover",
      boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
    },
  };

  const inactiveButtonStyles = {
    backgroundColor: "#e0e0e0",
    color: "#000",
    "&:hover": {
      backgroundColor: "#d5d5d5",
    },
  };

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
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
          setIsLoginAlertOpen(true);
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
    } else {
      setSelectedCourses(newValue.map((course) => course.value));
    }
  };

  const options_intake = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    title: {
      text: "Intake Data",
    },
    xaxis: {
      categories: chartData[0]?.years?.sort((a, b) => a - b) || [],
    },
  };

  const options_enrol = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    title: {
      text: "Enrolment Data",
    },
    xaxis: {
      categories: chartData[0]?.years?.sort((a, b) => a - b) || [],
    },
  };

  const series = selectedCourses.map((course) => {
    const courseData = chartData.find((data) => data?.name === course);
    return {
      name: course,
      data:
        selectedButton === "intake"
          ? courseData?.intake || []
          : courseData?.enrolment || [],
    };
  });

  return (
    <>
      <LoginAlert
        open={isLoginAlertOpen}
        handleClose={handleLoginAlertClose}
        handleLogin={handleLogin}
      />
      <Grid
        container
        sx={{ 
          width: "auto", 
          ml: { xs: "7vw", sm: "6vw", md:"11vw" },
          mr: { xs: "7vw", sm: "6vw", md:"11vw" },
        }}
      >
        <Grid item xs={12}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 600,
              textDecoration: "none",
              marginTop: { xs: "10%", md: "3%" },
              fontSize: { xs: "1.5rem", md: "2.2rem" },
              color: "main",
            }}
          >
            Statistics of Intake and Enrolment
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              sx={{
                fontWeight: 600,
                textDecoration: "none",
                fontSize: { xs: "1rem", md: "1.3rem" },
                marginTop: { xs: "5%", md: "2%" },
                marginBottom: { xs: "2%", md: "1%" },
                color: "main",
              }}
            >
              Filter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup>
              <Button
                variant="contained"
                sx={{
                  ...commonButtonStyles,
                  ...(selectedButton === "intake"
                    ? activeButtonStyles
                    : inactiveButtonStyles),
                }}
                onClick={() => setSelectedButton("intake")}
              >
                Intake
              </Button>

              <Button
                variant="contained"
                sx={{
                  ...commonButtonStyles,
                  ...(selectedButton === "enrolment"
                    ? activeButtonStyles
                    : inactiveButtonStyles),
                }}
                onClick={() => setSelectedButton("enrolment")}
              >
                Enrolment
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ fontFamily: "Roboto Condensed, sans serif", color: "main" }}
        >
          {selectedButton && (
            <Typography
              component="h3"
              sx={{
                fontWeight: 600,
                textDecoration: "none",
                fontSize: { xs: "1rem", md: "1.3rem" },
                marginTop: { xs: "5%", md: "2%" },
                marginBottom: { xs: "4%", md: "1.5%" },
                color: "main",
              }}
            >
              Compare {selectedButton === "intake" ? "Intake" : "Enrolment"}{" "}
              between sectors
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Autocomplete
            multiple
            id="courses-select-checkbox"
            disableCloseOnSelect
            onChange={(event, newValue) =>
              handleCourseChange_2(event, newValue)
            }
            options={courseListWithDicts}
            filterOptions={(options, state) => {
              const inputValue = state.inputValue.toLowerCase();
              if (inputValue === "") {
                return options;
              }
              const filteredOptions = options
                .filter((option) =>
                  option.label.toLowerCase().includes(inputValue)
                )
                .sort((a, b) => {
                  const aIndex = a.label.toLowerCase().indexOf(inputValue);
                  const bIndex = b.label.toLowerCase().indexOf(inputValue);
                  return aIndex - bIndex;
                });
              return filteredOptions;
            }}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  color="secondary"
                />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<span>Select Sector</span>}
                placeholder="e.g Accountancy"
              />
            )}
            sx={{ paddingBottom: 2 }}
          ></Autocomplete>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ marginBottom: "50px" }}
          className="chart-container"
        >
          <ReactApexChart
            options={
              selectedButton === "intake" ? options_intake : options_enrol
            }
            series={series}
            type="line"
            height="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default IntakeChart;
