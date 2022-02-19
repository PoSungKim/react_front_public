import React, { useEffect, useMemo, useState } from "react";
import "../../assets/scss/chatbot.scss";
import chatBotImg from "../../assets/images/ChatBot.png";
import ChatBotTextArea from "../../components/chatbot/ChatbotTextArea";
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
    () => new SockJS("https://chatbot-spring.herokuapp.com/websocketConnection"),
    //() => new SockJS("http:/ec2-54-180-100-104.ap-northeast-2.compute.amazonaws.com:8080/websocketConnection"),
    []
  );
  const stompClient = useMemo(() => StompJS.Stomp.over(sockJS), [sockJS]);

  useEffect(() => {
    const TextArea = document.querySelector<HTMLInputElement>("#TextArea");
    TextArea?.focus();

    stompClient.connect({}, () => {
      stompClient.subscribe("/chatroom/public", onSubscriptionHandler);
      
      // 다른 페이지로 이동했다가 다시 /chatbot 페이지로 복귀했을 때
      // 다시 join할 필요가 없음
      if (curMsgState.myUserName !== "") return;
      stompClient.send(
        "/chatbot.join",
        { priority: 10 },
        JSON.stringify({ content: "Hello ChatBot!" })
      );
    });

    return () => {
      stompClient.disconnect();
    };
  }, []);

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
    const msg: { content: string; userName: string; "meta-info": string } =
      JSON.parse(event.body);
    console.log(event.body);
    console.log(JSON.parse(event.body));

    dispatch({
      type: msg["meta-info"] === "ChatBot" ? JOIN : SENDMSG,
      payload: { content: msg.content, userName: msg.userName },
    });
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
