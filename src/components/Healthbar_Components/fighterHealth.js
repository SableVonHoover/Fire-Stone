import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PlayerHealthBar from "./PlayerHealthBar";
import BossHealthBar from "./BossHealthBar";
import Button from "@material-ui/core/Button";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { StyleSheet } from "react-native";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default class FighterHealth extends Component {
  state = {
    playerHealthTotal: 100,
    playerCurrentHealth: 100,
    playerDamageOutput: 0,
    playerDamageTaken: 0,
    bossHealthTotal: 100,
    bossCurrentHealth: 100,
    bossDamageOutput: 0,
    bossDamageTaken: 0
  };

  handleBossHealthChange = (key, value) => {
    this.setState({ [key]: this.state[key] - value });
  };

  render() {
    const classes = useStyles;

    return (
      // <div style={styles.Container}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={this.state.playerCurrentHealth}
          />
          <Button
            id="attack-button-1"
            onClick={() => {
              this.handleBossHealthChange.bind(this, "bossCurrentHealth", 80);
              console.log(this.state.bossCurrentHealth);
            }}
          >
            hit em
          </Button>
          <Button
            id="attack-button-2"
            onClick={() => {
              this.handleBossHealthChange.bind(this, "bossCurrentHealth", 20);
              console.log(this.state.bossCurrentHealth);
            }}
          >
            hit em
          </Button>
        </Grid>
        <Grid item xs={6}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={this.state.bossCurrentHealth}
          />
        </Grid>
      </Grid>
      // </div>
    );
  }
}
