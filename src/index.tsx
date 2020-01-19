import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let Home = () => <div>Home</div>;
let Dash = () => <div>Dash</div>;

ReactDOM.render(
  <Router basename='/website/'>
    <Switch>
      <Route path="/about">
        <Home />
      </Route>
      <Route path="/users">
        <Dash />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
