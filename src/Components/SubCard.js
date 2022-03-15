import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import Paper from "@mui/material/Paper";

/** import custom components */
import CustTypog from "./CustTypog";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.secondary.main,
    padding: "2rem 3rem 1rem 3rem",
    borderRadius: "20px",

    [theme.breakpoints.down("md")]: {
      padding: "2rem 3rem 1rem 3rem",
    },
  },
  title: {
    // color: theme.palette.adviceTitle.main,
  },
  mainPaper: {
    backgroundColor: "#1c1f4a",
    "&:hover": {
      //   backgroundColor: "#6f76c8",
      backgroundColor: "#34397B",
    },
  },
}));

export default function SubCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" style={{ marginLeft: "1rem" }}>
      <Grid item>
        <Paper
          elevation={0}
          style={{
            borderRadius: "10pt",
            zIndex: 1,
            position: "relative",
            backgroundColor: props.colorPal,
            paddingBottom: "4rem",
          }}
        >
          <Grid
            container
            direction={"column"}
            justifyContent={"flex-end"}
            style={{ zIndex: 1, position: "relative" }}
          >
            <Grid
              item
              container
              justifyContent={"flex-end"}
              style={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1.5rem",
                zIndex: 1,
                position: "relative",
              }}
            >
              <img
                src={props.icon}
                alt=""
                style={{
                  marginTop: "-2rem",
                  marginRight: "1.5rem",
                  zIndex: 0,
                  position: "relative",
                }}
                width="50"
                height="50"
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={0}
          className={classes.mainPaper}
          style={{
            zIndex: 1302,
            position: "relative",
            borderRadius: "10pt",
            marginTop: "-7rem",
            paddingBottom: "2rem",
            paddingTop: "1.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          <Grid container direction={"column"}>
            <Grid
              item
              container
              direction="row"
              style={{ paddingLeft: ".5rem" }}
            >
              <Grid
                item
                container
                justifyContent={"flex-start"}
                alignItems={"center"}
                xs={6}
                style={{ paddingTop: "1rem" }}
              >
                <CustTypog
                  text={props.heading}
                  fonts={"18px"}
                  colorFont={"#fff"}
                  weight={500}
                />
              </Grid>
              <Grid
                item
                container
                justifyContent={"flex-end"}
                alignItems={"center"}
                xs={6}
                style={{ paddingRight: "1rem" }}
              >
                <CustTypog text={"..."} fonts={"20px"} colorFont={"#fff"} />
              </Grid>
            </Grid>
            <Grid item style={{ marginBottom: "1rem" }}>
              <CustTypog
                text={
                  props.selection === "Daily"
                    ? props.timeframes.daily.current + "hrs"
                    : props.selection === "Weekly"
                    ? props.timeframes.weekly.current + "hrs"
                    : props.selection === "Monthly"
                    ? props.timeframes.monthly.current + "hrs"
                    : null
                }
                fonts={"45px"}
                colorFont={"#fff"}
                weight={100}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0rem" }}>
              <CustTypog
                text={
                  props.selection === "Daily"
                    ? "Last Week - " + props.timeframes.daily.previous + "hrs"
                    : props.selection === "Weekly"
                    ? "Last Week - " + props.timeframes.weekly.previous + "hrs"
                    : props.selection === "Monthly"
                    ? "Last Week - " + props.timeframes.monthly.previous + "hrs"
                    : null
                }
                fonts={"15px"}
                colorFont={"#bdc1ff"}
                weight={400}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
