import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import rewards_bg from "../assets/deserve-more-bg.jpg";
import Button from "./Button";

const Rewards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${rewards_bg})`,
        backgroundSize: "cover",
        pt: 22,
        pb: 17,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{ ml: 25 }}>
          <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
            feel special more often.
          </Typography>
          <Typography
            variant="h4"
            mt={2}
            color="white"
            sx={{ fontSize: 30, fontWeight: "700" }}
          >
            exclusive rewards for paying your bills
          </Typography>
          <Typography
            variant="h4"
            mt={1}
            color="white"
            sx={{ fontSize: 18, fontWeight: "600" }}
          >
            every time you pay your credit card bills on CRED, you receive CRED
            coins. you can use these to win exclusive rewards or get special
            access to curated products and experiences. On CRED, good begets
            good.
          </Typography>
          <Button label="Explore rewards" />
        </Grid>
        <Grid item xs={0} md={7}></Grid>
      </Grid>
    </Box>
  );
};

export default Rewards;
