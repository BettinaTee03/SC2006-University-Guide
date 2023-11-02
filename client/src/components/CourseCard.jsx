import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const CourseCard = ({ course }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: "85%", lg: "100%" },
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={course.imageUrl}
        alt={course.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="overline" color="secondary.main">
          {course.school}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body2">{course.description}</Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 3, mx: 2 }}>
        <PlaceIcon />
        <Typography variant="body2" sx={{ ml: 1 }}>
          {course.faculty}
        </Typography>
      </Box>
    </Card>
  );
};

export default CourseCard;
