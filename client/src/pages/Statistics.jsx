import IntakeChart from "../components/IntakeChart";
import { Box, Typography } from "@mui/material";

function Statistics() {
  return (
    <>
      <Box
        sx={{
          height: "68px",
          background:
            "linear-gradient(90deg,rgb(225, 234, 238) 0%,rgb(245, 245, 245) 30%,rgb(245, 245, 245) 60%,rgb(225, 234, 238) 100%",
        }}
      />
      <IntakeChart />
      <Typography
        variant="p"
        sx={{
          fontSize: 12,
          opacity: 0.7,
          color: "main",
          display: "block",
          textAlign: "center",
          mx: "9vw",
        }}
      >
        Contains information from{" "}
        <a href="https://beta.data.gov.sg/collections/443/view">
          Universities - Intake, Enrolment and Graduates
        </a>{" "}
        accessed on October 2023 which is made available under the terms of the{" "}
        <a href="https://beta.data.gov.sg/open-data-license">
          Singapore Open Data Licence version 1.0
        </a>
      </Typography>
    </>
  );
}

export default Statistics;
