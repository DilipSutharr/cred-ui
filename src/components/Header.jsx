import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import cred_logo from "../assets/cred-logo.png";

const Header = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      setVisible(prevScrollPosition > currentScrollPosition);
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      zIndex={10}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "fixed",
        top: visible ? "0" : "-150px",
        transition: "top 0.3s",
        py: 3,
        px: 24,
      }}
    >
      <Box component="img" src={cred_logo} width={50}></Box>
      <Stack direction="row" alignItems="center">
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: 18, fontWeight: "600" }}
        >
          credit score check
        </Typography>

        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: 18, fontWeight: "600", ml: 8 }}
        >
          CRED pay
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
