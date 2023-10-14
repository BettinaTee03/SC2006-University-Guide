import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Explore() {
  const renderLinkContent = (option) => {
    return (
      <Link to={`/courses/${option.course_name}`} className="all-link">
        {option.course_name}
      </Link>
    );
  };

  return (
    <Grid container rowSpacing={2} sx={{ width: "auto", margin: 2 }}>
      {
        <Search
          pageTitle="All Courses"
          renderOptionContent={renderLinkContent}
        />
      }
    </Grid>
  );
}

export default Explore;
