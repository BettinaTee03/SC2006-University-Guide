import React from "react";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Explore() {
  const renderLinkContent = (option) => {
    return (
      <Link
        to={`/courses/${option.course_name}`}
        className="explore-search-link"
      >
        {option.course_name}
      </Link>
    );
  };

  return (
    <>
      <Box
        style={{
          height: "68px",
          background:
            "linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <Grid
        container
        rowSpacing={2}
        sx={{
          width: "auto",
          mt: 2,
          ml: { xs: "14.9vw" },
          mr: { xs: "11.6vw" },
        }}
      >
        {
          <Search
            pageTitle="All Courses"
            renderOptionContent={renderLinkContent}
            selectedCourses={[]}
          />
        }
      </Grid>
    </>
  );
}

export default Explore;
