import React from "react";
import { Button as MUIButton } from "@mui/material";

const Button = ({ label, startIcon = "" }) => {
  return (
    <MUIButton
      variant="contained"
      sx={{
        mt: 8,
        py: 2,
        px: 8,
        borderRadius: 10,
        textTransform: "none",
        backgroundColor: "white",
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "white",
          boxShadow: "none",
        },
      }}
      startIcon={startIcon}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
