import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function IndividualCourse() {
    const [course, setCourse] = useState(null);
    const { courseName } = useParams();

    const navigate = useNavigate();
    
        useEffect(() => {
            async function getIndividualCourse() {
                console.log(courseName);
                try {
                    const response = await Axios.get(`http://localhost:8000/courses/${courseName}`, { withCredentials: true });
                    setCourse(response.data);
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        alert("You must be logged in to view this page.");
                        navigate('/login');
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
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default IndividualCourse;

