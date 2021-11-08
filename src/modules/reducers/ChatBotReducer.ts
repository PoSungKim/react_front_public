import { JOIN, SENDMSG } from "../actions/ChatBotAction";

export type message = { userName: string; content: string };

export type messageState = {
  myUserName: string;
  messageList: message[];
};

const initialMessage: messageState = { myUserName: "", messageList: [] };

export const ChatBotReducer = (
  state = initialMessage,
  action: { type: string; payload: message }
) => {
  console.log("ChatBotReducer >> ", action);
  switch (action.type) {
    case JOIN:
      return {
        ...state,
        myUserName: state.myUserName
          ? state.myUserName
          : action.payload.userName,
        messageList: [
          ...state.messageList,
          { userName: "SOL", content: action.payload.content },
        ],
      };
    case SENDMSG:
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    default:
      return state;
  }
};
