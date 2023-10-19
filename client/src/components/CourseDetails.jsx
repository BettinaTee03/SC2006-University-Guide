import React from "react";
import EmploymentChart from "./EmploymentChart";
import { Typography, Grid } from "@mui/material";

export const CourseDetails = ({ course }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography color="#A2B29F">School:</Typography>
          <Typography paragraph>
            {course.school_name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography color="#A2B29F">College:</Typography>
          <Typography paragraph>
            {course.college_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography color="#A2B29F">Course Type:</Typography>
          <Typography paragraph>
            {course.course_type}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography color="#A2B29F">Course Duration:</Typography>
          <Typography paragraph>
            {course.course_duration}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {course.rank_points && (
            <>
              <Typography color="#A2B29F">Rank Points:</Typography>
              <Typography paragraph>
                {course.rank_points}
              </Typography>
            </>
          )}
        </Grid>
        {course["3H2_1H1_10percentile"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">3H2/1H1 10th percentile:</Typography>
            <Typography paragraph>
              {course["3H2_1H1_10percentile"]}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: { xs: "2%", md: "2%" } }}>
        {course.polytechnic_GPAs && (
          <Grid item xs={6}>
            <Typography color="#A2B29F">Polytechnic GPA:</Typography>
            <Typography paragraph>
              {course.polytechnic_GPAs}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2}>
        {course.percentage_less_equal_70_UAS && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with less than 70 RP:{" "}
            </Typography>
            <Typography paragraph>
              {course.percentage_less_equal_70_UAS}%
            </Typography>
          </Grid>
        )}
        {course["percentage_70.01_to_80_UAS"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with 70.01 - 80 RP:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_70.01_to_80_UAS"]}%
            </Typography>
          </Grid>
        )}
        {course["percentage_80.01_to_90_UAS"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with 80.01 - 90 RP:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_80.01_to_90_UAS"]}%
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: { xs: "6%", md: "2%" } }}>
        {course["percentage_less_3.2_GPA"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with less than 3.2 GPA:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_less_3.2_GPA"]}%
            </Typography>
          </Grid>
        )}
        {course["percentage_3.2_3.6_GPA"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with 3.2 - 3.6 GPA:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_3.2_3.6_GPA"]}%
            </Typography>
          </Grid>
        )}
        {course["percentage_3.6_4.0_GPA"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with 3.6 - 4.0 GPA:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_3.6_4.0_GPA"]}%
            </Typography>
          </Grid>
        )}
      </Grid>

      <Grid container spacing={2}>
        {course["percentage_less_60_UAS"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with less than 60 RP:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_less_60_UAS"]}
            </Typography>
          </Grid>
        )}
        {course["percentage_60_to_90_UAS"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with 60 - 90 RP:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_60_to_90_UAS"]}%
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2}>
        {course["percentage_less_3_GPA"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with less than 3.0 GPA:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_less_3_GPA"]}
            </Typography>
          </Grid>
        )}
        {course["percentage_at_least_3_GPA"] && (
          <Grid item xs={4}>
            <Typography color="#A2B29F">
              First-choice applicants with at least 3.0 GPA:{" "}
            </Typography>
            <Typography paragraph>
              {course["percentage_at_least_3_GPA"]}%
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: { xs: "2%", md: "2%" },
          marginBottom: { xs: "2%", md: "2%" },
        }}
      >
        <Grid item xs={6}>
          <Typography color="#A2B29F">Remarks:</Typography>
          <Typography paragraph>
            {course.remarks || "NIL"}
          </Typography>
        </Grid>
      </Grid>
      <Typography color="#A2B29F">Employment Stats:</Typography>
      <Grid alignItems="center" justifyContent="center">
        <EmploymentChart
          courseName={course.course_name}
          employmentData={course.employment_stats}
        />
      </Grid>
    </>
  );
};
export default CourseDetails;
