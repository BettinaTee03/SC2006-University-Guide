import React, { useEffect, useState, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ScrollBar = () => {
  const [progress, setProgress] = useState(0);
  const frameId = useRef(null);

  const updateProgress = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / totalHeight) * 100;
    setProgress(scrollPercentage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      frameId.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "rgb(0,0,0)",
            backgroundImage:
              "linear-gradient(135deg, rgb(255, 172, 130) 0%, rgb(255, 86, 48) 100%)",
            transition: "1.2s ease-out",
          },
        }}
      />
    </Box>
  );
};

export default ScrollBar;
