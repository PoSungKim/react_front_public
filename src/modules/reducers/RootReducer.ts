import { combineReducers } from "redux";
import { ChatBotReducer } from "./ChatBotReducer";
import { CounterReducer } from "./CounterReducer";

const RootReducer = combineReducers({ CounterReducer, ChatBotReducer });
export default RootReducer;

export type RootReducerType = ReturnType<typeof RootReducer>;
