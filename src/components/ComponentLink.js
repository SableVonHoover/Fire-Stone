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
import Landing from "./landing";
import PeterTan from "./AboutSlides/PeterTan";
import AdamNewman from "./AboutSlides/AdamNewman";
import NicholasShipley from "./AboutSlides/NicholasShipley";
import SableHoover from "./AboutSlides/SableHoover";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import BackdropFilter from "react-backdrop-filter";
import { StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    position: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
});

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
    currentComponent: "Landing"
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
              this.handleComponentChange("Landing");
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
    } else if (this.state.currentComponent === "Landing") {
      return (
        <Grow in={!false}>
          <Landing />
        </Grow>
      );
    }
  };

  render() {
    return (
      <Container component="main" maxWidth="xl" align="center" justify="center">
        <CssBaseline />
        <div>
          <Grid container>
            <Grid item xs>
              <Card className="card" elevation={10}>
                <PopAction
                  currentComponent={this.state.currentComponent}
                  handleComponentChange={this.handleComponentChange}
                  elevation={10}
                />
                <ImageBackground
                  blurRadius={10}
                  source={{
                    uri:
                      "https://images.pexels.com/photos/539986/pexels-photo-539986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }}
                  style={styles.Container}
                >
                  {this.renderComponent()}
                  <Box mt={4}>
                    <Copyright />
                  </Box>
                </ImageBackground>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}
