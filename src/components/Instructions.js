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
            backgroundColor: "blue",
            backgroundPosition: "center"
          }}
          className="paper"
        >
          <br></br>
          <Typography
            variant="h5"
            component="h3"
            style={{ marginTop: 10, textAlign: "center", color: "orange" }}
          >
            Instructions.
          </Typography>

          <Typography
            component="p"
            style={{ marginTop: 10, color: "white", textAlign: "center" }}
          >
            The world is in danger, and it needs YOUR help!
            <p style={{ marginTop: 100, fontSize: 60 }}>LOGO!</p>
          </Typography>
        </Paper>
      </div>
    </Container>
  );
}
