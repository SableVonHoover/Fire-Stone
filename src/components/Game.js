import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import Arena from "../images/arena.jpg";
import Container from "@material-ui/core/Container";

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

export default function Game() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} style={{ backgroundColor: "lightgray" }}>
      <Paper
        style={{
          height: 450,
          width: 750,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(" + Arena + ")",
          backgroundRepeat: "no-repeat"
        }}
      >
        <br></br>
        <Typography
          variant="h5"
          component="h3"
          style={{ marginTop: 0, textAlign: "center", color: "orange" }}
        ></Typography>

        <Typography
          component="p"
          style={{ marginTop: 10, color: "white", textAlign: "center" }}
        >
          <p style={{ marginTop: 100, fontSize: 60 }}>Battle!</p>
        </Typography>
        {/* <img src={Arena}></img> */}
      </Paper>
      </div>
  </Container>
  );
}
