import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import stroy_bg from "../assets/trust-bg.jpg";

const CREDStory = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${stroy_bg})`,
        backgroundSize: "cover",
        pt: 22,
        pb: 17,
      }}
    >
      <Grid container spacing={2} px={25} alignItems="flex-end">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="white" sx={{ fontWeight: "bold" }}>
            the story of CRED begins with trust.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" mt={1} color="white" sx={{ fontSize: 18 }}>
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy.
          </Typography>
          <Typography variant="h4" mt={1} color="white" sx={{ fontSize: 18 }}>
            so we thought of creating a system that rewards its members for
            doing good and being trustworthy. this way, trust as a virtue
            becomes something to aspire to, just the way it should be. then we
            went one step ahead: we built it. we know we are on the right track
            because here you are.
          </Typography>
          <Typography variant="h4" mt={3} color="white" sx={{ fontSize: 18 }}>
            if you make it to CRED, congratulations and welcome. we have a lot
            of things planned for you.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CREDStory;
