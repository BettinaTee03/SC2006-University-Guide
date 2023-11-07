import React from "react";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Explore() {
  const renderLinkContent = (option) => {
    return (
      <Link
        to={`/explore/${option.course_name}`}
        className="explore-search-link"
      >
        {option.course_name}
      </Link>
    );
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
      <Grid
        container
        rowSpacing={2}
        sx={{
          width: "auto",
          mt: 2,
          ml: { xs: "7vw", sm: "5vw", md: "11vw" },
          mr: { xs: "5vw", sm: "5vw", md: "11vw" },
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
