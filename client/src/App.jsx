import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Explore from "./pages/Explore";
import Statistics from "./pages/Statistics";
import CourseCompareResult from "./pages/CourseCompareResult";
import IndividualCourse from "./pages/IndividualCourse";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./contexts/AuthProvider";
import AuthSuccess from "./components/AuthSuccess";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A2B29F",
    },
  },
  typography: {
    h6: {
      color: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/compare" element={<CourseCompareResult />} />
            <Route path="/courses/:courseName" element={<IndividualCourse />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/auth-success" element={<AuthSuccess />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
