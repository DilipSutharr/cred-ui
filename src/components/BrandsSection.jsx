import { Box, Typography } from "@mui/material";
import React from "react";

import brands_bg from "../assets/brands-desktop.png";

const BrandsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        overflow: "hidden",
        py: 8,
        px: 25,
      }}
    >
      <Typography
        variant="h4"
        color="black"
        mb={7}
        sx={{ fontSize: 25, fontWeight: "600" }}
      >
        rewards from brands you love.
      </Typography>
      <Box
        component="img"
        src={brands_bg}
        sx={{ display: "block", maxWidth: "100%", height: "auto" }}
      ></Box>
    </Box>
  );
};

export default BrandsSection;
