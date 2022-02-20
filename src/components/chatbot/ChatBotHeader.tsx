import React from "react";
import ChatIcon from "@material-ui/icons/Chat";

const ChatBotHeader = (props : any) => {
  return (
    <header id="Header">
      <ChatIcon id="Icon" />
      <span id="Title">
        {"Open Chatting Room : User List"}
        <br/>
        {props.userList.map((e : {name : String, email : String}, idx : number) => (
            <span key={idx}>{" " + e.name + ","}</span>
        ))}
      </span>
    </header>
  );
};

export default ChatBotHeader;
