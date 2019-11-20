import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { StyleSheet } from "react-native";
import LinearProgress from "@material-ui/core/LinearProgress";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

export default class WizardHealth extends Component {
  state = {
    playerHealthTotal: 100,
    playerCurrentHealth: 100,
    playerDamageOutput: 0,
    playerDamageTaken: 0,
    bossHealthTotal: 100,
    bossCurrentHealth: 100,
    bossDamageOutput: 0,
    bossDamageTaken: 0,
    turn: 0
  };

  //function to handle changes to the state
  handleChange = (key, value) => {
    this.setState({ [key]: this.state[key] + value });
  };

  updateHealth = () => {
    this.setState({
      playerCurrentHealth:
        this.state.playerHealthTotal - this.state.bossDamageOutput,
      bossCurrentHealth:
        this.state.bossHealthTotal - this.state.playerDamageOutput
    });
  };

  //call this function to reset the game
  restartGame = () => {
    this.setState({
      playerHealthTotal: 100,
      playerCurrentHealth: 100,
      playerDamageOutput: 0,
      playerDamageTaken: 0,
      bossHealthTotal: 100,
      bossCurrentHealth: 100,
      bossDamageOutput: 0,
      bossDamageTaken: 0,
      turn: 0
    });
  };

  //below function for testing purposes only until originally intended functions are working
  BossDamageRandomizer = () => {
    const randomDmg = Math.floor(Math.random() * 33 + 1);

    this.setState({
      bossDamageOutput: this.state.bossDamageOutput + randomDmg
    });
  };

  gameMessage = () => {
    switch (true) {
      case this.state.playerDamageOutput >= this.state.bossHealthTotal &&
        this.state.bossDamageOutput >= this.state.playerHealthTotal &&
        this.state.turn !== 0:
        return (
          <Grid item xs={12}>
            <h3 className="GameMessage">TIE!</h3>
            <Button
              id="restart-button"
              onClick={() => {
                this.restartGame();
                console.log(this.state);
              }}
            >
              Restart
            </Button>
          </Grid>
        );
        break;
      case this.state.playerDamageOutput >= this.state.bossHealthTotal &&
        this.state.turn !== 0:
        return (
          <Grid item xs={12}>
            <h3 className="GameMessage">VICTORY!</h3>
            <Button
              id="restart-button"
              onClick={() => {
                this.restartGame();
                console.log(this.state);
              }}
            >
              Restart
            </Button>
          </Grid>
        );
        break;
      case this.state.bossDamageOutput >= this.state.playerHealthTotal &&
        this.state.turn !== 0:
        return (
          <Grid item xs={12}>
            <h3 className="GameMessage">GAME OVER!</h3>
            <Button
              id="restart-button"
              onClick={() => {
                this.restartGame();
                console.log(this.state);
              }}
            >
              Restart
            </Button>
          </Grid>
        );
        break;
      default:
        return null;
        break;
    }
  };

  render() {
    const classes = useStyles;

    const playerCurrentHealth =
      this.state.playerCurrentHealth - this.state.bossDamageOutput;

    const bossCurrentHealth =
      this.state.bossCurrentHealth - this.state.playerDamageOutput;

    return (
      // <div style={styles.Container}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <h3 class="GoodHealth">
            Health <FavoriteIcon />
          </h3>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={playerCurrentHealth}
          />
          <Grid item xs={5}>
            <Button
              id="attack-button-1"
              onClick={() => {
                this.handleChange("playerDamageOutput", 12.5);
                this.handleChange("turn", 1);
                this.BossDamageRandomizer();
                this.updateHealth();
                console.log(this.state);
              }}
            >
              Over Charge
            </Button>
            <Button
              id="attack-button-2"
              onClick={() => {
                this.handleChange("playerDamageOutput", 30);
                this.handleChange("turn", 1);
                this.BossDamageRandomizer();
                this.updateHealth();
                console.log(this.state);
              }}
            >
              Electrocute
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          {this.gameMessage()}
        </Grid>
        <Grid item xs={5}>
          <h3 class="BadHealth">
            Health <FavoriteIcon />
          </h3>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={bossCurrentHealth}
          />
        </Grid>
      </Grid>
      // </div>
    );
  }
}
