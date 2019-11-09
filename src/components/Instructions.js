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
      <div className={classes.paper} style={{ backgroundColor: "lightgray" }}>
        <CssBaseline />
        <Paper
          style={{
            height: "60vh",
            width: "60vw",
            backgroundColor: "black",
            backgroundPosition: "center"
          }}
          className="paper"
        >
          <Grid container>
            <Grid item xs={12}>
              <div id="intro"> Welcome, brave warrior, to.....</div>
            </Grid>
            <Grid item xs={12}>
              <div id="logo"></div>
            </Grid>
            <Grid item xs={12}>
              <div id="scroller">
                <div>
                  <p>
                    Blah blah blah blah blah blah Blah blah blah blah blah
                    blahBlah blah blah blah blah blah.
                  </p>
                  <p>
                    Blah blah blah blah blah blahBlah blah blah blah blah
                    blahBlah blah blah blah blah blahBlah blah blah blah blah
                    blah
                  </p>
                  <p>
                    Blah blah blah blah blah blahBlah blah blah blah blah
                    blahBlah blah blah blah blah blahBlah blah blah blah blah
                    blahBlah blah blah blah blah blahBlah blah blah blah blah
                    blah
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}
