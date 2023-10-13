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
import IndividualCourse from "./pages/IndividualCourse";
import Footer from "./components/BottomFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./contexts/AuthProvider";
import AuthSuccess from "./components/AuthSuccess";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A2B29F",
    },
    secondary: {
      main: "#DF8886",
    },
    background: {
      default: "#F8EDE3",
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
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseName" element={<IndividualCourse />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/courses" element={<Courses />} />
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
