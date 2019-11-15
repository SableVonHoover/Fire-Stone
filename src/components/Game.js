import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import Arena from "../images/arena.jpg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import FighterCard1 from "./fighterCard";
import FighterCard2 from "./fighterCard2";
// import AudioPlayer from "./audio"

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
        <Button
          className="FightButton"
          onClick={handleVisibility}
          style={{
            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
            marginBottom: "3px"
          }}
        >
          <h1 id="FireWordsButton" className="font-effect-fire-animation">
            Let's Play FireStone
          </h1>
        </Button>
        <Grow
          in={!hidden}
          // style={{ transformOrigin: "0 0 0" }}
        >
          <Paper
            style={{
              height: "100vh",
              width: "100vw",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(" + Arena + ")",
              backgroundRepeat: "no-repeat"
            }}
            hidden={hidden}
          >
            <Grid container spacing={3} align="center" justify="center">
              <Grid
                item
                xs={6}
                style={{
                  height: "60vh",
                  width: "60vw",
                  position: "absolute",
                  top: "50%",
                  bottom: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                <FighterCard2 />
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  height: "60vh",
                  width: "60vw",
                  position: "absolute",
                  top: "50%",
                  bottom: "50%",
                  left: "80%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                <FighterCard1 />
                {/* <AudioPlayer></AudioPlayer> */}
              </Grid>
            </Grid>
          </Paper>
        </Grow>
        <div id="animated-example" className="animated slideInLeft"></div>
      </div>
    </Container>
  );
}
