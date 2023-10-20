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
  styled,
} from "@mui/material";

export const CareerCard = ({ career }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledBreadcrumbs = styled(Breadcrumbs)`
    ${(props) => props.theme.breakpoints.down("sm")} {
      .MuiBreadcrumbs-ol {
        display: block;
      }
      .MuiIconButton-root {
        display: block;
        margin: auto;
      }
    }
  `;

  return (
    <Card
      sx={{
        backgroundColor: "rgb(245, 245, 245)",
        py: 10,
      }}
    >
      <CardContent>
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", lg: "2rem" },
            }}
          >
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
                  <NavigateNextIcon fontSize="small" color="secondary" />
                </IconButton>
              }
            >
              {career.careerPath.map((path, idx) => (
                <Link key={idx}>
                  <Tooltip
                    title={`Skill required: ${career.skills[idx]}`}
                    placement={isScreenSmall ? "bottom" : "bottom"}
                    enterTouchDelay={isScreenSmall ? 0 : 700}
                    leaveTouchDelay={1500}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        width: { xs: "100%", lg: "100%" },
                        fontSize: { xs: "1.2rem", lg: "1.5rem" },
                        textAlign: "center",
                        variant: "body1",
                        fontWeight: 700,
                        ":hover": {
                          color: "secondary.main",
                          textDecoration: "underline",
                          textDecorationColor: "secondary.hover",
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
