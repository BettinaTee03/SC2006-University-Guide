import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        padding: 4,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="#445044" align="center">
          {"Copyright © "}
          <Link color="inherit" href="http://localhost:5173/Home">
            Softbuns
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
export default Footer;