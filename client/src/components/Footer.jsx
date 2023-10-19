import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Footer(props) {
  return (
    <>
      <Typography variant="body2" color="main" align="center" {...props}>
        {"Copyright © "}
        {new Date().getFullYear() + ". "}
        <Link
          color="inherit"
          href="https://github.com/timooo-thy/universityguide"
        >
          Team Softbuns
        </Link>
      </Typography>
    </>
  );
}
