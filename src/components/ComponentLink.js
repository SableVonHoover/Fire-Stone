import React, { Component } from "react";
import App from "./App";
import AboutApp from "./AboutApp";
import Instructions from "./Instructions";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Paper from "@material-ui/core/Paper";
import PopAction from "./PopAction";

export default class ButtonActions extends Component {
  state = {
    currentComponent: "App"
  };

  handleComponentChange = component => {
    this.setState({ currentComponent: component });
  };

  renderComponent = () => {
    if (this.state.currentComponent === "App") {
      return <App />;
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
      <div>
        <Paper>
          <PopAction
            currentComponent={this.state.currentComponent}
            handleComponentChange={this.handleComponentChange}
          />
          {this.renderComponent()}
        </Paper>
      </div>
    );
  }
}
