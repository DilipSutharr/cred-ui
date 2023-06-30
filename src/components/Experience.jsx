import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import exp_bg from "../assets/money-matters-bg.jpg";
import Button from "./Button";

const Experience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${exp_bg})`,
        backgroundSize: "cover",
        pt: 22,
        pb: 17,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ ml: 25 }}>
          <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
            we take your money matters seriously.
          </Typography>
          <Typography
            variant="h4"
            mt={2}
            color="white"
            sx={{ fontSize: 30, fontWeight: "700" }}
          >
            so that you don't have to.
          </Typography>
          <Typography
            variant="h4"
            mt={1}
            color="white"
            sx={{ maxWidth: 600, fontSize: 18, fontWeight: "600" }}
          >
            never miss a due date with reminders to help you pay your bills on
            time, instant settlements mean you never wait for your payments to
            go through and statement analysis lets you know where your money
            goes, always.
          </Typography>
          <Button label="Experience the upgrade" />
        </Grid>
        <Grid item xs={0} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
