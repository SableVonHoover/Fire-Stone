import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Game from "./Game";
// import AboutApp from "./AboutApp";
import Instructions from "./Instructions";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import SignOut from "./SignOut";
import Card from "@material-ui/core/Card";
import PopAction from "./PopAction";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import PeterTan from "./PeterTan";
import AdamNewman from "./AdamNewman";
import NicholasShipley from "./NicholasShipley";
import SableHoover from "./SableHoover";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import BackdropFilter from "react-backdrop-filter";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  Card: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default class ButtonActions extends Component {
  state = {
    currentComponent: "SignIn"
  };

  handleComponentChange = component => {
    this.setState({ currentComponent: component });
  };

  renderComponent = () => {
    if (this.state.currentComponent === "Game") {
      return (
        <Grow in={!false}>
          <Game />
        </Grow>
      );
    } else if (this.state.currentComponent === "AboutUs") {
      return (
        <Grow in={!false}>
          <AutoRotatingCarousel
            label="Click here to go to the Instructions page."
            open={true}
            onStart={() => {
              this.handleComponentChange("Instructions");
            }}
            onClose={() => {
              this.handleComponentChange("");
            }}
            interval={8000}
          >
            <PeterTan />
            <AdamNewman />
            <NicholasShipley />
            <SableHoover />
          </AutoRotatingCarousel>
        </Grow>
      );
    } else if (this.state.currentComponent === "Instructions") {
      return (
        <Grow in={!false}>
          <Instructions />
        </Grow>
      );
    } else if (this.state.currentComponent === "SignIn") {
      return (
        <Grow in={!false}>
          <SignIn />
        </Grow>
      );
    } else if (this.state.currentComponent === "SignUp") {
      return (
        <Grow in={!false}>
          <SignUp />
        </Grow>
      );
    }
  };

  render() {
    return (
      <Container component="main" maxWidth="xl" align="center" justify="center">
        <CssBaseline />
        <div className="body">
          <Grid container className="container">
            <Grid item xs>
              <Card className="card">
                <PopAction
                  currentComponent={this.state.currentComponent}
                  handleComponentChange={this.handleComponentChange}
                />
                {this.renderComponent()}
                <Box mt={4}>
                  <Copyright />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}
