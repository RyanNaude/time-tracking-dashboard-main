/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custom Components */
// import TypogComp from "../../Components/TypogComp";

/** import JSON data */
import jsonData from "../../Config/data.json";

/** import custom SVG */
import workSVg from "../../Assets/Images/icon-work.svg";
import playSVG from "../../Assets/Images/icon-play.svg";
import studySVG from "../../Assets/Images/icon-study.svg";
import execSVG from "../../Assets/Images/icon-exercise.svg";
import socialSVG from "../../Assets/Images/icon-social.svg";
import selfCareSVG from "../../Assets/Images/icon-self-care.svg";

/** import custom components */
import CustPaper from "../../Components/CustPaper";
import MainCard from "../../Components/MainCard";
import SubCard from "../../Components/SubCard";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,
    width: "1880px",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      width: "375px",
    },
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const colorPal = [
    "#ff8c66",
    "#56c2e6",
    "#ff5c7c",
    "#4acf81",
    "#7536d3",
    "#f1c65b",
  ];

  const backImg = [workSVg, playSVG, studySVG, execSVG, socialSVG, selfCareSVG];

  return (
    <Grid
      container
      className={classes.root}
      direction={matchesMD ? "column" : "row"}
      justifyContent={"center"}
      xs={12}
    >
      <Grid item container xs={6} direction={"row"}>
        <Grid
          item
          container
          xs={matchesMD ? 12 : 4}
          direction={matchesMD ? "column" : "row"}
        >
          <MainCard
            selection={props.selection}
            setSelection={props.setSelection}
          />
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "row" : "row"}
          xs={matchesMD ? 12 : 8}
        >
          {jsonData.map((data, i) => (
            <Grid
              item
              container
              justifyContent={"center"}
              alignItems={"center"}
              key={i}
              xs={matchesMD ? 12 : 4}
            >
              <SubCard
                key={i}
                colorPal={colorPal[i]}
                heading={data.title}
                icon={backImg[i]}
                timeframes={data.timeframes}
                selection={props.selection}
                setSelection={props.setSelection}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
