import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import CourseCompareResult from "./pages/CourseCompareResult";
import IndividualCourse from "./pages/IndividualCourse";
import IndividualProfile from "./pages/IndividualProfile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AuthProvider from "./contexts/AuthProvider";
import AuthSuccess from "./components/AuthSuccess";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212B36",
    },
    secondary: {
      main: "#FA541C",
      hover: "#B3200E",
    },
  },
  typography: {
    fontFamily: `"Roboto Condensed", "Helvetica", "Arial", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/compare" element={<CourseCompareResult />} />
            <Route path="/courses/:courseName" element={<IndividualCourse />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/auth-success" element={<AuthSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<IndividualProfile />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
