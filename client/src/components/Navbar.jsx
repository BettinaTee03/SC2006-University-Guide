import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SchoolIcon from "@mui/icons-material/School";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import AlertSnackbar from "./AlertSnackbar";

const pages = ["Home", "Explore", "Courses", "Statistics"];
const settings = ["Profile", "Login", "Register", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);

  const alertMessage = isAuthenticated
    ? "An error occurred while logging out. Please try again later."
    : "Logged out successfully!";

  const severity = isAuthenticated ? "error" : "success";

  const filteredSettings = isAuthenticated
    ? settings.filter(
        (setting) => setting !== "Login" && setting !== "Register"
      )
    : settings.filter((setting) => setting !== "Logout");

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth/logout", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsAuthenticated(false);
        setShowAlert(true);
        navigate("/home");
      }
    } catch (error) {
      if (error.response.data.error) {
        setShowAlert(true);
      } else {
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <AlertSnackbar
        alertMessage={alertMessage}
        open={showAlert}
        setOpen={setShowAlert}
        severity={severity}
      />
      <AppBar position="static">
        <Container maxWidth="false">
          <Toolbar
            disableGutters
            sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <SchoolIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#FFFFFF",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              Softbuns
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-start",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <SchoolIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "#FFFFFF",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".2rem",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              Softbuns
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": { color: "#445044" },
                    ml: 0.5,
                    mr: 0.5,
                    textAlign: "center",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, ml: 4 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {filteredSettings.map((setting) => (
                  <MenuItem
                    key={setting}
                    component={setting === "Logout" ? "button" : Link}
                    to={`/${setting.toLowerCase()}`}
                    onClick={
                      setting === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
