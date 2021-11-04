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
    <div id="ChatBotContainer">
      <header id="ChatBotHeader"></header>
      <main id="ChatBotContent" style={style}></main>
      <footer id="ChatBotTextArea">
        <input
          type="text"
          name="TextArea"
          id="TextArea"
          placeholder="Please Type Your Message"
        />
      </footer>
    </div>
  );
};

export default ChatBotContainer;
