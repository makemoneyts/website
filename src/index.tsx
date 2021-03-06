import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MMTS1 from "~/pages/Articles/MMTS1";
import MMTS2 from "~/pages/Articles/MMTS2";

let Dash = () => <div>Dash</div>;

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/mmts1">
        <MMTS1 />
      </Route>
      <Route path="/mmts2">
        <MMTS2 />
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
