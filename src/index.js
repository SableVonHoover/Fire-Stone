import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import PopAction from "./components/PopAction";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <PopAction />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
