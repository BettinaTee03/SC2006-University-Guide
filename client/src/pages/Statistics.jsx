import IntakeChart from "../components/IntakeChart";
import { Box } from "@mui/material";

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
    </>
  );
}

export default Statistics;
