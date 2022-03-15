import React from "react";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";

/** import custom components */
import CustTypog from "./CustTypog";
import CustButton from "./CustButton";

/** import custome images */
import profile from "../Assets/Images/image-jeremy.png";
import { border } from "@mui/system";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {},
  },
}));

export default function MainCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function handleChange(event) {
    props.setSelection(event.target.value);
  }

  return (
    <Grid
      container
      direction="column"
      style={{
        marginRight: "1.5rem",
        marginBottom: matchesMD ? "1.5rem" : "1rem",
      }}
    >
      <Grid item>
        <Paper
          elevation={0}
          style={{
            borderRadius: "10pt",
            zIndex: 1302,
            position: "relative",
            backgroundColor: "#5847eb",
            paddingBottom: matchesMD ? "1rem" : "3rem",
          }}
        >
          <Grid
            container
            direction={matchesMD ? "row" : "column"}
            style={{ paddingTop: "2rem", paddingLeft: "2rem" }}
          >
            <Grid item xs={2} style={{ marginBottom: "1rem" }}>
              <img
                src={profile}
                alt="Arwyp Logo"
                style={{
                  width: "3em",
                  borderRadius: "50%",
                  border: "3px solid white",
                }}
              />
            </Grid>
            <Grid item container direction={"column"} xs={10}>
              <Grid item style={{ paddingLeft: "1rem" }}>
                <CustTypog
                  text={"Report For"}
                  fonts={"14px"}
                  colorFont={"#fff"}
                />
              </Grid>
              <Grid item container direction={matchesMD ? "row" : "column"}>
                <Grid item style={{ paddingLeft: "1rem" }}>
                  <CustTypog
                    text={"Jeremy"}
                    fonts={"28px"}
                    colorFont={"#fff"}
                  />
                </Grid>
                <Grid item style={{ paddingLeft: "1rem" }}>
                  <CustTypog
                    text={"Robson"}
                    fonts={"28px"}
                    colorFont={"#fff"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={0}
          style={{
            backgroundColor: "#1c1f4a",
            borderRadius: "10pt",
            marginTop: "-2rem",
            paddingTop: "4rem",
            paddingLeft: "1rem",
          }}
        >
          <Grid
            container
            direction={matchesMD ? "row" : "column"}
            justifyContent={"space-between"}
          >
            <Grid item style={{ marginBottom: "1rem" }}>
              <CustButton
                butName={"Daily"}
                butStyle={"root"}
                handleChange={handleChange}
                butValue={"Daily"}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1rem" }}>
              <CustButton
                butName={"Weekly"}
                butStyle={"root"}
                handleChange={handleChange}
                butValue={"Weekly"}
              />
            </Grid>
            <Grid item style={{ marginBottom: "2rem" }}>
              <CustButton
                butName={"Monthly"}
                butStyle={"root"}
                handleChange={handleChange}
                butValue={"Monthly"}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
