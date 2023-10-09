import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AspirationForm from "../components/AspirationForm";

function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const { courseName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getIndividualCourse() {
      try {
        const response = await Axios.get(
          `http://localhost:8000/courses/${courseName}`,
          { withCredentials: true }
        );
        setCourse(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("You must be logged in to view this page.");
          navigate("/login");
        }
      }
    }
    getIndividualCourse();
  }, [courseName]);

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.course_name}</h1>
          <p>School: {course.school_name}</p>
          <p>College: {course.college_name}</p>
          <p>Course Type: {course.course_type}</p>
          <p>Course Duration: {course.course_duration}</p>
          <p>Course Description: {course.description}</p>
          {course.rank_points && <p>Rank Points: {course.rank_points}</p>}
          {course.polytechnic_GPAs && (
            <p>Polytechnic GPA: {course.polytechnic_GPAs} </p>
          )}
          {course["3H2_1H1_10percentile"] && (
            <p>3H2_1H1_10percentile: {course["3H2_1H1_10percentile"]}</p>
          )}
          {course.percentage_less_equal_70_UAS && (
            <p>Less than 70%: {course.percentage_less_equal_70_UAS}</p>
          )}
          {course["percentage_70.01_to_80_UAS"] && (
            <p>70.01% to 80%: {course["percentage_70.01_to_80_UAS"]}</p>
          )}
          {course["percentage_80.01_to_90_UAS"] && (
            <p>80.01% to 90%: {course["percentage_80.01_to_90_UAS"]}</p>
          )}
          {course["percentage_less_3.2_GPA"] && (
            <p>Less than 3.2 GPA: {course["percentage_less_3.2_GPA"]}</p>
          )}
          {course["percentage_3.2_3.6_GPA"] && (
            <p>3.2 to 3.6 GPA: {course["percentage_3.2_3.6_GPA"]}</p>
          )}
          {course["percentage_3.6_4.0_GPA"] && (
            <p>3.6 to 4.0 GPA: {course["percentage_3.6_4.0_GPA"]}</p>
          )}
          <p>Remarks: {course.remarks || "NIL"}</p>
          <p>Employment Stats:</p>
          {/* {course.employment_stats.map((employmentStat) => (
            <div key={employmentStat.year}>
              <p>Year: {employmentStat.year}</p>
              <p>
                Employment Rate Overall:{" "}
                {employmentStat.employment_rate_overall}
              </p>
              <p>
                Employment Rate Full Time Permanent:{" "}
                {employmentStat.employment_rate_ft_perm}
              </p>
              <p>Basic Monthly Mean: {employmentStat.basic_monthly_mean}</p>
              <p>Basic Monthly Median: {employmentStat.basic_monthly_median}</p>
              <p>Gross Monthly Mean: {employmentStat.gross_monthly_mean}</p>
              <p>Gross Monthly Median: {employmentStat.gross_monthly_median}</p>
              <p>
                Gross Monthly 25th Percentile:{" "}
                {employmentStat.gross_mthly_25_percentile}
              </p>
              <p>
                Gross Monthly 75th Percentile:{" "}
                {employmentStat.gross_mthly_75_percentile}
              </p>
            </div>
          ))} */}
          <AspirationForm course={course.course_name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IndividualCourse;
