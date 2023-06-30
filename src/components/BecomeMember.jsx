import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import become_member_bg from "../assets/security-bg.jpg";
import Button from "./Button";

const BecomeMember = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${become_member_bg})`,
        backgroundSize: "cover",
        pt: 22,
        pb: 17,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{ ml: 25 }}>
          <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
            security first. and second.
          </Typography>
          <Typography
            variant="h4"
            mt={2}
            color="white"
            sx={{ fontSize: 30, fontWeight: "700" }}
          >
            what's yours remains only yours.
          </Typography>
          <Typography
            variant="h4"
            mt={1}
            color="white"
            sx={{ fontSize: 18, fontWeight: "600" }}
          >
            CRED insures that all your personal data and transactions are
            encrypted, and secured so what's yours remains only yours, there's
            no room for mistakes because we didn't leave any.
          </Typography>
          <Button label="Become a member" />
        </Grid>
        <Grid item xs={0} md={7}></Grid>
      </Grid>
    </Box>
  );
};

export default BecomeMember;
