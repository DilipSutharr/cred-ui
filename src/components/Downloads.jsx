import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import rating_android from "../assets/rating-android.png";
import rating_ios from "../assets/rating-ios.png";
import play_store_logo from "../assets/play-store-logo.png";
import apple_store_logo from "../assets/apple-store-logo.png";
import Button from "./Button";

const Downloads = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 22,
        pb: 17,
        backgroundColor: "black",
      }}
    >
      <Grid container spacing={2} align="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
            4.8
          </Typography>
          <Box
            component="img"
            src={rating_ios}
            sx={{
              display: "block",
              maxWidth: "30%",
              height: "auto",
              mt: 2,
              mb: 6,
            }}
          ></Box>
          <Button
            label="Download the app"
            startIcon={
              <Box
                component="img"
                src={apple_store_logo}
                sx={{
                  display: "block",
                  width: 40,
                  height: "auto",
                }}
              ></Box>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
            4.7
          </Typography>
          <Box
            component="img"
            src={rating_android}
            sx={{
              display: "block",
              maxWidth: "30%",
              height: "auto",
              mt: 2,
              mb: 6,
            }}
          ></Box>
          <Button
            label="Download the app"
            startIcon={
              <Box
                component="img"
                src={play_store_logo}
                sx={{
                  display: "block",
                  width: 40,
                  height: "auto",
                }}
              ></Box>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Downloads;
