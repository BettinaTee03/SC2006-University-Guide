import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const { courseName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getIndividualCourse() {
      console.log(courseName);
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
  }, [courseName, setCourse]);

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
          <p>Rank Points: {course.rank_points || "N.A."}</p>
          <p>Polytechnic GPA: {course.polytechnic_GPAs || "N.A."}</p>
          <p>
            3H2/1H1 10th Percentile: {course["3H2_1H1_10percentile"] || "N.A."}
          </p>
          <p>
            percentage_less_equal_70_UAS:{" "}
            {course.percentage_less_equal_70_UAS || "N.A."}
          </p>
          <p>
            percentage_70.01_to_80_UAS:{" "}
            {course["percentage_70.01_to_80_UAS"] || "N.A."}
          </p>
          <p>
            percentage_80.01_to_90_UAS:{" "}
            {course["percentage_80.01_to_90_UAS"] || "N.A."}
          </p>
          <p>
            percentage_less_3.2_GPA:{" "}
            {course["percentage_less_3.2_GPA"] || "N.A."}
          </p>
          <p>
            percentage_3.2_3.6_GPA: {course["percentage_3.2_3.6_GPA"] || "N.A."}
          </p>
          <p>
            percentage_3.6_4.0_GPA: {course["percentage_3.6_4.0_GPA"] || "N.A."}
          </p>
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IndividualCourse;
