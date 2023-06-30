import { Stack, Typography, Box } from "@mui/material";
import React from "react";

import Button from "./Button";

import neopop_center from "../assets/neopop-center.png";
import neopop_left_1 from "../assets/neopop-left-1.png";
import neopop_left_2 from "../assets/neopop-left-2.png";
import neopop_right_1 from "../assets/neopop-right-1.png";
import neopop_right_2 from "../assets/neopop-right-2.png";

const Hero = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      pt={25}
      sx={{ backgroundColor: "black" }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={30}
      >
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontWeight: "bold" }}
          color="white"
        >
          rewards for paying credit card bills
        </Typography>
        <Typography
          variant="h4"
          mt={5}
          textAlign="center"
          color="white"
          sx={{ fontSize: 30, fontWeight: "700" }}
        >
          join 9M+ members who win rewards and cashbacks everyday
        </Typography>
        <Button label="Download CRED" />
      </Stack>

      <Stack
        position="relative"
        mt={25}
        sx={{ height: 750, width: "100%", overflow: "hidden" }}
      >
        <Box
          component="img"
          src={neopop_left_2}
          sx={{
            position: "absolute",
            left: "10%",
            top: "10%",
            transform: "translateX(-10%) translateY(10%)",
            zIndex: 1,
          }}
        ></Box>
        <Box
          component="img"
          src={neopop_left_1}
          sx={{
            position: "absolute",
            left: "30%",
            top: "5%",
            transform: "translateX(-30%) translateY(5%)",
            zIndex: 2,
          }}
        ></Box>
        <Box
          component="img"
          src={neopop_center}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        ></Box>
        <Box
          component="img"
          src={neopop_right_1}
          sx={{
            position: "absolute",
            left: "70%",
            top: "5%",
            transform: "translateX(-70%) translateY(5%)",
            zIndex: 2,
          }}
        ></Box>
        <Box
          component="img"
          src={neopop_right_2}
          sx={{
            position: "absolute",
            left: "90%",
            top: "10%",
            transform: "translateX(-90%) translateY(5%)",
            zIndex: 1,
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default Hero;
