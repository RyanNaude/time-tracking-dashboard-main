import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CustPaper() {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexWrap: "wrap",
        "& > :not(style)": {
          //   m: 1,
          width: 80,
          height: 80,
          borderRadius: "5%",
        },
      }}
    >
      <Paper elevation={0} />
    </Box>
  );
}
