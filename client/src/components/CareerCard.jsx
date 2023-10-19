import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Container,
  Stack,
  Typography,
  Breadcrumbs,
  Tooltip,
  IconButton,
  useMediaQuery,
  useTheme,
  styled
} from "@mui/material";

export const CareerCard = ({ career }) => {

  const theme = useTheme()
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"))

  const StyledBreadcrumbs = styled(Breadcrumbs)`
    ${props => props.theme.breakpoints.down("sm")} {
      .MuiBreadcrumbs-ol {
        display:block
      }
      .MuiIconButton-root {
        display:block;
        margin:auto;
      }
    }
  `

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
          <Stack alignItems="center" my={5}>
            <StyledBreadcrumbs
              separator={
                <IconButton
                  aria-label="Next"
                  sx={{
                    transform: isScreenSmall ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <NavigateNextIcon
                    fontSize="small"
                  />
                </IconButton>
              }
            >
              {career.careerPath.map((path, idx) => (
                <Link key={idx} underline="hover" color="inherit" href="/">
                  <Tooltip title={`Skill required: ${career.skills[idx]}`}>
                    <Typography
                      variant="body1"
                      sx={{
                        width: { xs: 90, md: 120, lg: "100%" },
                        fontSize: { xs: 16, md: 16 },
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
            </StyledBreadcrumbs>
            </Stack>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
