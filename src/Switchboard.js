import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { AppsScreen } from "./screens/AppsScreen";
import { ResumeScreen } from "./screens/ResumeScreen";

const Switchboard = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="/things">
        <AppsScreen />
      </Route>
      <Route path="/resume">
        <ResumeScreen />
      </Route>
    </Switch>
  );
};

export { Switchboard };
