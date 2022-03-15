import React from "react";

/** Import MUI components */
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({}));

export default function CustTypog(props) {
  const classes = useStyles();

  return (
    <Typography
      style={{
        fontSize: props.fonts,
        fontWeight: props.weight,
        letterSpacing: props.letSpace,
        fontFamily: "Rubik",
        color: props.colorFont,
      }}
    >
      {props.text}
    </Typography>
  );
}
