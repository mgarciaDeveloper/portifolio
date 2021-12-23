// React and NPM imports
import React, { useState, useEffect } from "react";

//Components
import Presentation from "./Presentation";

//Styling imports
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

//------- MUI cores
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  CircularProgress,
  Grid,
} from "@material-ui/core"; // use it to any text style
import Box from "@mui/material/Box";

//------- MUI icons

export default function Home(props) {
  const timer = React.useRef();

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Box id="myForm" className={classes.formBox}>
          <Presentation/>

        </Box>
      </Container>
    </>
  );
}
