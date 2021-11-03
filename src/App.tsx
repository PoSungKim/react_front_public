import React from "react";
import { Route, Switch } from "react-router";
import ChatBotPage from "./page/ChatBotPage";
import "./api/hello";

const App: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ChatBotPage} />
        <Route exact path="/chatbot" component={ChatBotPage} />
        <Route component={ChatBotPage} />
      </Switch>
    </main>
  );
};

export default App;
