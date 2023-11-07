import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import CourseCompareResult from "./pages/CourseCompareResult";
import IndividualCourse from "./pages/IndividualCourse";
import IndividualProfile from "./pages/IndividualProfile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./contexts/AuthProvider";
import AuthSuccess from "./components/AuthSuccess";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar";
import Box from "@mui/material/Box";

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
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AuthProvider>
          <Router>
            <Navbar />
            <ScrollBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/courses" element={<Courses />} />
              <Route
                path="/courses/compare"
                element={<CourseCompareResult />}
              />
              <Route
                path="/courses/:courseName"
                element={<IndividualCourse />}
              />
              <Route path="/statistics" element={<Statistics />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/auth-success" element={<AuthSuccess />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<IndividualProfile />} />
              <Route
                path="*"
                element={
                  <NotFound
                    text={
                      "Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling."
                    }
                  />
                }
              />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
