import React, { useEffect, useMemo, useState } from "react";
import "../../assets/scss/chatbot.scss";
import chatBotImg from "../../assets/images/ChatBot.png";
import ChatBotTextArea from "../../components/chatbot/ChatBotTextArea";
import * as SockJS from "sockjs-client";
import * as StompJS from "@stomp/stompjs";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../modules/reducers/RootReducer";
import ChatBox from "../../components/chatbot/ChatBox";
import ChatBotHeader from "../../components/chatbot/ChatBotHeader";
import { JOIN, SENDMSG } from "../../modules/actions/ChatBotAction";
import { messageState } from "../../modules/reducers/ChatBotReducer";

const style = {
  backgroundImage: `url(${chatBotImg})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

const ChatBotContainer = () => {
  const sockJS = useMemo(
    // () => new SockJS("http://localhost:8080/websocketConnection"),
    () =>
      new SockJS("https://chatbot-spring.herokuapp.com/websocketConnection"),
    []
  );
  const stompClient = useMemo(() => StompJS.Stomp.over(sockJS), [sockJS]);

  useEffect(() => {
    console.log("ChatBotContainer is open");

    const TextArea = document.querySelector<HTMLInputElement>("#TextArea");
    TextArea?.focus();

    stompClient.connect({}, () => {
      stompClient.subscribe("/chatroom/public", onSubscriptionHandler);
      stompClient.send(
        "/chatbot.join",
        { priority: 10 },
        JSON.stringify({ content: "Hello ChatBot!" })
      );
    });

    return () => {
      console.log("ChatBotContainer is close");
      stompClient.disconnect();
    };
  }, [stompClient]);

  const [msgInput, setMsgInput]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (msgInput === "") {
      e.preventDefault();
      return;
    }
    stompClient.send(
      "/chatbot.sendMessage",
      {},
      JSON.stringify({ userName: curMsgState.myUserName, content: msgInput })
    );
    setMsgInput("");
    e.preventDefault();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target != null && e.target.value != null && setMsgInput(e.target.value);
    e.preventDefault();
  };

  const onSubscriptionHandler = (event: { body: string }) => {
    console.log(event.body);
    const msg: string = event.body;
    if (event.body.includes("손님! 환영합니다!"))
      dispatch({ type: JOIN, payload: JSON.parse(msg) });
    else dispatch({ type: SENDMSG, payload: JSON.parse(msg) });
    console.log("onSubscriptionHandler is called!");
  };

  const curMsgState: messageState = useSelector(
    (state: RootReducerType) => state.ChatBotReducer
  );

  let keyNum = 1;
  return (
    <div id="ChatBotContainer">
      <ChatBotHeader />
      <main id="ChatBotMain" style={style}>
        {curMsgState.messageList.map((e) => {
          keyNum++;
          if (e.userName === curMsgState.myUserName) {
            return <ChatBox key={keyNum} {...{ ...e, type: "L" }} />;
          } else {
            return <ChatBox key={keyNum} {...{ ...e, type: "R" }} />;
          }
        })}
      </main>
      <ChatBotTextArea
        textInput={msgInput}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  );
};

export default React.memo(ChatBotContainer);
