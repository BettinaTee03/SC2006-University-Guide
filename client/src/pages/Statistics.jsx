import IntakeChart from "../components/IntakeChart";
import { Box } from "@mui/material";

function Statistics() {
  return (
    <>
      <Box
        style={{
          height: "68px",
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <IntakeChart />
    </>
  );
}

export default Statistics;
