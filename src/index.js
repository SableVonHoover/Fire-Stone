import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import ButtonActions from "./components/ComponentLink";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./js/auth.js";
import { StyleSheet, ImageBackground } from "react-native";

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

ReactDOM.render(
  <ImageBackground
    // blurRadius={100}
    source={{
      uri:
        "https://images.pexels.com/photos/539986/pexels-photo-539986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }}
    style={styles.Container}
  >
    <div>
      <AuthProvider>
        <Router>
          <div>
            <ButtonActions />
          </div>
        </Router>
      </AuthProvider>
    </div>
  </ImageBackground>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
