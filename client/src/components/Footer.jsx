import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Typography
        variant="body2"
        color="main"
        align="center"
        sx={{
          mt: "auto",
          py: 4,
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      >
        {"Copyright © "}
        {new Date().getFullYear() + ". "}
        Team Softbuns
      </Typography>
    </>
  );
}
