import React from "react";
import { Route, Switch } from "react-router";
import ChatBotPage from "./page/ChatBotPage";
import "./api/hello";

const App: React.FC = () => {
  const current_year = new Date().getFullYear();
  return (
    <>
      <Switch>
        <Route exact path="/" component={ChatBotPage} />
        <Route exact path="/chatbot" component={ChatBotPage} />
        <Route component={ChatBotPage} />
      </Switch>
      <footer>
        {current_year - 1} - {current_year} Rights Reserved By Pskim
      </footer>
    </>
  );
};

export default App;
