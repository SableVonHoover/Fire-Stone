import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Game from "./Game";
import AboutApp from "./AboutApp";
import Instructions from "./Instructions";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import Paper from "@material-ui/core/Paper";
import PopAction from "./PopAction";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../js/auth";
import PrivateRoute from "../js/privateRoute";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
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
      return <Game />;
    } else if (this.state.currentComponent === "AboutApp") {
      return <AboutApp />;
    } else if (this.state.currentComponent === "Instructions") {
      return <Instructions />;
    } else if (this.state.currentComponent === "SignIn") {
      return <SignIn />;
    } else if (this.state.currentComponent === "SignOut") {
      return <SignOut />;
    }
  };

  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={AboutApp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router >
      </AuthProvider>

      <Container component="main" maxWidth="xl" align="center" justify="center">
        <CssBaseline />
        <div>
          <Grid container>
            <Grid item xs>
              <Paper className="paper">
                <PopAction
                  currentComponent={this.state.currentComponent}
                  handleComponentChange={this.handleComponentChange}
                />
                {this.renderComponent()}
                <Box mt={4}>
                  <Copyright />
                </Box>
              </Paper>
            </Grid>
          </Grid>{" "}
        </div>
      </Container>
    );
  }
}
