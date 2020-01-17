import React from "react";
import { Route, Switch } from "react-router-dom";
import ListUser from "../modules/user/views/List";
import PageNotFound from "../common/page-not-found";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListUser} />
      <Route path="**" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
