import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PlayerHealthBar from "./PlayerHealthBar";
import BossHealthBar from "./BossHealthBar";
import { StyleSheet } from "react-native";

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
  constructor(props) {
    super(props);
    this.handleBossHealthChange = this.handleBossHealthChange.bind(this);

    this.state = {
      playerHealthTotal: 100,
      playerCurrentHealth: 100,
      playerDamageOutput: 0,
      playerDamageTaken: 0,
      bossHealthTotal: 100,
      bossCurrentHealth: 100,
      bossDamageOutput: 0,
      bossDamageTaken: 0
    };
  }

  handleBossHealthChange = newValue => {
    this.setState({ bossCurrentHealth: newValue });
  };

  render() {
    return (
      // <div style={styles.Container}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PlayerHealthBar
            value={this.state.playerCurrentHealth}
            // handleChange={this.handleBossHealthChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BossHealthBar
            value={this.state.bossCurrentHealth}
            handleChange={this.handleBossHealthChange}
          />
        </Grid>
      </Grid>
      // </div>
    );
  }
}
