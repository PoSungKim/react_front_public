import React from "react";
import "../../assets/scss/chatbot.scss";
import chatBotImg from "../../assets/images/ChatBot.png";

const ChatBotContainer = () => {
  const style = {
    backgroundImage: `url(${chatBotImg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div id="ChatBotContainer">
        <header id="ChatBotHeader"></header>
        <div id="ChatBotContent" style={style}></div>
        <div id="ChatBotTextArea">
          <input
            type="text"
            name="TextArea"
            id="TextArea"
            placeholder="Please Type Your Message"
          />
        </div>
      </div>
    </>
  );
};

export default ChatBotContainer;
