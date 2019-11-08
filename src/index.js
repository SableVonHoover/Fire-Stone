import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import ButtonActions from "./components/ComponentLink";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./js/auth.js";
import PrivateRoute from "./js/privateRoute";

ReactDOM.render(
  <div>
    <AuthProvider>
      <Router>
        <div>
          {/* <PrivateRoute exact path="/" component={AboutApp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} /> */}
          <ButtonActions />
        </div>
      </Router>
    </AuthProvider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
