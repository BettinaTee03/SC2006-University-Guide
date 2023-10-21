import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import LoginAlert from "../components/LoginAlert";
import FilterCategories from "../components/FilterCategories";
import EmploymentChart from "../components/EmploymentChart";
import "../css/CourseCompareResults.css";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

function CourseCompareResult() {
  const [courseData, setCourseData] = useState([]);
  const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isRow = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const API_BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const handleLoginAlertClose = () => {
    setIsLoginAlertOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const skeletonLayout = (category, numCourses) => {
    const size = numCourses === 2 ? 6 : 4;

    const generateSkeletons = (height) => {
      return Array.from({ length: numCourses }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          animation="wave"
          height={height}
        />
      ));
    };

    if (category === "Description") {
      return <Stack spacing={1}>{generateSkeletons(150)}</Stack>;
    } else if (category === "Employment Statistics") {
      return <Stack spacing={1}>{generateSkeletons(480)}</Stack>;
    } else {
      return (
        <Grid container spacing={1}>
          {Array.from({ length: numCourses }).map((_, index) => (
            <Grid key={index} item xs={size}>
              <Skeleton variant="rounded" animation="wave" height={100} />
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const selectedCourses = location.state?.selectedCourses || [];

  const categories = [
    { id: "1", name: "Description" },
    { id: "2", name: "School" },
    { id: "3", name: "College" },
    { id: "4", name: "Course Type" },
    { id: "5", name: "Course Duration" },
    { id: "6", name: "Admission Requirements" },
    { id: "7", name: "Employment Statistics" },
  ];
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((category) => category.id)
  );

  useEffect(() => {
    const handleClick = async () => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/courses/compare`,
          { courses: selectedCourses },
          { withCredentials: true }
        );
        setCourseData(response.data);
        setIsLogin(true);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setIsLoginAlertOpen(true);
        }
      }
    };
    handleClick();
  }, []);

  const handleFilterChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const getCategoryData = (categoryId) => {
    return courseData.map((course, index) => {
      if (categoryId === "1") {
        return (
          <Grid item sm={12} className="detailsColumn-container" key={index}>
            <h3 className="coursename-heading">{course.course_name}</h3>
            <p>{course.description}</p>
          </Grid>
        );
      } else if (categoryId === "2") {
        return (
          <Grid
            item
            sm={12}
            md={12 / courseData.length}
            sx={{
              width: "100%",
            }}
            className={
              isRow ? "detailsColumn-container" : "detailsRow-container"
            }
            key={index}
          >
            <h3 className="coursename-heading">{course.course_name}</h3>
            <p className="details">{course.school_name}</p>
          </Grid>
        );
      } else if (categoryId === "3") {
        return (
          <Grid
            item
            sm={12}
            md={12 / courseData.length}
            sx={{
              width: "100%",
            }}
            className={
              isRow ? "detailsColumn-container" : "detailsRow-container"
            }
            key={index}
          >
            <h3 className="coursename-heading">{course.course_name}</h3>
            <p className="details">{course.college_name}</p>
          </Grid>
        );
      } else if (categoryId === "4") {
        return (
          <Grid
            item
            sm={12}
            md={12 / courseData.length}
            sx={{
              width: "100%",
            }}
            className={
              isRow ? "detailsColumn-container" : "detailsRow-container"
            }
            key={index}
          >
            <h3 className="coursename-heading">{course.course_name}</h3>
            <p className="details">{course.course_type}</p>
          </Grid>
        );
      } else if (categoryId === "5") {
        return (
          <Grid
            item
            sm={12}
            md={12 / courseData.length}
            sx={{
              width: "100%",
            }}
            className={
              isRow ? "detailsColumn-container" : "detailsRow-container"
            }
            key={index}
          >
            <h3 className="coursename-heading">{course.course_name}</h3>
            <p className="details">{course.course_duration}</p>
          </Grid>
        );
      } else if (categoryId === "6") {
        return (
          <Grid
            item
            sm={12}
            md={12 / courseData.length}
            sx={{
              width: "100%",
            }}
            className={
              isRow ? "detailsColumn-container" : "detailsRow-container"
            }
            key={index}
          >
            <h3 className="coursename-heading">{course.course_name}</h3>
            {course["3H2_1H1_10percentile"] && (
              <p className="details">
                3H2/1H1 10th percentile: {course["3H2_1H1_10percentile"]}
              </p>
            )}
            {course["rank_points"] && (
              <p className="details">Rank Points: {course.rank_points}</p>
            )}
            {course["polytechnic_GPAs"] && (
              <p className="details">
                Polytechnic GPA: {course.polytechnic_GPAs}
              </p>
            )}
            {course.percentage_less_equal_70_UAS && (
              <p className="details">
                Less than 70%: {course.percentage_less_equal_70_UAS}
              </p>
            )}
            {course["percentage_70.01_to_80_UAS"] && (
              <p className="details">
                70.01% to 80%: {course["percentage_70.01_to_80_UAS"]}
              </p>
            )}
            {course["percentage_80.01_to_90_UAS"] && (
              <p className="details">
                80.01% to 90%: {course["percentage_80.01_to_90_UAS"]}
              </p>
            )}
            {course["percentage_less_3.2_GPA"] && (
              <p className="details">
                Less than 3.2 GPA: {course["percentage_less_3.2_GPA"]}
              </p>
            )}
            {course["percentage_3.2_3.6_GPA"] && (
              <p className="details">
                3.2 to 3.6 GPA: {course["percentage_3.2_3.6_GPA"]}
              </p>
            )}
            {course["percentage_3.6_4.0_GPA"] && (
              <p className="details">
                3.6 to 4.0 GPA: {course["percentage_3.6_4.0_GPA"]}
              </p>
            )}
            {course.remarks && <p>Remarks: {course.remarks}</p>}
          </Grid>
        );
      } else if (categoryId === "7") {
        return (
          <Grid item sm={12} className="detailsColumn-container" key={index}>
            <h3 className="coursename-heading">{course.course_name}</h3>
            <Grid
              item
              xs={12}
              container
              direction="column"
              alignItems="center"
              key={index}
              style={{ marginTop: "20px" }}
            >
              <EmploymentChart employmentData={course.employment_stats} />
            </Grid>
          </Grid>
        );
      }
      return null;
    });
  };

  const handleClick = () => {
    navigate("/courses", { state: { selectedCourses } });
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
      <Grid
        container
        spacing={2}
        sx={{
          width: "auto",
          ml: { xs: "2vw", md: "10vw" },
          mr: { xs: "3.5vw", md: "10.3vw" },
        }}
      >
        <Grid item xs={12} md={4} lg={3} sx={{ order: { xs: 1 } }}>
          <Grid item xs={12}>
            <FilterCategories
              categories={categories}
              onFilterChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                color: "#FFFFFF",
                fontSize: "15px",
                paddingLeft: "12px",
                paddingRight: "12px",
                height: "48px",
                marginTop: "20px",
                width: "100%",
                "&:hover": {
                  backgroundColor: "secondary.hover",
                  boxShadow: "0 8px 16px 0 rgba(250, 84, 28, 0.24)",
                },
              }}
              onClick={handleClick}
            >
              Return to Courses Page
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ order: { xs: 2 }, width: "auto", padding: 1 }}
        >
          {categories.map(
            (category) =>
              selectedCategories.includes(category.id) && (
                <Grid item key={category.id} xs={12}>
                  <h2 className="details-heading">{category.name}</h2>
                  {isLogin ? (
                    <Grid item container xs={12}>
                      {getCategoryData(category.id)}
                    </Grid>
                  ) : (
                    skeletonLayout(category.name, selectedCourses.length)
                  )}
                </Grid>
              )
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default CourseCompareResult;
