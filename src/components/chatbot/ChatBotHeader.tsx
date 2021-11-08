import React from "react";
import ChatIcon from "@material-ui/icons/Chat";

const ChatBotHeader = () => {
  return (
    <header id="ChatBotHeader">
      <ChatIcon id="ChatBotHeaderIcon" />
      <span id="ChatBotHeaderInfoMsg">무엇을 도와드릴까요 ?</span>
    </header>
  );
};

export default ChatBotHeader;
