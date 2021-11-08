import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../../assets/scss/chatbot.scss";
import chatBotImg from "../../assets/images/ChatBot.png";
import ChatBotTextArea from "../../components/chatbot/ChatBotTextArea";
import * as SockJS from "sockjs-client";
import * as StompJS from "@stomp/stompjs";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../modules/reducers/RootReducer";
import { NEWUSER } from "../../modules/actions/ChatBotAction";
import ChatBox from "../../components/chatbot/ChatBox";
import ChatIcon from "@material-ui/icons/Chat";

const style = {
  backgroundImage: `url(${chatBotImg})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

type message = {
  username: string;
  content: string;
  created_at: string;
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
    stompClient.connect({}, async () => {
      await stompClient.send(
        "/chatbot.newUser",
        { priority: 10 },
        JSON.stringify({ message: "Hello ChatBot!" })
      );
      await stompClient.subscribe("/topic/public", onSubscriptionHandler);
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
    stompClient.send(
      "/chatbot.sendMessage",
      {},
      JSON.stringify({ message: msgInput })
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
    dispatch({ type: NEWUSER, payload: JSON.parse(msg) });
    console.log(JSON.parse(msg));
  };

  const asyncMsgContent: {
    stompClient: any;
    messageList: [{ message: string }];
  } = useSelector((state: RootReducerType) => state.ChatBotReducer);

  let keyNum = 1;
  return (
    <div id="ChatBotContainer">
      <header id="ChatBotHeader">
        <ChatIcon id="ChatBotHeaderIcon" />
        <span id="ChatBotHeaderInfoMsg">무엇을 도와드릴까요 ?</span>
      </header>
      <main id="ChatBotContent" style={style}>
        {asyncMsgContent.messageList.map((e) => {
          if (e.message === "") return;
          keyNum++;
          return <ChatBox key={keyNum} message={e.message} />;
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
