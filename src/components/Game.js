import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import "../css/App.css";
import Arena from "../images/arena.jpg";
import Container from "@material-ui/core/Container";
import MediaCard from "./fighterCard"
import MediaCard2 from "./fighterCard2"
import Grid from '@material-ui/core/Grid';

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
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <MediaCard></MediaCard>
        </Grid>
        <Grid item xs={6}>
        <MediaCard2></MediaCard2>
        </Grid>
        </Grid>
      
        
        <div id="animated-example" class="animated slideInLeft"></div>
        
       
      </Paper>
      </div>
  </Container>
  );
}
