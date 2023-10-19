import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container, Stack, Typography, Breadcrumbs, Tooltip } from "@mui/material";

export const CareerCard = ({ career }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#FFF8F2",
        py: 10,
      }}
    >
      <CardContent>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div" color="#A2B29F">
            {career.careerProspect} Career Path
          </Typography>
        </Container>
        <Container>
          <Stack spacing={2} alignItems="center" justifyContent="center" my={5}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
            >
              {career.careerPath.map((path, idx) => (
                <Link key={idx} underline="hover" color="inherit" href="/">
                  <Tooltip title={`Skill required: ${career.skills[idx]}`}>
                    <Typography
                      variant="body1"
                      sx={{
                        width: { xs: 45, md: 120, lg: "100%" },
                        fontSize: { xs: 11, md: 16 },
                        textAlign: "center",
                        variant: "body1",
                        ":hover": {
                          color: "black",
                        },
                      }}
                    >
                      {path}
                    </Typography>
                  </Tooltip>
                </Link>
              ))}
            </Breadcrumbs>
          </Stack>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
