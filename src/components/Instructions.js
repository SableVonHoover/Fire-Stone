import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";

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

export default function AboutApp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper} style={{ backgroundColor: "lightgray" }}>
        <CssBaseline />
        <Paper
          style={{
            height: 450,
            width: 750,
            backgroundColor: "black",
            backgroundPosition: "center"
          }}
          className="paper"
        >
          
         
          <div id="intro"> Welcome, brave warrior, to.....</div>
    <div id="logo"></div>
    <div id="scroller">
        <div>
          <p>
            Blah blah blah blah blah blah Blah blah blah blah blah blahBlah blah blah blah blah blah.
          </p>
          <p>
          Blah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blah
          <p>
          Blah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blahBlah blah blah blah blah blah
          </p>
      </p>
      </div>
    </div>
    


           
         
        </Paper>
      </div>
    </Container>
  );
}
