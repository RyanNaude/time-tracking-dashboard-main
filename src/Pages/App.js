import React, { useState } from "react";

/** import base pages */
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Footer from "../Layout/Footer/Footer";

/** Import MUI 5 Theme */
import { ThemeProvider } from "@mui/styles";
import theme from "../Assets/Theme/theme";

/** import material ui 5 components */
import { Grid } from "@mui/material";

function App() {
  const [selection, setSelection] = useState("Daily");

  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} justifyContent="center" alignItems={"center"}>
        <Grid item>
          {/* <Header /> */}
          <Main selection={selection} setSelection={setSelection} />
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
