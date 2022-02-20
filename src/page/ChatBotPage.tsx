import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBotContainer from "../containers/chatbot/ChatBotContainer";
import { getUsers } from "../modules/actions/UserAction";
import { RootReducerType } from "../modules/reducers/RootReducer";
import { userState } from "../modules/reducers/UserReducer";

const ChatBotPage = () => {
  
  const userState : userState = useSelector((state: RootReducerType) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(getUsers());
    console.log(userState);
  }, []);

  return (
    <>
      <ul>
        {userState.userList.map( (e, idx) =>(
          <li key={idx} >{e.name}</li>
        ))}
      </ul>
      <ChatBotContainer />
    </>
  );
};

export default ChatBotPage;
