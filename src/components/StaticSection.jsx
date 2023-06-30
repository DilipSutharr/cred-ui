import { Box } from "@mui/material";
import React from "react";

import neopop_static_bg from "../assets/neopop-image-mock.png";

const StaticSection = () => {
  return (
    <Box height="500px" position="relative" zIndex={-1}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${neopop_static_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </Box>
  );
};

export default StaticSection;
