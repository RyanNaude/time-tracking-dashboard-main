import { createTheme } from "@mui/material/styles";

const Blue = "#5847eb";
const Lightred = "#ff8c66";
const Softblue = "#56c2e6";
const LightPink = "#ff5c7c";
const Limegreen = "#4acf81";
const Violet = "#7536d3";
const Softorange = "#f1c65b";
const Verydarkblue = "#0f1424";
const Darkblue = "#1c1f4a";
const Desaturatedblue = "#6f76c8";
const PaleBlue = "#bdc1ff";

export default createTheme({
  palette: {
    primary: {
      main: Blue,
    },
    secondary: {
      main: Softblue,
    },
    tertiary: {
      main: PaleBlue,
    },
    backGround: {
      main: Verydarkblue,
    },
  },
  typography: {
    adviceHeader: {
      fontFamily: "Space Mono",
    },
    tipBody: {
      fontFamily: "Space Mono",
    },
  },
  body: {
    margin: 0,
  },
});
