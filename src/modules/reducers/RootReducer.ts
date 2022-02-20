import { combineReducers } from "redux";
import { ChatBotReducer } from "./ChatBotReducer";
import { CounterReducer } from "./CounterReducer";
import { UserReducer } from "./UserReducer";

const RootReducer = combineReducers({ CounterReducer, ChatBotReducer, UserReducer });
export default RootReducer;

export type RootReducerType = ReturnType<typeof RootReducer>;