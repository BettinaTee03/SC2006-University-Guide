import IntakeChart from "../components/IntakeChart";
import { Box } from "@mui/material";

function Statistics() {
  return (
    <>
      <Box
        style={{
          height: "68px",
          background:
            "linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(225, 234, 238) 90%)",
        }}
      ></Box>
      <IntakeChart />
    </>
  );
}

export default Statistics;
