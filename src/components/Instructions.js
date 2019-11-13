import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";
import Grid from "@material-ui/core/Grid";
import Background from "../images/FireBG.gif";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Instructions() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" align="center" justify="center">
      <div className={classes.paper}>
        <CssBaseline />
        <Paper
          style={{
            height: "60vh",
            width: "60vw",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          className="paper"
        >
          <div id="intro">Welcome, brave warrior, to...</div>
          <div id="logo">
            <h1 id="FireWords" class="font-effect-fire-animation">
              FireStone
            </h1>
          </div>
          <div id="titles">
            <div id="titlecontent">
              ​<p>It has fallen to you...</p>
              <br></br>
              <p>The fate of all kind is in your hands.</p>
              <br></br>
              <p>Choose your champion. </p>​<p>Battle your opponent </p>
              <p>But choose wisely between your 2 attacks!</p>
              <p>Gain experience, gain strength</p>
              <p>Save the day!</p>
              Good luck, Brave One. ​
            </div>
          </div>
          ​ ​
        </Paper>
      </div>
    </Container>
  );
}
