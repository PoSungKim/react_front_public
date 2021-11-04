import React from "react";
import "../../assets/scss/chatbot.scss";

const ChatBotContainer = () => (
  <>
    <div id="ChatBotContainer">
      <div id="ChatBotHeader"></div>
      <div id="ChatBotContent"></div>
      <div id="ChatBotTextArea">
        <input type="text" name="TextArea" id="TextArea" />
      </div>
    </div>
  </>
);

export default ChatBotContainer;
