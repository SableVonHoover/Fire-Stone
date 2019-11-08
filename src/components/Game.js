import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import "../css/App.css";
import Arena from "../images/arena.jpg";
import Container from "@material-ui/core/Container";
import MediaCard from "./fighterCard";
import MediaCard2 from "./fighterCard2";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";

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
  const [hidden, setHidden] = React.useState(true);

  const handleVisibility = () => {
    setHidden(false);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" align="center" justify="center">
      <CssBaseline />
      <div className={classes.paper}>
        <Button onClick={handleVisibility}>Click to Start!</Button>
        <Grow
          in={!hidden}
          // style={{ transformOrigin: "0 0 0" }}
        >
          <Paper
            style={{
              height: "60vh",
              width: "60vw",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(" + Arena + ")",
              backgroundRepeat: "no-repeat"
            }}
            hidden={hidden}
          >
            <Grid container spacing={3} align="center" justify="center">
              <Grid item xs={6}>
                <MediaCard></MediaCard>
              </Grid>
              <Grid item xs={6}>
                <MediaCard2></MediaCard2>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
        <div id="animated-example" class="animated slideInLeft"></div>
      </div>
    </Container>
  );
}
