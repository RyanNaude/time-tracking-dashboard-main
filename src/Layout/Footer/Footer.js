/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custom Components */
// import TypogComp from "../../Components/TypogComp";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,
    width: "1880px",
    height: "5rem",
    [theme.breakpoints.down("md")]: {
      width: "3750px",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    ></Grid>
  );
}
