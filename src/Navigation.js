import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AppsScreen from "./screens/AppsScreen";
import ResumeScreen from "./screens/ResumeScreen";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/apps" component={AppsScreen} />
        <Route path="/resume" component={ResumeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
