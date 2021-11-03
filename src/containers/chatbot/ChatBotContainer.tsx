import React from "react";
import CounterContainer from "../counter/CounterContainer";
import "../../assets/scss/chatbot.scss";

const ChatBotContainer = () => (
  <>
    <h1 id="ChatBotContainerTitle">ChatBot Project</h1>
    <div id="ChatBotContainer">
      <CounterContainer />
    </div>
  </>
);

export default ChatBotContainer;
