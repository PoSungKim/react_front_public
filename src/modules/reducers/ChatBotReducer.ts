import { NEWUSER, SETSTOMP } from "../actions/ChatBotAction";

const initialMessage: {
  stompClient: any;
  messageList: [{ message: string }];
} = { stompClient: null, messageList: [{ message: "" }] };

export const ChatBotReducer = (
  state = initialMessage,
  action: { type: string; payload: { message: string } }
) => {
  console.log("ChatBotReducer >> ", action);
  switch (action.type) {
    case SETSTOMP:
      return { ...state, stompClient: action.payload };
    case NEWUSER:
      return { ...state, messageList: [...state.messageList, action.payload] };
    default:
      return state;
  }
};
