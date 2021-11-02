import React, { ReactElement } from "react";
import CounterContainer from "./containers/counter/CounterContainer";
import "./api/hello";
import { Route, Switch, Redirect } from "react-router";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <h1>ChatBot Project</h1>
      <Switch>
        <Route exact path="/" component={CounterContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
