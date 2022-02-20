import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBotContainer from "../containers/chatbot/ChatBotContainer";
import UserContainer from "../containers/chatbot/UserContainer";
import { getUsers } from "../modules/actions/UserAction";
import { RootReducerType } from "../modules/reducers/RootReducer";
import { userState } from "../modules/reducers/UserReducer";

const ChatBotPage = () => {
  
  const userState : userState = useSelector((state: RootReducerType) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(getUsers());
    console.log(userState);
  }, [userState.myUserName]);

  return (
    <>
      {/* <UserContainer userState = {userState} /> */}
      <ChatBotContainer userState = {userState}/>
    </>
  );
};

export default ChatBotPage;