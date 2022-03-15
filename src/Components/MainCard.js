import React from "react";

import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

/** import custom components */
import CustTypog from "./CustTypog";
import CustButton from "./CustButton";

/** import custome images */
import profile from "../Assets/Images/image-jeremy.png";
import { border } from "@mui/system";

export default function MainCard(props) {
  //   const classes = useStyles(props);

  function handleChange(event) {
    props.setSelection(event.target.value);
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Paper
          elevation={0}
          style={{
            borderRadius: "10pt",
            zIndex: 1302,
            position: "relative",
            backgroundColor: "#5847eb",
            paddingBottom: "4rem",
          }}
        >
          <Grid container direction={"column"}>
            <Grid
              item
              style={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1.5rem",
              }}
            >
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
            <Grid item style={{ paddingLeft: "1rem" }}>
              <CustTypog
                text={"Report For"}
                fonts={"14px"}
                colorFont={"#fff"}
              />
            </Grid>
            <Grid item style={{ paddingLeft: "1rem" }}>
              <CustTypog text={"Jeremy"} fonts={"28px"} colorFont={"#fff"} />
            </Grid>
            <Grid item style={{ paddingLeft: "1rem" }}>
              <CustTypog text={"Robson"} fonts={"28px"} colorFont={"#fff"} />
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
          <Grid container direction={"column"}>
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
